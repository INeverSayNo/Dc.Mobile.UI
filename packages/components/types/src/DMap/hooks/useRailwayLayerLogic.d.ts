import { IProps, IEmits } from '../type';
import { ShallowRef } from 'vue';
export default function useRailwayLayerLogic(props: IProps, emits: IEmits, mapInstance: ShallowRef<BMapGL.Map | null>): {
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
