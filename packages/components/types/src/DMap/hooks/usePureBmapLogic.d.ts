import { DMapEmits, DMapIProps } from '../type';
export default function usePureBmapLogic(props: DMapIProps, emits: DMapEmits): {
    MapId: string;
    MapInstance: any;
    initMap: (center?: BMapGL.Point, zoomLevel?: number) => void;
    setMapCenter: (lat: number, lng: number, zoomLevel?: number) => void;
    reload: (center?: BMapGL.Point, zoomLevel?: number) => Promise<void>;
    destoryMap: () => void;
    addRailwayBureauLayer: (bureanName?: string) => void;
    addRailwayLineLayer: (lineName?: string) => Promise<void>;
    removeRailwayLineLayer: () => void;
    removeRailwayBureauLayer: () => void;
    removeRailwayPointLayer: () => void;
    setLocationIcon: (center: BMapGL.Point) => Promise<void>;
};
