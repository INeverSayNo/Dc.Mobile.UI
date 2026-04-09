import { SFCWithInstall } from '../utils/typescript';
import { CreateComponentPublicInstanceWithMixins, ExtractPropTypes, PropType, CSSProperties, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { CellSize, CellArrowDirection } from 'vant';
import { RouteLocationRaw } from 'vue-router';
export declare const DCell: SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
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
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
        click: () => any;
        titleClick: () => any;
        valueClick: () => any;
    }, PublicProps, {
        required: boolean | "auto";
        replace: boolean;
        center: boolean;
        tag: keyof HTMLElementTagNameMap;
        isLink: boolean;
        border: boolean;
        clickable: boolean | null;
        valueLayout: "center" | "left" | "right";
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
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
    }>, {}, {}, {}, {}, {
        required: boolean | "auto";
        replace: boolean;
        center: boolean;
        tag: keyof HTMLElementTagNameMap;
        isLink: boolean;
        border: boolean;
        clickable: boolean | null;
        valueLayout: "center" | "left" | "right";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
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
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
    click: () => any;
    titleClick: () => any;
    valueClick: () => any;
}, string, {
    required: boolean | "auto";
    replace: boolean;
    center: boolean;
    tag: keyof HTMLElementTagNameMap;
    isLink: boolean;
    border: boolean;
    clickable: boolean | null;
    valueLayout: "center" | "left" | "right";
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        title?(_: {}): any;
        value?(_: {}): any;
        label?(_: {}): any;
        icon?(_: {}): any;
        'right-icon'?(_: {}): any;
        extra?(_: {}): any;
    };
})> & Record<string, any>;
export default DCell;
export * from './index.vue';
