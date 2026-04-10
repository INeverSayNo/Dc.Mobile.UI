// 站点信息
export interface RailwayPointItem {
  name: string;
  name_en: string;
  name_zh: string;
  country: string;
  province: string;
  city: string;
  district: string;
  address: string;
  node_type: number;
  is_freight_node: boolean;
  gid: number;
  data_id: string;
  creator_id: object;
  creator_name: object;
  last_modifier_id: string;
  last_modifier_name: string;
  is_deleted: boolean;
  deleter_id: object;
  deleter_name: object;
  creation_time: string;
  last_modification_time: string;
  deletion_time: object;
  code: string;
  num: string;
  is_scrap: boolean;
  railway_bureau_code: string;
  is_local: boolean;
  id: string;
  lat: number;
  lng: number;
}

// 路局信息
export interface RailwayBureaItem {
  gid: number;
  code: string;
  name: string;
  fullName: string;
  shortName: string;
  areaType: number;
  num: string;
  geoJson: object;
  id: string;
}

// 路线信息
export interface RailwayLineItem {
  lineName: string;
  confirmed: boolean;
  canEdit: boolean;
  points: {
    id: string;
    gid: number;
    name: string;
    distance: number;
    location: { lat: number; lng: number; locationSys: number };
    direction: number;
    nodeType: number;
    lineType: number;
    geometryIndex: number;
    isPrivateLine: boolean;
    isHyNode: boolean;
    level: number;
    province: string;
    country: string;
    railwayBureauCode: string;
    dataId: string;
  }[];
  geometry: { coordinates: number[][]; type: string };
}
