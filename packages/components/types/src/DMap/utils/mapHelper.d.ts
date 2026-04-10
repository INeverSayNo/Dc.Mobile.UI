import { ComputedRef, MaybeRef } from 'vue';
import { StationItem } from '../type';
export declare const PointStyle: Partial<HTMLElement["style"]>;
export declare const LogisticCenterLabelStyle: Partial<HTMLElement["style"]>;
export declare const railwayBureauArea: Map<string, Record<"bureauColor" | "lineColor", string>>;
export declare const bureaInfoList: {
    gid: number;
    code: string;
    name: string;
    fullName: string;
    shortName: string;
    areaType: number;
    num: string;
    id: string;
}[];
export declare const stationServices: {
    key: string;
    name: string;
}[];
export declare function createDcIconMarker(lat: number, lng: number, iconPath: string, iconSize?: [number, number], imageSize?: [number, number]): any;
export declare function usePrivateLineHelper(): {
    privateLineStyle: Partial<CSSStyleDeclaration>;
    createPrivateLineMark: (center: BMapGL.Point, zyxList?: StationItem["zyxList"]) => {
        point: any;
        label: any;
        marker: any;
        station: string;
    }[];
};
interface SetCenterMarkLabelOptions {
    point: BMapGL.Point;
    name: string;
    iconPath: string;
    zoomLevel?: number;
    needCenter?: boolean;
    labelOffsetX?: number;
    iconSize?: BMapGL.Size;
}
declare const setCenterMarkLabel: (MapInstance: MaybeRef<BMapGL.Map> | ComputedRef<BMapGL.Map | null | undefined>, options: SetCenterMarkLabelOptions) => {
    marker: any;
    labelMarker: any;
};
interface CreateLabelMarkerOptions {
    lat: number;
    lng: number;
    label: HTMLElement;
    className?: string;
    offsetX?: number;
    offsetY?: number;
}
declare const createLabelMarker: (options: CreateLabelMarkerOptions) => any;
declare const createDOM: (payload: string[], lat: number, lng: number) => any;
declare const getPolygonCenter: (coordinates: number[][]) => number[];
export declare function renderLinNp(lineData: any[], options?: {
    maxZoom: number;
    minZoom: number;
}): void;
export { setCenterMarkLabel, createDOM, getPolygonCenter, createLabelMarker };
