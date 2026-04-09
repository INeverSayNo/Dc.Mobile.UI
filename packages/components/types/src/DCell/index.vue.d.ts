import { DefineComponent, ExtractPropTypes, PropType, CSSProperties, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { CellSize, CellArrowDirection } from 'vant';
import { RouteLocationRaw } from 'vue-router';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        title?(_: {}): any;
        value?(_: {}): any;
        label?(_: {}): any;
        icon?(_: {}): any;
        'right-icon'?(_: {}): any;
        extra?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<ExtractPropTypes<{
    valueLayout: {
        type: () => "left" | "right" | "center";
        default: string;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    icon: StringConstructor;
    size: PropType<CellSize>;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    iconPrefix: StringConstructor;
    valueClass: PropType<unknown>;
    labelClass: PropType<unknown>;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | CSSProperties>;
    arrowDirection: PropType<CellArrowDirection>;
    required: {
        type: PropType<boolean | "auto">;
        default: null;
    };
    clickable: {
        type: PropType<boolean | null>;
        default: null;
    };
    to: PropType<RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
    click: () => any;
    titleClick: () => any;
    valueClick: () => any;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    valueLayout: {
        type: () => "left" | "right" | "center";
        default: string;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    icon: StringConstructor;
    size: PropType<CellSize>;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    iconPrefix: StringConstructor;
    valueClass: PropType<unknown>;
    labelClass: PropType<unknown>;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | CSSProperties>;
    arrowDirection: PropType<CellArrowDirection>;
    required: {
        type: PropType<boolean | "auto">;
        default: null;
    };
    clickable: {
        type: PropType<boolean | null>;
        default: null;
    };
    to: PropType<RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
}>> & Readonly<{
    onClick?: (() => any) | undefined;
    onTitleClick?: (() => any) | undefined;
    onValueClick?: (() => any) | undefined;
}>, {
    required: boolean | "auto";
    replace: boolean;
    center: boolean;
    tag: keyof HTMLElementTagNameMap;
    isLink: boolean;
    border: boolean;
    clickable: boolean | null;
    valueLayout: "center" | "left" | "right";
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
