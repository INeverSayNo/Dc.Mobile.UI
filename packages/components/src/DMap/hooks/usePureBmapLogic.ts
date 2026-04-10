import { h, nextTick, onMounted, ref, shallowRef } from "vue";
import { BmapController } from "./useLoadBMap";
import useCustomControl from "./useCustomControl";
import useRailwayLayerLogic from "./useRailwayLayerLogic";
import type { DMapEmits, DMapIProps } from "../type";
import useSatelliteMap from "./useSatelliteMap";
import { createLabelMarker } from "../utils/mapHelper";

export default function usePureBmapLogic(props: DMapIProps, emits: DMapEmits) {
  const MapId = props.mapId || "dc-pure-map";

  const MapInstance = shallowRef<BMapGL.Map | null>(null);
  const {
    addRailwayBureauLayer,
    addRailwayLineLayer,
    removeRailwayLineLayer,
    removeRailwayBureauLayer,
    removeRailwayPointLayer,
    rebuildRailwayLayer,
  } = useRailwayLayerLogic(props, emits, MapInstance);

  useSatelliteMap(props, emits, MapInstance);

  const initMap = (center?: BMapGL.Point, zoomLevel?: number) => {
    BmapController.whenLoad(async () => {
      const options: BMapGL.MapOptions = {
        minZoom: props.minZoom,
        maxZoom: props.maxZoom,
        enableRotate: false,
        enableRotateGestures: false,
      };
      const mapCenter = center || new BMapGL.Point(104.08184, 30.702176);
      MapInstance.value = new BMapGL.Map(MapId, options);
      MapInstance.value.centerAndZoom(mapCenter, zoomLevel || 14.08);

      if (props.scrollWheelZoom) {
        MapInstance.value.enableScrollWheelZoom();
      }
      setCopyrightControl();
      setEvents();
      await nextTick();
      MapInstance.value.setMapStyleV2({
        // styleJson: MapStyleJson
        styleId: "21f946c5cc0b3dc64ba1af3378c32c3a",
        version: "v3",
      });
    });
  };

  const setCopyrightControl = () => {
    if (!props.showCopyRight) return;
    const CustomControl = useCustomControl();
    // const copyrightEl = (<a href="javascript:void(0)" style={{ fontSize: props.useLargeCopyright ? "38px" : "12px" }}>{props.copyright || "©道臣智运"}</a>)
    // const copyrightEl = document.createElement("a")
    // copyrightEl.href = "javascript:void(0)"
    // copyrightEl.style.fontSize = props.useLargeCopyright ? "38px" : "12px"
    // copyrightEl.textContent = props.copyright || "©道臣智运"

    const copyrightControl = new CustomControl(
      BMAP_ANCHOR_BOTTOM_RIGHT,
      new BMapGL.Size(0, 0),
      h(
        "a",
        { style: { fontSize: props.useLargeCopyright ? "38px" : "12px" } },
        props.copyright || "©道臣智运",
      ),
    );
    MapInstance.value?.addControl(copyrightControl);
  };

  const isProgrammaticMove = ref(false);
  let programmaticMoveTimer: ReturnType<typeof setTimeout> | null = null;
  const setEvents = () => {
    let moveEndTimer: NodeJS.Timeout | null = null;
    let zoomEndRecently = false;

    // init事件
    // MapInstance.value!.onstyle_loaded = () => {
    //   emits("init")
    // }

    // 地图点击事件
    MapInstance.value!.onclick = (e) => {
      emits("click", e.point);
    };

    // 地图缩放事件
    MapInstance.value!.addEventListener("zoomend", () => {
      zoomEndRecently = true;
      setTimeout(() => {
        zoomEndRecently = false;
      }, 50);
      emits("zoomEnd");

      console.group("地图缩放层级");
      console.log(MapInstance.value?.getZoom());
      console.groupEnd();
      rebuildRailwayLayer();
    });

    // 地图移动结束事件
    MapInstance.value!.onmoveend = (e) => {
      if (moveEndTimer) clearTimeout(moveEndTimer);
      moveEndTimer = setTimeout(() => {
        if (!zoomEndRecently) {
          if (isProgrammaticMove.value) {
            emits("programmaticMoveEnd");
          } else {
            emits("moveEnd");
          }
        }
      }, 20);
    };
  };

  const locationMarker = shallowRef<BMapGL.CustomOverlay | null>(null);

  const setMapCenter = (lat: number, lng: number, zoomLevel?: number) => {
    const point = new BMapGL.Point(lng, lat);
    isProgrammaticMove.value = true;
    // let targetPoint = point
    // const pixel = MapInstance.value!.pointToPixel(point)
    // const adjustedPixel = new BMapGL.Pixel(pixel.x, pixel.y + 100)
    // targetPoint = MapInstance.value!.pixelToPoint(adjustedPixel)
    MapInstance.value?.flyTo(point, zoomLevel || MapInstance.value?.getZoom());
    setLocationIcon(point);

    if (programmaticMoveTimer) {
      clearTimeout(programmaticMoveTimer);
    }

    programmaticMoveTimer = setTimeout(() => {
      isProgrammaticMove.value = false;
      programmaticMoveTimer = null;
    }, 500);
  };

  const setLocationIcon = async (center: BMapGL.Point) => {
    locationMarker.value &&
      MapInstance.value?.removeOverlay(locationMarker.value);
    locationMarker.value = null;
    const imgIcon = document.createElement("img");
    imgIcon.src =
      "https://gateway.dczhiyun.com/api/abp/minio/wechat/icon/compass1.png";
    imgIcon.style.width = "20px";
    imgIcon.style.height = "33px";
    imgIcon.style.objectFit = "cover";
    imgIcon.classList.add("bd-location-marker-icon");
    locationMarker.value = createLabelMarker({
      label: imgIcon,
      lat: center.lat,
      lng: center.lng,
      offsetX: 0,
      offsetY: 0,
    });
    MapInstance.value?.addOverlay(locationMarker.value!);
  };

  const reload = async (center?: BMapGL.Point, zoomLevel?: number) => {
    try {
      destoryMap();
      await nextTick();
      setTimeout(() => {
        initMap(center, zoomLevel);
        setLocationIcon(
          center || new BMapGL.Point(39.91210293174053, 116.40334681632915),
        );
      }, 100);
    } catch (error) {
      console.error("Error reloading map:", error);
    }
  };

  const destoryMap = () => {
    if (MapInstance.value) {
      try {
        removeEvents();
        MapInstance.value.destroy();
        MapInstance.value = null;
      } catch (error) {
        console.error("Error destroying map:", error);
      }
    }
  };

  const removeEvents = () => {
    if (!MapInstance.value) return;
    try {
      removeRailwayLineLayer();
      removeRailwayBureauLayer();
      removeRailwayPointLayer();
      // 清理计时器
      if (programmaticMoveTimer) {
        clearTimeout(programmaticMoveTimer);
        programmaticMoveTimer = null;
      }
    } catch (error) {
      console.error("Error removing events:", error);
    }
  };

  onMounted(() => {
    BmapController.insertBMapEle();
    initMap();
  });
  return {
    MapId,
    MapInstance,
    initMap,
    setMapCenter,
    reload,
    destoryMap,
    addRailwayBureauLayer,
    addRailwayLineLayer,
    removeRailwayLineLayer,
    removeRailwayBureauLayer,
    removeRailwayPointLayer,
    setLocationIcon,
  };
}
