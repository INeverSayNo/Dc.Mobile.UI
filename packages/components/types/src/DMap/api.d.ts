import { Rsp } from '../api/types';
import { SuggestItem, ReGeocodeResult, MapNavigationResponse, MapNavigationInput, MapRegion, RailwayBureaItem, RailwayLineItem } from './type';
import { ResponseError } from 'dc-tools';
interface RailwayBureaRsp extends Rsp<any> {
    result: RailwayBureaItem[];
}
interface RailwayLineRsp extends Rsp<any> {
    result: RailwayLineItem;
}
export declare function useDMapApi(): {
    GetAddressSuggest: (keywords: string) => Promise<SuggestItem[]>;
    GetAddressCenter: (keywords: string[], single?: boolean) => Promise<MapRegion | MapRegion[] | null>;
    GetReGeocode: (lat: number, lng: number, radius?: number) => Promise<ReGeocodeResult | undefined>;
    MapNavgaition: (param: MapNavigationInput) => Promise<MapNavigationResponse | undefined>;
    GetBureaByLatlng: (payload: Record<"lat" | "lng", number>, areaType?: number) => Promise<[ ResponseError<any> | null, RailwayBureaRsp]>;
    GetLineByLatlng: (payload: Record<"lat" | "lng", number>, distance?: number) => Promise<[ ResponseError<any> | null, RailwayLineRsp]>;
};
export {};
