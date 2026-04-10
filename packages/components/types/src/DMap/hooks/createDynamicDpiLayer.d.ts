import { ShallowRef } from 'vue';
/**
 * 创建响应式 DPI 补偿图层
 * 监听缩放变化，自动重建图层以匹配当前 DPI
 */
export declare const createReactiveDpiLayer: (baseOptions: {
    layerName: string;
    paneName: string;
    maxZoom: number;
    minZoom: number;
}, mapInstance: ShallowRef<BMapGL.Map | null>, otherOptions?: Record<string, any>) => {
    rebuild: () => void;
    getLayer: () => any;
    remove: () => void;
};
