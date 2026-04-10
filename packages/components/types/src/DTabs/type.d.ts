export interface DTabsEmits {
    (eventName: "click-tab", name: string | number, title: string, event: MouseEvent, disabled: boolean): void;
    (eventName: "change", name: string | number, title: string): void;
    (eventName: "rendered", name: string | number, title: string): void;
    (eventName: "scroll", name: string | number, title: string): void;
}
