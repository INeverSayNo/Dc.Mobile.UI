import { DMapIProps, DMapEmits } from '../type';
import { ShallowRef } from 'vue';
export default function useRailwayLayerLogic(props: DMapIProps, emits: DMapEmits, mapInstance: ShallowRef<BMapGL.Map | null>): {
    removeRailwayLineLayer: () => void;
    railwayLineClickEvent: (evt: any) => Promise<void>;
    addRailwayLineLayer: (lineName?: string) => Promise<void>;
    addRailwayBureauLayer: (bureanName?: string) => void;
    removeRailwayBureauLayer: () => void;
    railwayBureauClickEvent: (evt: any) => Promise<void>;
    addRailwayPointLayer: () => Promise<void>;
    removeRailwayPointLayer: () => void;
    railwayPointClickEvent: (evt: any) => void;
    rebuildRailwayLayer: () => void;
};
