import { VNode } from 'vue';
export default function useCustomControl(): {
    new (anchor: BMapGL.ControlAnchor, offset: BMapGL.Size, vNode: VNode): {
        vNode: VNode;
        initialize(map: BMapGL.Map): HTMLElement;
    };
};
