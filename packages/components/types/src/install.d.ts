import { default as DcAliIcon } from './DcIcon';
import { default as DInput } from './DInput';
import { default as DSearch } from './DSearch';
import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps, ObjectPlugin, App } from 'vue';
import { DcIconProps } from './DcIcon/type';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        DcAliIcon: typeof DcAliIcon;
        DInput: typeof DInput;
        DSearch: typeof DSearch;
    }
}
declare const _default: (({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< DcIconProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        prefixCls: string;
        iconName: string;
        width: string | number;
        height: string | number;
    }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, SVGSVGElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< DcIconProps> & Readonly<{}>, {}, {}, {}, {}, {
        prefixCls: string;
        iconName: string;
        width: string | number;
        height: string | number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< DcIconProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    prefixCls: string;
    iconName: string;
    width: string | number;
    height: string | number;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< DcIconProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        prefixCls: string;
        iconName: string;
        width: string | number;
        height: string | number;
    }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, SVGSVGElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< DcIconProps> & Readonly<{}>, {}, {}, {}, {}, {
        prefixCls: string;
        iconName: string;
        width: string | number;
        height: string | number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< DcIconProps> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    prefixCls: string;
    iconName: string;
    width: string | number;
    height: string | number;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: string;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: string) => any;
    }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue?: string;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
    modelValue?: string;
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: string;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: string) => any;
    }, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue?: string;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
    modelValue?: string;
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>))[];
export default _default;
