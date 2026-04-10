import { BaseApi } from "../api/useRequest";
import { useHostStore } from "../store/modules/useHostStore";
import { LsysTypeEnum } from "./utils/enum";
import type { Rsp } from "../api/types";

import {
  SuggestItem,
  ReGeocodeResult,
  MapNavigationResponse,
  MapNavigationInput,
  MapRegion,
  RailwayBureaItem,
  RailwayLineItem,
} from "./type";

interface LocaitonRsp extends Rsp<any> {
  result: SuggestItem[];
}
interface MapRegionRsp extends Rsp<any> {
  result: MapRegion[];
}

interface LocaitonReGeocodeRsp extends Rsp<any> {
  result: ReGeocodeResult;
}
interface LocaitonNavigationRsp extends Rsp<any> {
  result: MapNavigationResponse;
}

interface RailwayBureaRsp extends Rsp<any> {
  result: RailwayBureaItem[];
}
interface RailwayLineRsp extends Rsp<any> {
  result: RailwayLineItem;
}



export function useDMapApi() {
  const hostStore = useHostStore();
  const LbsApi = new BaseApi({
    crypto: false,
    baseURL: hostStore.base_url,
  });

  const Api = new BaseApi({
    crypto: hostStore.useCrypto,
    baseURL: hostStore.base_url,
  });

  let cancelFn = () => {};
  async function GetAddressSuggest(keywords: string) {
    cancelFn && cancelFn();
    const { cancel, request } = await LbsApi.cancelRequest<LocaitonRsp>(
      {
        url: "/api/lbs/location-geoserver/suggestion",
        params: { Text: keywords, CRSTypes: LsysTypeEnum.get("BaiduMap")?.id },
        method: "GET",
      },
      true,
    );
    cancelFn = cancel;
    try {
      const data = await request();
      if (!Array.isArray(data.result) || !data.result.length) return [];
      const result = data.result.filter((e) => e.latitude && e.longitude);
      return result;
    } catch (error) {
      console.log(error);

      return [];
    }
  }

  async function GetAddressCenter(keywords: string[], single = false) {
    cancelFn && cancelFn();
    const { cancel, request } = await Api.cancelRequest<MapRegionRsp>(
      {
        url: "/api/solution/MapRegion/GetCenter",
        data: keywords,
        method: "POST",
      },
      true,
    );
    cancelFn = cancel;
    try {
      const data = await request();
      if (!Array.isArray(data.result) || !data.result.length)
        return single ? null : [];
      const result = data.result.filter((e) => e.center?.lat & e.center?.lng);
      if (!result.length) return single ? null : [];
      if (single) return result[0];
      return result;
    } catch (error) {
      console.log(error);

      return [];
    }
  }

  async function GetReGeocode(lat: number, lng: number, radius = 50) {
    cancelFn && cancelFn();
    const { cancel, request } =
      await LbsApi.cancelRequest<LocaitonReGeocodeRsp>(
        {
          url: "/api/lbs/location-geoserver/regeocode",
          params: { lat, lng, radius },
          method: "GET",
        },
        true,
      );
    cancelFn = cancel;
    try {
      const data = await request();
      if (data.code != "0") return undefined;
      return data.result;
    } catch (error) {
      return undefined;
    }
  }

  async function MapNavgaition(param: MapNavigationInput) {
    cancelFn && cancelFn();
    const { cancel, request } =
      await LbsApi.cancelRequest<LocaitonNavigationRsp>(
        {
          url: "/api/lbs/location-geoserver/navigation",
          data: param,
          method: "POST",
        },
        true,
      );
    cancelFn = cancel;
    try {
      const data = await request();
      if (data.code != "0") return undefined;
      const result = data.result;
      return result;
    } catch (error) {
      return undefined;
    }
  }

  async function GetBureaByLatlng(
    payload: Record<"lat" | "lng", number>,
    areaType = 1,
  ) {
    return Api.post<RailwayBureaRsp>(
      `/api/solution/area-np/query-areas?areaType=${areaType}`,
      payload,
    );
  }
  async function GetLineByLatlng(
    payload: Record<"lat" | "lng", number>,
    distance = 500,
  ) {
    return Api.post<RailwayLineRsp>(
      `/api/solution/line-np/query-by-point?distance=${distance}`,
      payload,
    );
  }

  return {
    GetAddressSuggest,
    GetAddressCenter,
    GetReGeocode,
    MapNavgaition,
    GetBureaByLatlng,
    GetLineByLatlng,
  };
}
