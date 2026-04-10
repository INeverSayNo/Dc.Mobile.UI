import { SFCWithInstall } from '../utils/typescript';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { DMapIProps, RailwayLineItem, RailwayBureauItem, RailwayPointItem } from './type';
export declare const DMap: SFCWithInstall<DefineComponent<DMapIProps, {
    MapInstance: any;
    initMap: (center?: BMapGL.Point, zoomLevel?: number) => void;
    addRailwayBureauLayer: (bureanName?: string) => void;
    removeRailwayBureauLayer: () => void;
    removeRailwayLineLayer: () => void;
    addRailwayLineLayer: (lineName?: string) => Promise<void>;
    setMapCenter: (lat: number, lng: number, zoomLevel?: number) => void;
    reload: (center?: BMapGL.Point, zoomLevel?: number) => Promise<void>;
    destoryMap: () => void;
    setLocationIcon: (center: BMapGL.Point) => Promise<void>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
    click: (payload: BMapGL.Point) => any;
    zoomEnd: () => any;
    init: () => any;
    moveEnd: () => any;
    programmaticMoveEnd: () => any;
    railwayLineClick: (payload: RailwayLineItem) => any;
    railwayBureauClick: (payload: RailwayBureauItem) => any;
    railwayPointClick: (payload: RailwayPointItem) => any;
}, string, PublicProps, Readonly< DMapIProps> & Readonly<{
    onClick?: ((payload: BMapGL.Point) => any) | undefined;
    onZoomEnd?: (() => any) | undefined;
    onInit?: (() => any) | undefined;
    onMoveEnd?: (() => any) | undefined;
    onProgrammaticMoveEnd?: (() => any) | undefined;
    onRailwayLineClick?: ((payload: RailwayLineItem) => any) | undefined;
    onRailwayBureauClick?: ((payload: RailwayBureauItem) => any) | undefined;
    onRailwayPointClick?: ((payload: RailwayPointItem) => any) | undefined;
}>, {
    width: string;
    height: string;
    className: string;
    maxZoom: number;
    minZoom: number;
    showRailwayLine: boolean;
    showRailwayStation: boolean;
    showRailwayBureau: boolean;
    mapId: string;
    copyright: string;
    showAttribution: boolean;
    stationLevel: number;
    showCopyRight: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>> & Record<string, any>;
export default DMap;
export * from './index.vue';
