export interface DTabEmits {
    (eventName: "click-tab", name: string | number, title: string, event: MouseEvent, disabled: boolean): void;
    (eventName: "clickImages", name: string | number, title: string): void;
    (eventName: "click", name: string | number, title: string): void;
    (eventName: "click", name: string | number, title: string): void;
}
