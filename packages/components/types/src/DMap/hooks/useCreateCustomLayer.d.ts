export default function useCreateCustomLayer(): {
    createLayerUrl: (baseOptons: {
        layerName: string;
        paneName: string;
        maxZoom: number;
        minZoom: number;
    }, otherOptions?: Record<string, any>) => string;
};
