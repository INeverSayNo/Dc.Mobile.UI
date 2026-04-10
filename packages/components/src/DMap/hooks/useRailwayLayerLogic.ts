// 可解决百度地图缩放小数位>0.5时，标注显示过大问题
import type { IProps, IEmits, ChinaPolygonRsp } from "../type";
import { nextTick, shallowRef, watch, type ShallowRef } from "vue";
import { booleanPointInPolygon, point } from "@turf/turf";
import useCreateCustomLayer from "./useCreateCustomLayer";
import { closeToast, showLoadingToast } from "vant";
// import { GetBureaByLatlng, GetLineByLatlng } from "../api"
import { useDMapApi } from "../api";
import { bd09towgs84, isMobile } from "../utils/coordTranslate";
import { createReactiveDpiLayer } from "./createDynamicDpiLayer";

export default function useRailwayLayerLogic(
  props: IProps,
  emits: IEmits,
  mapInstance: ShallowRef<BMapGL.Map | null>,
) {
  const { GetBureaByLatlng, GetLineByLatlng } = useDMapApi();
  const { createLayerUrl } = useCreateCustomLayer();

  const railwayBureauLayer = shallowRef<BMapGL.XYZLayer | null>(null);
  const railwayBureauLabelLayer = shallowRef<BMapGL.XYZLayer | null>(null);

  let railwayPointCtrl: ReturnType<typeof createReactiveDpiLayer> | null = null;
  const railwayPointLayer = shallowRef<BMapGL.XYZLayer | null>(null);

  let railwayLineCtrl: ReturnType<typeof createReactiveDpiLayer> | null = null;
  const railwayLineLayer = shallowRef<BMapGL.XYZLayer | null>(null);

  //#region 路局图层
  const addRailwayBureauLayer = (bureanName?: string) => {
    const tileUrl = createLayerUrl(
      {
        layerName: bureanName
          ? "dc_railway_bureau_select"
          : "dc_railway_bureau",
        paneName: "railwayBureauPane",
        maxZoom: props.maxZoom || 18,
        minZoom: props.minZoom || 3,
      },
      {
        cql_filter: bureanName ? `name = '${bureanName}'` : "",
      },
    );
    railwayBureauLayer.value = new BMapGL.XYZLayer({
      tileUrlTemplate: tileUrl + "&BBOX=[b]",
    });
    mapInstance.value?.addTileLayer(railwayBureauLayer.value);

    railwayBureauLayer.value.setTop(9999999);

    const bureauLabelLayer = createLayerUrl(
      {
        layerName: "dc_railway_bureau_label",
        paneName: "railwayBureauPane",
        maxZoom: props.maxZoom || 18,
        minZoom: props.minZoom || 3,
      },
      {
        styles: isMobile ? "dc_railway_bureau_label_new" : "",
        cql_filter: bureanName ? `name = '${bureanName}'` : "",
      },
    );
    railwayBureauLabelLayer.value = new BMapGL.XYZLayer({
      tileUrlTemplate: bureauLabelLayer + "&BBOX=[b]",
    });
    mapInstance.value?.addTileLayer(railwayBureauLabelLayer.value);
    railwayBureauLabelLayer.value.setTop(9999999);
  };

  const railwayBureauClickEvent = async (evt: any) => {
    if (!railwayBureauLayer.value || !mapInstance.value) return;
    const { latlng } = evt;
    showLoadingToast({
      message: "路局信息获取中...",
      duration: 0,
      forbidClick: true,
      className: "w-160px",
    });
    const payload = {
      lat: latlng.lat,
      lng: latlng.lng,
    };
    const [err, data] = await GetBureaByLatlng(payload);
    closeToast();
    if (err || !data || !Array.isArray(data.result) || !data.result.length) {
      return;
    }
    const [bureau = null] = data.result;
    if (!bureau) return;
    emits("railwayBureauClick", {
      ...bureau,
      full_name: bureau.fullName,
      short_name: bureau.shortName,
      area_type: bureau.areaType,
    });
  };

  const removeRailwayBureauLayer = () => {
    if (railwayBureauLayer.value) {
      mapInstance.value?.removeTileLayer(railwayBureauLayer.value);
      railwayBureauLayer.value = null;
    }
    if (railwayBureauLabelLayer.value) {
      mapInstance.value?.removeTileLayer(railwayBureauLabelLayer.value);
      railwayBureauLabelLayer.value = null;
    }
  };

  watch(
    [() => props.showRailwayBureau, () => mapInstance.value],
    ([showBureau, instance]) => {
      if (instance) {
        if (showBureau) {
          if (!railwayBureauLayer.value) addRailwayBureauLayer();
        } else {
          removeRailwayBureauLayer();
        }
      }
    },
  );

  //#endregion

  //#region 路线图层
  const addRailwayLineLayer = async (lineName = "") => {
    if (!mapInstance.value) return;
    if (lineName && railwayLineLayer.value) {
      removeRailwayLineLayer();
    }
    await nextTick();
    const lineOptions = createLayerUrl(
      {
        layerName: lineName ? "dc_railway_line_select" : "dc_railway_line",
        paneName: "railwayLinePane",
        maxZoom: props.maxZoom || 18,
        minZoom: props.minZoom || 3,
      },
      {
        cql_filter: lineName ? `line_name like '%,${lineName},%'` : "",
        styles: isMobile
          ? "dc_railway_line_new"
          : lineName
            ? "dc_railway_line_select_pc"
            : "",
      },
    );
    railwayLineCtrl = createReactiveDpiLayer(
      {
        layerName: lineName ? "dc_railway_line_select" : "dc_railway_line",
        paneName: "railwayLinePane",
        maxZoom: props.maxZoom || 18,
        minZoom: props.minZoom || 3,
      },
      mapInstance,
      {
        cql_filter: lineName ? `line_name like '%,${lineName},%'` : "",
        styles: isMobile
          ? "dc_railway_line_new"
          : lineName
            ? "dc_railway_line_select_pc"
            : "",
      },
    );
    railwayLineLayer.value = railwayLineCtrl.getLayer();
    emits("init");
  };

  const railwayLineClickEvent = async (evt: any) => {
    if (!railwayLineLayer.value || !mapInstance.value) return;
    const { lat, lng } = evt.latlng;
    const [bdlng, bdlat] = bd09towgs84(lng, lat);
    const zoomLevel = mapInstance.value.getZoom();
    const distance = zoomLevel >= 12 ? 500 : zoomLevel >= 7 ? 4000 : 8000;
    showLoadingToast({
      message: "路线信息获取中...",
      duration: 0,
      forbidClick: true,
      className: "w-160px",
    });
    const payload = {
      lat: bdlat,
      lng: bdlng,
    };
    const [err, data] = await GetLineByLatlng(payload, distance);

    closeToast();
    if (err || !data || !data.result.lineName) {
      return;
    }

    emits("railwayLineClick", data.result);
  };

  const removeRailwayLineLayer = () => {
    if (railwayLineLayer.value) {
      mapInstance.value?.removeTileLayer(railwayLineLayer.value);
      railwayLineLayer.value = null;
    }
    railwayLineCtrl?.remove();
    railwayLineCtrl = null;
  };

  watch(
    [() => props.showRailwayLine, () => mapInstance.value],
    ([showLine, instance]) => {
      if (instance) {
        if (showLine) {
          if (!railwayLineLayer.value) addRailwayLineLayer();
        } else {
          removeRailwayLineLayer();
        }
      }
    },
  );

  //#endregion

  //#region 站点港口图层
  const addRailwayPointLayer = async () => {
    if (!mapInstance.value) return;
    const pointOptions = createLayerUrl(
      {
        layerName: "dc_railway_point",
        paneName: "railwayPointPane",
        maxZoom: props.maxZoom || 18,
        minZoom: props.minZoom || 3,
      },
      {
        styles: isMobile
          ? "baidu_railway_point_mobile"
          : "baidu_railway_point_pc",
      },
    );

    // railwayPointLayer.value = new BMapGL.XYZLayer({
    //   tileUrlTemplate: pointOptions + "&BBOX=[b]",
    // })
    railwayPointCtrl = createReactiveDpiLayer(
      {
        layerName: "dc_railway_point",
        paneName: "railwayPointPane",
        maxZoom: props.maxZoom || 18,
        minZoom: props.minZoom || 3,
      },
      mapInstance,
      {
        styles: "baidu_railway_point_mobile",
      },
    );
    railwayPointLayer.value = railwayPointCtrl.getLayer();
  };

  const railwayPointClickEvent = (evt: any) => {
    if (!railwayPointCtrl || !mapInstance.value) return;
    console.log(mapInstance.value.getBounds());

    const { ne, sw } = mapInstance.value.getBounds();
    const size = mapInstance.value.getSize();

    const [bdSwLng, bdSwLat] = bd09towgs84(sw.lng, sw.lat);
    const [bdNeLng, bdNeLat] = bd09towgs84(ne.lng, ne.lat);
    const zoomLevel = mapInstance.value.getZoom();
    let buffer = 5; // 默认较小的范围

    if (zoomLevel <= 6) {
      buffer = 15; // 低缩放级别，稍大的范围
    } else if (zoomLevel <= 10) {
      buffer = 10; // 中等缩放级别
    } else {
      buffer = 5; // 高缩放级别，精确点击
    }
    const params = {
      request: "GetFeatureInfo",
      service: "WMS",
      version: "1.1.1",
      layers: "osm:dc_railway_point",
      query_layers: "osm:dc_railway_point",
      feature_count: 10,
      info_format: "application/json",
      srs: "EPSG:4326",
      width: size.width,
      height: size.height,
      buffer: buffer,
      x: Math.round(evt.x),
      y: Math.round(evt.y),
      bbox: `${bdSwLng},${bdSwLat},${bdNeLng},${bdNeLat}`,
    };

    const url = `https://gateway.dczhiyun.com/geo/geoserver/osm/wms?${Object.entries(
      params,
    )
      .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
      .join("&")}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.features && data.features.length > 0) {
          const [feature] = data.features;
          emits("railwayPointClick", {
            ...feature.properties,
            lat: feature.geometry.coordinates[1],
            lng: feature.geometry.coordinates[0],
            id: feature.id.split(".")[1],
          });
          return data;
        } else {
          const adjustedParams = {
            ...params,
            x: Math.round(evt.x - 20),
          };
          const adjustedUrl = `https://gateway.dczhiyun.com/geo/geoserver/osm/wms?${Object.entries(
            adjustedParams,
          )
            .map(
              ([key, value]) => `${key}=${encodeURIComponent(String(value))}`,
            )
            .join("&")}`;
          return fetch(adjustedUrl);
        }
      })
      .then((response) => {
        return typeof response == "object" ? response : response?.json();
      })
      .then((data) => {
        if (data && data.features && data.features.length > 0) {
          const [feature] = data.features;
          emits("railwayPointClick", {
            ...feature.properties,
            lat: feature.geometry.coordinates[1],
            lng: feature.geometry.coordinates[0],
            id: feature.id.split(".")[1],
          });
        } else {
          railwayLineClickEvent(evt);
        }
      })
      .catch((error) => {
        console.error("获取WMS要素数据失败:", error);
      });
  };

  const removeRailwayPointLayer = () => {
    if (railwayPointLayer.value) {
      mapInstance.value?.removeTileLayer(railwayPointLayer.value);
      railwayPointLayer.value = null;
    }
    railwayPointCtrl?.remove();
    railwayPointCtrl = null;
  };

  watch(
    [() => props.showRailwayStation, () => mapInstance.value],
    ([showStation, instance]) => {
      if (instance) {
        if (showStation) {
          nextTick(addRailwayPointLayer);
        } else {
          removeRailwayPointLayer();
        }
      }
    },
  );

  //#endregion

  //#region  判断是否点击中国区域
  const railwayLayerClickEvent = (payload: BMapGL.Map | null) => {
    if (!payload) return;
    mapInstance.value?.addEventListener("click", async (e) => {
      const isClickChina = await isContrainsChinaPoint(e.latlng);

      if (railwayBureauLayer.value && isClickChina) {
        railwayBureauClickEvent(e);
      } else if (railwayPointLayer.value) {
        railwayPointClickEvent(e);
      }
    });
  };

  const chinaPolygon = shallowRef<ChinaPolygonRsp>();
  const getChinaPolygon = async () => {
    const data = await fetch("./geoProvince.json").then((res) => res.json());
    chinaPolygon.value = data;
  };
  const isContrainsChinaPoint = async (latLng: BMapGL.Point) => {
    if (!chinaPolygon.value) {
      await getChinaPolygon();
    }
    for (const feature of chinaPolygon.value!.features) {
      if (
        booleanPointInPolygon(point([latLng.lng, latLng.lat]), feature as any)
      ) {
        return true;
      }
    }
    return false;
  };
  watch(() => mapInstance.value, railwayLayerClickEvent);
  //#endregion

  const rebuildRailwayLayer = () => {
    railwayLineCtrl?.rebuild();
    railwayPointCtrl?.rebuild();
  };
  return {
    removeRailwayLineLayer,
    railwayLineClickEvent,
    addRailwayLineLayer,
    addRailwayBureauLayer,
    removeRailwayBureauLayer,
    railwayBureauClickEvent,
    addRailwayPointLayer,
    removeRailwayPointLayer,
    railwayPointClickEvent,
    rebuildRailwayLayer,
  };
}
