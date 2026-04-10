declare const isMobile: boolean;
type StringOrNum = string | number;
/**
 * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
 * 即 百度 转 谷歌、高德
 */
declare function bd09togcj02(bd_lon: StringOrNum, bd_lat: StringOrNum): number[];
/**
 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
 * 即谷歌、高德 转 百度
 */
declare function gcj02tobd09(lng: StringOrNum, lat: StringOrNum): number[];
/**
 * WGS84转GCj02
 */
declare function wgs84togcj02(lng: StringOrNum, lat: StringOrNum): StringOrNum[];
/**
 * GCJ02 转换为 WGS84
 */
declare function gcj02towgs84(lng: StringOrNum, lat: StringOrNum): number[];
declare function bd09towgs84(lng: StringOrNum, lat: StringOrNum): number[];
declare function wgs84tobd09(lng: StringOrNum, lat: StringOrNum): number[];
export { bd09togcj02, gcj02tobd09, wgs84togcj02, gcj02towgs84, bd09towgs84, wgs84tobd09, isMobile, };
