export interface LikePoint {
  lng: number | string
  lat: number | string
  [key: string]: any
}

export interface Address {
  address: string
  lat: string
  lng: string
}

export interface DMapEmits {
  (eventName: "zoomEnd"): void
  (eventName: "init"): void
  (eventName: "moveEnd"): void
  (eventName: "click", payload: BMapGL.Point): void
  (eventName: "programmaticMoveEnd"): void
  (eventName: "railwayLineClick", payload: RailwayLineItem): void
  (eventName: "railwayBureauClick", payload: RailwayBureauItem): void
  (eventName: "railwayPointClick", payload: RailwayPointItem): void
}

export interface DMapIProps {
  height?: string
  width?: string
  className?: string
  showRailwayLine?: boolean
  showRailwayStation?: boolean
  showTerrain?: boolean
  showRailwayBureau?: boolean
  minZoom?: number
  maxZoom?: number
  mapId?: string
  disableZoom?: boolean
  copyright?: string
  useLargeCopyright?: boolean
  showAttribution?: boolean
  stationLevel?: number
  scrollWheelZoom?: boolean
  showCopyRight?: boolean
}

export interface RailwayBureauItem {
  code: string
  name: string
  full_name: string
  short_name: string
  area_type: number
  gid: number
  num: string
  id: string
}

export interface RailwayPointItem {
  name: string
  name_en: string
  name_zh: string
  country: string
  province: string
  city: string
  district: string
  address: string
  node_type: number
  is_freight_node: boolean
  gid: number
  data_id: string
  creator_id: object
  creator_name: object
  last_modifier_id: string
  last_modifier_name: string
  is_deleted: boolean
  deleter_id: object
  deleter_name: object
  creation_time: string
  last_modification_time: string
  deletion_time: object
  code: string
  num: string
  is_scrap: boolean
  railway_bureau_code: string
  is_local: boolean
  id: string
  lat: number
  lng: number
}

export interface SuggestItem {
  name: string
  address: string
  province: string
  city: string
  district: string
  adcode: string
  additionals: {
    platform: string
    [key: string]: string | number
  }
  latitude: number
  longitude: number
}
export interface ReGeocodeResult {
  address: string
  formattedAddress: string
  country: string
  province: string
  city: string
  district: string
  street: string
  adCode: string
  town: string
  number: string
  pois: {
    tag: string
    name: string
    type: string
    address: string
    distance: number
  }[]
  roads: {
    name: string
  }[]
  additionals: { [key: string]: any }
}

export interface MapNavigationInput {
  origin: {
    latitude: number
    longitude: number
  }
  dest: {
    latitude: number
    longitude: number
  }
  wayPoints?: {
    latitude: number
    longitude: number
  }[]
  strategy: string
}
export interface MapNavigationResponse {
  origin: {
    latitude: number
    longitude: number
    name: string
  }
  dest: {
    latitude: number
    longitude: number
    name: string
  }
  distance: number
  duration: number
  platfrom: string
  coordinates: number[][]
}

export interface MapRegion {
  name: string
  level: string
  region: {
    province: string
    city: string
    district: string
    provinceName: string
    cityName: string
    districtName: string
  }
  center: { lat: number; lng: number; locationSys: number }
}

export interface RailwayBureaItem {
  gid: number
  code: string
  name: string
  fullName: string
  shortName: string
  areaType: number
  num: string
  geoJson: object
  id: string
}

export interface RailwayLineItem {
  lineName: string
  confirmed: boolean
  canEdit: boolean
  points: {
    id: string
    gid: number
    name: string
    distance: number
    location: { lat: number; lng: number; locationSys: number }
    direction: number
    nodeType: number
    lineType: number
    geometryIndex: number
    isPrivateLine: boolean
    isHyNode: boolean
    level: number
    province: string
    country: string
    railwayBureauCode: string
    dataId: string
  }[]
  geometry: { coordinates: number[][]; type: string }
}

export interface ChinaPolygonRsp {
  type: string
  features: {
    type: string
    properties: {
      adcode: number
      name: string
      center: number[]
      centroid: number[]
      childrenNum: number
      level: string
      parent: { adcode: number }
      subFeatureIndex: number
      acroutes: number[]
    }
    geometry: { type: string; coordinates: number[][][][] }
  }[]
}

export interface StationItem {
  station: {
    formatLocation: BMapGL.Point
    id: string;
    railwayStationName: string;
    address: string;
    railwayBureauCode: string;
    stationGrade: string;
    railwayLocation: string;
    stationLevelMark: string;
    isInternationalStation: boolean;
    isExitPort: boolean;
    provinceName: string;
    provinceLocation: string;
    cityName: string;
    cityLocation: string;
    districtName: string;
    isContainerHandle: string;
    isDangerousHandle: string;
  };
  zyxList: {
    id: string;
    stationId: string;
    stationName: string;
    name: string;
    num: string;
    containerSendHS: string;
    containerArriveHS: string;
    transferMileage: number;
    arriveCategory: string;
    sendCategory: string;
    contacts: string;
    phone: string;
    address: string;
  }[];
};