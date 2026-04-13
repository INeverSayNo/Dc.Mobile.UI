import { default as DcAliIcon } from './DcAliIcon';
import { default as DInput } from './DInput';
import { default as DSearch } from './DSearch';
import { default as DCard } from './DCard';
import { default as DCell } from './DCell';
import { default as DNoData } from './DNoData';
import { default as DTabs } from './DTabs';
import { default as DTab } from './DTab';
import { default as DMap } from './DMap';
import { SFCWithInstall } from './utils/typescript';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions, CreateComponentPublicInstanceWithMixins, ExtractPropTypes, PropType, HTMLAttributes, GlobalComponents, GlobalDirectives, ComponentInternalInstance, VNodeProps, AllowedComponentProps, ComponentCustomProps, Attrs, Slot, ComponentPublicInstance, ComponentOptionsBase, DebuggerEvent, nextTick, WatchOptions, WatchStopHandle, ShallowUnwrapRef, ComponentCustomProperties, CSSProperties } from 'vue';
import { DcIconProps } from './DcAliIcon/type';
import { FieldTextAlign, FieldEnterKeyHint, FieldClearTrigger, FieldFormatTrigger, SearchShape, CellSize, CellArrowDirection, TabsType } from 'vant';
import { OnCleanup } from '@vue/reactivity';
import { DCardProps } from './DCard/types';
import { RouteLocationRaw } from 'vue-router';
import { DNoDataProps, ImgType } from './DNoData/type';
import { Interceptor, Numeric } from 'vant/lib/utils';
import { DMapIProps, RailwayLineItem, RailwayBureauItem, RailwayPointItem } from './DMap/type';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        DcAliIcon: typeof DcAliIcon;
        DInput: typeof DInput;
        DSearch: typeof DSearch;
        DCard: typeof DCard;
        DCell: typeof DCell;
        DNoData: typeof DNoData;
        DTab: typeof DTab;
        DTabs: typeof DTabs;
        DMap: typeof DMap;
    }
}
declare const _default: (( SFCWithInstall<DefineComponent<DcIconProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< DcIconProps> & Readonly<{}>, {
    prefixCls: string;
    iconName: string;
    width: string | number;
    height: string | number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, SVGSVGElement>> & Record<string, any>) | ( SFCWithInstall<DefineComponent<{
    modelValue?: string;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, PublicProps, Readonly<{
    modelValue?: string;
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>> & Record<string, any>) | ( SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        showSearch: {
            type: BooleanConstructor;
            default: boolean;
        };
        id: StringConstructor;
        name: StringConstructor;
        leftIcon: StringConstructor & {
            type: PropType<string>;
            default: string;
        };
        rightIcon: StringConstructor;
        autofocus: BooleanConstructor;
        clearable: BooleanConstructor & {
            type: BooleanConstructor;
            default: true;
        };
        maxlength: (NumberConstructor | StringConstructor)[];
        max: NumberConstructor;
        min: NumberConstructor;
        formatter: PropType<(value: string) => string>;
        clearIcon: {
            type: PropType<string>;
            default: string;
        };
        modelValue: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        inputAlign: PropType<FieldTextAlign>;
        placeholder: StringConstructor;
        autocomplete: StringConstructor;
        autocapitalize: StringConstructor;
        autocorrect: StringConstructor;
        errorMessage: StringConstructor;
        enterkeyhint: PropType<FieldEnterKeyHint>;
        clearTrigger: {
            type: PropType<FieldClearTrigger>;
            default: FieldClearTrigger;
        };
        formatTrigger: {
            type: PropType<FieldFormatTrigger>;
            default: FieldFormatTrigger;
        };
        spellcheck: {
            type: BooleanConstructor;
            default: null;
        };
        error: {
            type: BooleanConstructor;
            default: null;
        };
        disabled: {
            type: BooleanConstructor;
            default: null;
        };
        readonly: {
            type: BooleanConstructor;
            default: null;
        };
        inputmode: PropType< HTMLAttributes["inputmode"]>;
        label: StringConstructor;
        shape: {
            type: PropType<SearchShape>;
            default: SearchShape;
        };
        actionText: StringConstructor;
        background: StringConstructor;
        showAction: BooleanConstructor;
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        focus: () => void;
        blur: () => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:modelValue": (value: string) => any;
    }, PublicProps, {
        error: boolean;
        leftIcon: string;
        autofocus: boolean;
        clearable: boolean;
        clearIcon: string;
        modelValue: string | number;
        clearTrigger: FieldClearTrigger;
        formatTrigger: FieldFormatTrigger;
        spellcheck: boolean;
        disabled: boolean;
        readonly: boolean;
        showSearch: boolean;
        shape: SearchShape;
        showAction: boolean;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {
        SearchRef: ({
            $: ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                autofocus: boolean;
                disabled: boolean;
                shape: SearchShape;
                leftIcon: string;
                clearable: boolean;
                clearIcon: string;
                modelValue: string | number;
                clearTrigger: FieldClearTrigger;
                formatTrigger: FieldFormatTrigger;
                spellcheck: boolean;
                error: boolean;
                readonly: boolean;
                showAction: boolean;
            }> & Omit<{
                readonly error: boolean;
                readonly leftIcon: string;
                readonly autofocus: boolean;
                readonly clearable: boolean;
                readonly clearIcon: string;
                readonly modelValue: string | number;
                readonly clearTrigger: FieldClearTrigger;
                readonly formatTrigger: FieldFormatTrigger;
                readonly spellcheck: boolean;
                readonly disabled: boolean;
                readonly readonly: boolean;
                readonly shape: SearchShape;
                readonly showAction: boolean;
                readonly id?: string | undefined;
                readonly name?: string | undefined;
                readonly label?: string | undefined;
                readonly rightIcon?: string | undefined;
                readonly maxlength?: string | number | undefined;
                readonly max?: number | undefined;
                readonly min?: number | undefined;
                readonly formatter?: ((value: string) => string) | undefined;
                readonly inputAlign?: FieldTextAlign | undefined;
                readonly placeholder?: string | undefined;
                readonly autocomplete?: string | undefined;
                readonly autocapitalize?: string | undefined;
                readonly autocorrect?: string | undefined;
                readonly errorMessage?: string | undefined;
                readonly enterkeyhint?: FieldEnterKeyHint | undefined;
                readonly inputmode?: "search" | "text" | "tel" | "url" | "email" | "none" | "numeric" | "decimal" | undefined;
                readonly actionText?: string | undefined;
                readonly background?: string | undefined;
                readonly onFocus?: ((...args: any[]) => any) | undefined | undefined;
                readonly onBlur?: ((...args: any[]) => any) | undefined | undefined;
                readonly onCancel?: ((...args: any[]) => any) | undefined | undefined;
                readonly onClear?: ((...args: any[]) => any) | undefined | undefined;
                readonly onClickInput?: ((...args: any[]) => any) | undefined | undefined;
                readonly onClickLeftIcon?: ((...args: any[]) => any) | undefined | undefined;
                readonly onClickRightIcon?: ((...args: any[]) => any) | undefined | undefined;
                readonly "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined | undefined;
                readonly onSearch?: ((...args: any[]) => any) | undefined | undefined;
            } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "error" | "leftIcon" | "autofocus" | "clearable" | "clearIcon" | "modelValue" | "clearTrigger" | "formatTrigger" | "spellcheck" | "disabled" | "readonly" | "shape" | "showAction">;
            $attrs: Attrs;
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: Slot<any> | undefined;
            }>;
            $root: ComponentPublicInstance | null;
            $parent: ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "search" | "update:modelValue" | "focus" | "clear" | "blur" | "clickInput" | "clickLeftIcon" | "clickRightIcon" | "cancel", ...args: any[]) => void;
            $el: any;
            $options: ComponentOptionsBase<Readonly< ExtractPropTypes<{
                id: StringConstructor;
                name: StringConstructor;
                leftIcon: StringConstructor;
                rightIcon: StringConstructor;
                autofocus: BooleanConstructor;
                clearable: BooleanConstructor;
                maxlength: (NumberConstructor | StringConstructor)[];
                max: NumberConstructor;
                min: NumberConstructor;
                formatter: PropType<(value: string) => string>;
                clearIcon: {
                    type: PropType<string>;
                    default: string;
                };
                modelValue: {
                    type: (NumberConstructor | StringConstructor)[];
                    default: string;
                };
                inputAlign: PropType<FieldTextAlign>;
                placeholder: StringConstructor;
                autocomplete: StringConstructor;
                autocapitalize: StringConstructor;
                autocorrect: StringConstructor;
                errorMessage: StringConstructor;
                enterkeyhint: PropType<FieldEnterKeyHint>;
                clearTrigger: {
                    type: PropType<FieldClearTrigger>;
                    default: FieldClearTrigger;
                };
                formatTrigger: {
                    type: PropType<FieldFormatTrigger>;
                    default: FieldFormatTrigger;
                };
                spellcheck: {
                    type: BooleanConstructor;
                    default: null;
                };
                error: {
                    type: BooleanConstructor;
                    default: null;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: null;
                };
                readonly: {
                    type: BooleanConstructor;
                    default: null;
                };
                inputmode: PropType< HTMLAttributes["inputmode"]>;
            } & {
                label: StringConstructor;
                shape: {
                    type: PropType<SearchShape>;
                    default: SearchShape;
                };
                leftIcon: {
                    type: PropType<string>;
                    default: string;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: true;
                };
                actionText: StringConstructor;
                background: StringConstructor;
                showAction: BooleanConstructor;
            }>> & Readonly<{
                onFocus?: ((...args: any[]) => any) | undefined;
                onBlur?: ((...args: any[]) => any) | undefined;
                onCancel?: ((...args: any[]) => any) | undefined;
                onClear?: ((...args: any[]) => any) | undefined;
                onClickInput?: ((...args: any[]) => any) | undefined;
                onClickLeftIcon?: ((...args: any[]) => any) | undefined;
                onClickRightIcon?: ((...args: any[]) => any) | undefined;
                "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                onSearch?: ((...args: any[]) => any) | undefined;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("search" | "update:modelValue" | "focus" | "clear" | "blur" | "clickInput" | "clickLeftIcon" | "clickRightIcon" | "cancel")[], string, {
                autofocus: boolean;
                disabled: boolean;
                shape: SearchShape;
                leftIcon: string;
                clearable: boolean;
                clearIcon: string;
                modelValue: string | number;
                clearTrigger: FieldClearTrigger;
                formatTrigger: FieldFormatTrigger;
                spellcheck: boolean;
                error: boolean;
                readonly: boolean;
                showAction: boolean;
            }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[];
                renderTriggered?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, OnCleanup]) => any : (...args: [any, any, OnCleanup]) => any, options?: WatchOptions): WatchStopHandle;
        } & Readonly<{
            autofocus: boolean;
            disabled: boolean;
            shape: SearchShape;
            leftIcon: string;
            clearable: boolean;
            clearIcon: string;
            modelValue: string | number;
            clearTrigger: FieldClearTrigger;
            formatTrigger: FieldFormatTrigger;
            spellcheck: boolean;
            error: boolean;
            readonly: boolean;
            showAction: boolean;
        }> & Omit<Readonly< ExtractPropTypes<{
            id: StringConstructor;
            name: StringConstructor;
            leftIcon: StringConstructor;
            rightIcon: StringConstructor;
            autofocus: BooleanConstructor;
            clearable: BooleanConstructor;
            maxlength: (NumberConstructor | StringConstructor)[];
            max: NumberConstructor;
            min: NumberConstructor;
            formatter: PropType<(value: string) => string>;
            clearIcon: {
                type: PropType<string>;
                default: string;
            };
            modelValue: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            inputAlign: PropType<FieldTextAlign>;
            placeholder: StringConstructor;
            autocomplete: StringConstructor;
            autocapitalize: StringConstructor;
            autocorrect: StringConstructor;
            errorMessage: StringConstructor;
            enterkeyhint: PropType<FieldEnterKeyHint>;
            clearTrigger: {
                type: PropType<FieldClearTrigger>;
                default: FieldClearTrigger;
            };
            formatTrigger: {
                type: PropType<FieldFormatTrigger>;
                default: FieldFormatTrigger;
            };
            spellcheck: {
                type: BooleanConstructor;
                default: null;
            };
            error: {
                type: BooleanConstructor;
                default: null;
            };
            disabled: {
                type: BooleanConstructor;
                default: null;
            };
            readonly: {
                type: BooleanConstructor;
                default: null;
            };
            inputmode: PropType< HTMLAttributes["inputmode"]>;
        } & {
            label: StringConstructor;
            shape: {
                type: PropType<SearchShape>;
                default: SearchShape;
            };
            leftIcon: {
                type: PropType<string>;
                default: string;
            };
            clearable: {
                type: BooleanConstructor;
                default: true;
            };
            actionText: StringConstructor;
            background: StringConstructor;
            showAction: BooleanConstructor;
        }>> & Readonly<{
            onFocus?: ((...args: any[]) => any) | undefined;
            onBlur?: ((...args: any[]) => any) | undefined;
            onCancel?: ((...args: any[]) => any) | undefined;
            onClear?: ((...args: any[]) => any) | undefined;
            onClickInput?: ((...args: any[]) => any) | undefined;
            onClickLeftIcon?: ((...args: any[]) => any) | undefined;
            onClickRightIcon?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onSearch?: ((...args: any[]) => any) | undefined;
        }>, "error" | "leftIcon" | "autofocus" | "clearable" | "clearIcon" | "modelValue" | "clearTrigger" | "formatTrigger" | "spellcheck" | "disabled" | "readonly" | "shape" | "showAction"> & ShallowUnwrapRef<() => import("vue/jsx-runtime").JSX.Element> & {} & ComponentCustomProperties & {} & {
            $props: {
                onClick?: (...args: any[]) => void;
            };
        }) | null;
    }, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        showSearch: {
            type: BooleanConstructor;
            default: boolean;
        };
        id: StringConstructor;
        name: StringConstructor;
        leftIcon: StringConstructor & {
            type: PropType<string>;
            default: string;
        };
        rightIcon: StringConstructor;
        autofocus: BooleanConstructor;
        clearable: BooleanConstructor & {
            type: BooleanConstructor;
            default: true;
        };
        maxlength: (NumberConstructor | StringConstructor)[];
        max: NumberConstructor;
        min: NumberConstructor;
        formatter: PropType<(value: string) => string>;
        clearIcon: {
            type: PropType<string>;
            default: string;
        };
        modelValue: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        inputAlign: PropType<FieldTextAlign>;
        placeholder: StringConstructor;
        autocomplete: StringConstructor;
        autocapitalize: StringConstructor;
        autocorrect: StringConstructor;
        errorMessage: StringConstructor;
        enterkeyhint: PropType<FieldEnterKeyHint>;
        clearTrigger: {
            type: PropType<FieldClearTrigger>;
            default: FieldClearTrigger;
        };
        formatTrigger: {
            type: PropType<FieldFormatTrigger>;
            default: FieldFormatTrigger;
        };
        spellcheck: {
            type: BooleanConstructor;
            default: null;
        };
        error: {
            type: BooleanConstructor;
            default: null;
        };
        disabled: {
            type: BooleanConstructor;
            default: null;
        };
        readonly: {
            type: BooleanConstructor;
            default: null;
        };
        inputmode: PropType< HTMLAttributes["inputmode"]>;
        label: StringConstructor;
        shape: {
            type: PropType<SearchShape>;
            default: SearchShape;
        };
        actionText: StringConstructor;
        background: StringConstructor;
        showAction: BooleanConstructor;
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        focus: () => void;
        blur: () => void;
    }, {}, {}, {}, {
        error: boolean;
        leftIcon: string;
        autofocus: boolean;
        clearable: boolean;
        clearIcon: string;
        modelValue: string | number;
        clearTrigger: FieldClearTrigger;
        formatTrigger: FieldFormatTrigger;
        spellcheck: boolean;
        disabled: boolean;
        readonly: boolean;
        showSearch: boolean;
        shape: SearchShape;
        showAction: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    showSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: StringConstructor;
    name: StringConstructor;
    leftIcon: StringConstructor & {
        type: PropType<string>;
        default: string;
    };
    rightIcon: StringConstructor;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor & {
        type: BooleanConstructor;
        default: true;
    };
    maxlength: (NumberConstructor | StringConstructor)[];
    max: NumberConstructor;
    min: NumberConstructor;
    formatter: PropType<(value: string) => string>;
    clearIcon: {
        type: PropType<string>;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    inputAlign: PropType<FieldTextAlign>;
    placeholder: StringConstructor;
    autocomplete: StringConstructor;
    autocapitalize: StringConstructor;
    autocorrect: StringConstructor;
    errorMessage: StringConstructor;
    enterkeyhint: PropType<FieldEnterKeyHint>;
    clearTrigger: {
        type: PropType<FieldClearTrigger>;
        default: FieldClearTrigger;
    };
    formatTrigger: {
        type: PropType<FieldFormatTrigger>;
        default: FieldFormatTrigger;
    };
    spellcheck: {
        type: BooleanConstructor;
        default: null;
    };
    error: {
        type: BooleanConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: null;
    };
    inputmode: PropType< HTMLAttributes["inputmode"]>;
    label: StringConstructor;
    shape: {
        type: PropType<SearchShape>;
        default: SearchShape;
    };
    actionText: StringConstructor;
    background: StringConstructor;
    showAction: BooleanConstructor;
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    focus: () => void;
    blur: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, {
    error: boolean;
    leftIcon: string;
    autofocus: boolean;
    clearable: boolean;
    clearIcon: string;
    modelValue: string | number;
    clearTrigger: FieldClearTrigger;
    formatTrigger: FieldFormatTrigger;
    spellcheck: boolean;
    disabled: boolean;
    readonly: boolean;
    showSearch: boolean;
    shape: SearchShape;
    showAction: boolean;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        'left-icon'?(_: {}): any;
        'right-icon'?(_: {}): any;
    };
})> & Record<string, any>) | ( SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< DCardProps> & Readonly<{
        onClickFooter?: (() => any) | undefined;
        onClickHeader?: (() => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
        clickFooter: () => any;
        clickHeader: () => any;
    }, PublicProps, {
        dividerDashed: boolean;
        footerLayout: "between" | "center" | "right";
        isShowCollapse: boolean;
        shadow: boolean;
        footerTitle: string;
        customClass: string | string[];
        showFooter: boolean;
    }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< DCardProps> & Readonly<{
        onClickFooter?: (() => any) | undefined;
        onClickHeader?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        dividerDashed: boolean;
        footerLayout: "between" | "center" | "right";
        isShowCollapse: boolean;
        shadow: boolean;
        footerTitle: string;
        customClass: string | string[];
        showFooter: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< DCardProps> & Readonly<{
    onClickFooter?: (() => any) | undefined;
    onClickHeader?: (() => any) | undefined;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
    clickFooter: () => any;
    clickHeader: () => any;
}, string, {
    dividerDashed: boolean;
    footerLayout: "between" | "center" | "right";
    isShowCollapse: boolean;
    shadow: boolean;
    footerTitle: string;
    customClass: string | string[];
    showFooter: boolean;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: Readonly<{
        header?: () => any;
        footer?: () => any;
        default?: () => any;
        more?: () => any;
    }> & {
        header?: () => any;
        footer?: () => any;
        default?: () => any;
        more?: () => any;
    };
})> & Record<string, any>) | ( SFCWithInstall<{
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
})> & Record<string, any>) | ( SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< DNoDataProps> & Readonly<{
        onClick?: (() => any) | undefined;
        onClickTips?: (() => any) | undefined;
        onClickImages?: (() => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
        click: () => any;
        clickTips: () => any;
        clickImages: () => any;
    }, PublicProps, {
        type: ImgType;
        layout: "vertical" | "horizontal";
        errImg: string;
        tips: string;
        className: string | string[];
    }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< DNoDataProps> & Readonly<{
        onClick?: (() => any) | undefined;
        onClickTips?: (() => any) | undefined;
        onClickImages?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        type: ImgType;
        layout: "vertical" | "horizontal";
        errImg: string;
        tips: string;
        className: string | string[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< DNoDataProps> & Readonly<{
    onClick?: (() => any) | undefined;
    onClickTips?: (() => any) | undefined;
    onClickImages?: (() => any) | undefined;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
    click: () => any;
    clickTips: () => any;
    clickImages: () => any;
}, string, {
    type: ImgType;
    layout: "vertical" | "horizontal";
    errImg: string;
    tips: string;
    className: string | string[];
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>) | ( SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        transparent: {
            type: BooleanConstructor;
            default: boolean;
        };
        customClass: {
            type: PropType<string | string[]>;
            default: string;
        };
        type: {
            type: PropType<TabsType>;
            default: TabsType;
        };
        color: StringConstructor;
        border: BooleanConstructor;
        sticky: BooleanConstructor;
        shrink: BooleanConstructor;
        active: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        duration: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        animated: BooleanConstructor;
        ellipsis: {
            type: BooleanConstructor;
            default: true;
        };
        swipeable: BooleanConstructor;
        scrollspy: BooleanConstructor;
        offsetTop: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        background: StringConstructor;
        lazyRender: {
            type: BooleanConstructor;
            default: true;
        };
        showHeader: {
            type: BooleanConstructor;
            default: true;
        };
        lineWidth: (NumberConstructor | StringConstructor)[];
        lineHeight: (NumberConstructor | StringConstructor)[];
        beforeChange: PropType<Interceptor>;
        swipeThreshold: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        titleActiveColor: StringConstructor;
        titleInactiveColor: StringConstructor;
    }>> & Readonly<{
        "onClick-tab"?: ((name: string | number, title: string, event: MouseEvent, disabled: boolean) => any) | undefined;
        onChange?: ((name: string | number, title: string) => any) | undefined;
        onRendered?: ((name: string | number, title: string) => any) | undefined;
        onScroll?: ((name: string | number, title: string) => any) | undefined;
        "onUpdate:active"?: ((value: string) => any) | undefined;
    }>, {
        resize: () => void;
        scrollTo: (name: Numeric) => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        "update:active": (value: string) => any;
    } & {
        "click-tab": (name: string | number, title: string, event: MouseEvent, disabled: boolean) => any;
        change: (name: string | number, title: string) => any;
        rendered: (name: string | number, title: string) => any;
        scroll: (name: string | number, title: string) => any;
    }, PublicProps, {
        type: TabsType;
        border: boolean;
        customClass: string | string[];
        transparent: boolean;
        sticky: boolean;
        shrink: boolean;
        active: string | number;
        duration: string | number;
        animated: boolean;
        ellipsis: boolean;
        swipeable: boolean;
        scrollspy: boolean;
        offsetTop: string | number;
        lazyRender: boolean;
        showHeader: boolean;
        swipeThreshold: string | number;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {
        tabsRef: ({
            $: ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                type: TabsType;
                sticky: boolean;
                ellipsis: boolean;
                border: boolean;
                active: string | number;
                duration: string | number;
                lazyRender: boolean;
                offsetTop: string | number;
                animated: boolean;
                swipeable: boolean;
                shrink: boolean;
                scrollspy: boolean;
                showHeader: boolean;
                swipeThreshold: string | number;
            }> & Omit<{
                readonly type: TabsType;
                readonly border: boolean;
                readonly sticky: boolean;
                readonly shrink: boolean;
                readonly active: string | number;
                readonly duration: string | number;
                readonly animated: boolean;
                readonly ellipsis: boolean;
                readonly swipeable: boolean;
                readonly scrollspy: boolean;
                readonly offsetTop: string | number;
                readonly lazyRender: boolean;
                readonly showHeader: boolean;
                readonly swipeThreshold: string | number;
                readonly color?: string | undefined;
                readonly background?: string | undefined;
                readonly lineWidth?: string | number | undefined;
                readonly lineHeight?: string | number | undefined;
                readonly beforeChange?: Interceptor | undefined;
                readonly titleActiveColor?: string | undefined;
                readonly titleInactiveColor?: string | undefined;
                readonly onChange?: ((...args: any[]) => any) | undefined | undefined;
                readonly onScroll?: ((...args: any[]) => any) | undefined | undefined;
                readonly onRendered?: ((...args: any[]) => any) | undefined | undefined;
                readonly onClickTab?: ((...args: any[]) => any) | undefined | undefined;
                readonly "onUpdate:active"?: ((...args: any[]) => any) | undefined | undefined;
            } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "type" | "border" | "sticky" | "shrink" | "active" | "duration" | "animated" | "ellipsis" | "swipeable" | "scrollspy" | "offsetTop" | "lazyRender" | "showHeader" | "swipeThreshold">;
            $attrs: Attrs;
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: Slot<any> | undefined;
            }>;
            $root: ComponentPublicInstance | null;
            $parent: ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "change" | "rendered" | "scroll" | "update:active" | "clickTab", ...args: any[]) => void;
            $el: any;
            $options: ComponentOptionsBase<Readonly< ExtractPropTypes<{
                type: {
                    type: PropType<TabsType>;
                    default: TabsType;
                };
                color: StringConstructor;
                border: BooleanConstructor;
                sticky: BooleanConstructor;
                shrink: BooleanConstructor;
                active: {
                    type: (NumberConstructor | StringConstructor)[];
                    default: number;
                };
                duration: {
                    type: (NumberConstructor | StringConstructor)[];
                    default: number;
                };
                animated: BooleanConstructor;
                ellipsis: {
                    type: BooleanConstructor;
                    default: true;
                };
                swipeable: BooleanConstructor;
                scrollspy: BooleanConstructor;
                offsetTop: {
                    type: (NumberConstructor | StringConstructor)[];
                    default: number;
                };
                background: StringConstructor;
                lazyRender: {
                    type: BooleanConstructor;
                    default: true;
                };
                showHeader: {
                    type: BooleanConstructor;
                    default: true;
                };
                lineWidth: (NumberConstructor | StringConstructor)[];
                lineHeight: (NumberConstructor | StringConstructor)[];
                beforeChange: PropType<Interceptor>;
                swipeThreshold: {
                    type: (NumberConstructor | StringConstructor)[];
                    default: number;
                };
                titleActiveColor: StringConstructor;
                titleInactiveColor: StringConstructor;
            }>> & Readonly<{
                onChange?: ((...args: any[]) => any) | undefined;
                onScroll?: ((...args: any[]) => any) | undefined;
                onRendered?: ((...args: any[]) => any) | undefined;
                onClickTab?: ((...args: any[]) => any) | undefined;
                "onUpdate:active"?: ((...args: any[]) => any) | undefined;
            }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ("change" | "rendered" | "scroll" | "update:active" | "clickTab")[], string, {
                type: TabsType;
                sticky: boolean;
                ellipsis: boolean;
                border: boolean;
                active: string | number;
                duration: string | number;
                lazyRender: boolean;
                offsetTop: string | number;
                animated: boolean;
                swipeable: boolean;
                shrink: boolean;
                scrollspy: boolean;
                showHeader: boolean;
                swipeThreshold: string | number;
            }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[];
                renderTriggered?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, OnCleanup]) => any : (...args: [any, any, OnCleanup]) => any, options?: WatchOptions): WatchStopHandle;
        } & Readonly<{
            type: TabsType;
            sticky: boolean;
            ellipsis: boolean;
            border: boolean;
            active: string | number;
            duration: string | number;
            lazyRender: boolean;
            offsetTop: string | number;
            animated: boolean;
            swipeable: boolean;
            shrink: boolean;
            scrollspy: boolean;
            showHeader: boolean;
            swipeThreshold: string | number;
        }> & Omit<Readonly< ExtractPropTypes<{
            type: {
                type: PropType<TabsType>;
                default: TabsType;
            };
            color: StringConstructor;
            border: BooleanConstructor;
            sticky: BooleanConstructor;
            shrink: BooleanConstructor;
            active: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            duration: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            animated: BooleanConstructor;
            ellipsis: {
                type: BooleanConstructor;
                default: true;
            };
            swipeable: BooleanConstructor;
            scrollspy: BooleanConstructor;
            offsetTop: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            background: StringConstructor;
            lazyRender: {
                type: BooleanConstructor;
                default: true;
            };
            showHeader: {
                type: BooleanConstructor;
                default: true;
            };
            lineWidth: (NumberConstructor | StringConstructor)[];
            lineHeight: (NumberConstructor | StringConstructor)[];
            beforeChange: PropType<Interceptor>;
            swipeThreshold: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            titleActiveColor: StringConstructor;
            titleInactiveColor: StringConstructor;
        }>> & Readonly<{
            onChange?: ((...args: any[]) => any) | undefined;
            onScroll?: ((...args: any[]) => any) | undefined;
            onRendered?: ((...args: any[]) => any) | undefined;
            onClickTab?: ((...args: any[]) => any) | undefined;
            "onUpdate:active"?: ((...args: any[]) => any) | undefined;
        }>, "type" | "border" | "sticky" | "shrink" | "active" | "duration" | "animated" | "ellipsis" | "swipeable" | "scrollspy" | "offsetTop" | "lazyRender" | "showHeader" | "swipeThreshold"> & ShallowUnwrapRef<() => import("vue/jsx-runtime").JSX.Element> & {} & ComponentCustomProperties & {} & {
            $props: {
                onClick?: (...args: any[]) => void;
            };
        }) | null;
    }, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        transparent: {
            type: BooleanConstructor;
            default: boolean;
        };
        customClass: {
            type: PropType<string | string[]>;
            default: string;
        };
        type: {
            type: PropType<TabsType>;
            default: TabsType;
        };
        color: StringConstructor;
        border: BooleanConstructor;
        sticky: BooleanConstructor;
        shrink: BooleanConstructor;
        active: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        duration: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        animated: BooleanConstructor;
        ellipsis: {
            type: BooleanConstructor;
            default: true;
        };
        swipeable: BooleanConstructor;
        scrollspy: BooleanConstructor;
        offsetTop: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        background: StringConstructor;
        lazyRender: {
            type: BooleanConstructor;
            default: true;
        };
        showHeader: {
            type: BooleanConstructor;
            default: true;
        };
        lineWidth: (NumberConstructor | StringConstructor)[];
        lineHeight: (NumberConstructor | StringConstructor)[];
        beforeChange: PropType<Interceptor>;
        swipeThreshold: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        titleActiveColor: StringConstructor;
        titleInactiveColor: StringConstructor;
    }>> & Readonly<{
        "onClick-tab"?: ((name: string | number, title: string, event: MouseEvent, disabled: boolean) => any) | undefined;
        onChange?: ((name: string | number, title: string) => any) | undefined;
        onRendered?: ((name: string | number, title: string) => any) | undefined;
        onScroll?: ((name: string | number, title: string) => any) | undefined;
        "onUpdate:active"?: ((value: string) => any) | undefined;
    }>, {
        resize: () => void;
        scrollTo: (name: Numeric) => void;
    }, {}, {}, {}, {
        type: TabsType;
        border: boolean;
        customClass: string | string[];
        transparent: boolean;
        sticky: boolean;
        shrink: boolean;
        active: string | number;
        duration: string | number;
        animated: boolean;
        ellipsis: boolean;
        swipeable: boolean;
        scrollspy: boolean;
        offsetTop: string | number;
        lazyRender: boolean;
        showHeader: boolean;
        swipeThreshold: string | number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: PropType<string | string[]>;
        default: string;
    };
    type: {
        type: PropType<TabsType>;
        default: TabsType;
    };
    color: StringConstructor;
    border: BooleanConstructor;
    sticky: BooleanConstructor;
    shrink: BooleanConstructor;
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    animated: BooleanConstructor;
    ellipsis: {
        type: BooleanConstructor;
        default: true;
    };
    swipeable: BooleanConstructor;
    scrollspy: BooleanConstructor;
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    background: StringConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    showHeader: {
        type: BooleanConstructor;
        default: true;
    };
    lineWidth: (NumberConstructor | StringConstructor)[];
    lineHeight: (NumberConstructor | StringConstructor)[];
    beforeChange: PropType<Interceptor>;
    swipeThreshold: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    titleActiveColor: StringConstructor;
    titleInactiveColor: StringConstructor;
}>> & Readonly<{
    "onClick-tab"?: ((name: string | number, title: string, event: MouseEvent, disabled: boolean) => any) | undefined;
    onChange?: ((name: string | number, title: string) => any) | undefined;
    onRendered?: ((name: string | number, title: string) => any) | undefined;
    onScroll?: ((name: string | number, title: string) => any) | undefined;
    "onUpdate:active"?: ((value: string) => any) | undefined;
}>, {
    resize: () => void;
    scrollTo: (name: Numeric) => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:active": (value: string) => any;
} & {
    "click-tab": (name: string | number, title: string, event: MouseEvent, disabled: boolean) => any;
    change: (name: string | number, title: string) => any;
    rendered: (name: string | number, title: string) => any;
    scroll: (name: string | number, title: string) => any;
}, string, {
    type: TabsType;
    border: boolean;
    customClass: string | string[];
    transparent: boolean;
    sticky: boolean;
    shrink: boolean;
    active: string | number;
    duration: string | number;
    animated: boolean;
    ellipsis: boolean;
    swipeable: boolean;
    scrollspy: boolean;
    offsetTop: string | number;
    lazyRender: boolean;
    showHeader: boolean;
    swipeThreshold: string | number;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: Readonly<{
        navLeft?: () => any;
        navRight?: () => any;
        navBottom?: () => any;
        default?: () => any;
    }> & {
        navLeft?: () => any;
        navRight?: () => any;
        navBottom?: () => any;
        default?: () => any;
    };
})> & Record<string, any>) | ( SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        to: PropType<RouteLocationRaw>;
        url: StringConstructor;
        replace: BooleanConstructor;
    } & {
        dot: BooleanConstructor;
        name: (NumberConstructor | StringConstructor)[];
        badge: (NumberConstructor | StringConstructor)[];
        title: StringConstructor;
        disabled: BooleanConstructor;
        titleClass: PropType<unknown>;
        titleStyle: PropType<string | CSSProperties>;
        showZeroBadge: {
            type: BooleanConstructor;
            default: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        replace: boolean;
        disabled: boolean;
        dot: boolean;
        showZeroBadge: boolean;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {
        TabRef: ({
            $: ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                replace: boolean;
                dot: boolean;
                disabled: boolean;
                showZeroBadge: boolean;
            }> & Omit<{
                readonly replace: boolean;
                readonly disabled: boolean;
                readonly dot: boolean;
                readonly showZeroBadge: boolean;
                readonly name?: string | number | undefined;
                readonly title?: string | undefined;
                readonly titleClass?: unknown;
                readonly titleStyle?: string | CSSProperties | undefined;
                readonly url?: string | undefined;
                readonly badge?: string | number | undefined;
                readonly to?: any;
            } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "replace" | "disabled" | "dot" | "showZeroBadge">;
            $attrs: Attrs;
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: Slot<any> | undefined;
            }>;
            $root: ComponentPublicInstance | null;
            $parent: ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: ComponentOptionsBase<Readonly< ExtractPropTypes<{
                to: PropType<RouteLocationRaw>;
                url: StringConstructor;
                replace: BooleanConstructor;
            } & {
                dot: BooleanConstructor;
                name: (NumberConstructor | StringConstructor)[];
                badge: (NumberConstructor | StringConstructor)[];
                title: StringConstructor;
                disabled: BooleanConstructor;
                titleClass: PropType<unknown>;
                titleStyle: PropType<string | CSSProperties>;
                showZeroBadge: {
                    type: BooleanConstructor;
                    default: true;
                };
            }>> & Readonly<{}>, (() => import("vue/jsx-runtime").JSX.Element | undefined) | undefined, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
                replace: boolean;
                dot: boolean;
                disabled: boolean;
                showZeroBadge: boolean;
            }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[];
                renderTriggered?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, OnCleanup]) => any : (...args: [any, any, OnCleanup]) => any, options?: WatchOptions): WatchStopHandle;
        } & Readonly<{
            replace: boolean;
            dot: boolean;
            disabled: boolean;
            showZeroBadge: boolean;
        }> & Omit<Readonly< ExtractPropTypes<{
            to: PropType<RouteLocationRaw>;
            url: StringConstructor;
            replace: BooleanConstructor;
        } & {
            dot: BooleanConstructor;
            name: (NumberConstructor | StringConstructor)[];
            badge: (NumberConstructor | StringConstructor)[];
            title: StringConstructor;
            disabled: BooleanConstructor;
            titleClass: PropType<unknown>;
            titleStyle: PropType<string | CSSProperties>;
            showZeroBadge: {
                type: BooleanConstructor;
                default: true;
            };
        }>> & Readonly<{}>, "replace" | "disabled" | "dot" | "showZeroBadge"> & ShallowUnwrapRef<{}> & {} & ComponentCustomProperties & {} & {
            $props: {
                onClick?: (...args: any[]) => void;
            };
        }) | ({
            $: ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                replace: boolean;
                dot: boolean;
                disabled: boolean;
                showZeroBadge: boolean;
            }> & Omit<{
                readonly replace: boolean;
                readonly disabled: boolean;
                readonly dot: boolean;
                readonly showZeroBadge: boolean;
                readonly name?: string | number | undefined;
                readonly title?: string | undefined;
                readonly titleClass?: unknown;
                readonly titleStyle?: string | CSSProperties | undefined;
                readonly url?: string | undefined;
                readonly badge?: string | number | undefined;
                readonly to?: any;
            } & VNodeProps & AllowedComponentProps & ComponentCustomProps, "replace" | "disabled" | "dot" | "showZeroBadge">;
            $attrs: Attrs;
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: Slot<any> | undefined;
            }>;
            $root: ComponentPublicInstance | null;
            $parent: ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: ComponentOptionsBase<Readonly< ExtractPropTypes<{
                to: PropType<RouteLocationRaw>;
                url: StringConstructor;
                replace: BooleanConstructor;
            } & {
                dot: BooleanConstructor;
                name: (NumberConstructor | StringConstructor)[];
                badge: (NumberConstructor | StringConstructor)[];
                title: StringConstructor;
                disabled: BooleanConstructor;
                titleClass: PropType<unknown>;
                titleStyle: PropType<string | CSSProperties>;
                showZeroBadge: {
                    type: BooleanConstructor;
                    default: true;
                };
            }>> & Readonly<{}>, (() => import("vue/jsx-runtime").JSX.Element | undefined) | undefined, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
                replace: boolean;
                dot: boolean;
                disabled: boolean;
                showZeroBadge: boolean;
            }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[];
                renderTriggered?: ((e: DebuggerEvent) => void) | ((e: DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, OnCleanup]) => any : (...args: [any, any, OnCleanup]) => any, options?: WatchOptions): WatchStopHandle;
        } & Readonly<{
            replace: boolean;
            dot: boolean;
            disabled: boolean;
            showZeroBadge: boolean;
        }> & Omit<Readonly< ExtractPropTypes<{
            to: PropType<RouteLocationRaw>;
            url: StringConstructor;
            replace: BooleanConstructor;
        } & {
            dot: BooleanConstructor;
            name: (NumberConstructor | StringConstructor)[];
            badge: (NumberConstructor | StringConstructor)[];
            title: StringConstructor;
            disabled: BooleanConstructor;
            titleClass: PropType<unknown>;
            titleStyle: PropType<string | CSSProperties>;
            showZeroBadge: {
                type: BooleanConstructor;
                default: true;
            };
        }>> & Readonly<{}>, "replace" | "disabled" | "dot" | "showZeroBadge"> & ShallowUnwrapRef<() => import("vue/jsx-runtime").JSX.Element | undefined> & {} & ComponentCustomProperties & {} & {
            $props: {
                onClick?: (...args: any[]) => void;
            };
        }) | null;
    }, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        to: PropType<RouteLocationRaw>;
        url: StringConstructor;
        replace: BooleanConstructor;
    } & {
        dot: BooleanConstructor;
        name: (NumberConstructor | StringConstructor)[];
        badge: (NumberConstructor | StringConstructor)[];
        title: StringConstructor;
        disabled: BooleanConstructor;
        titleClass: PropType<unknown>;
        titleStyle: PropType<string | CSSProperties>;
        showZeroBadge: {
            type: BooleanConstructor;
            default: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        replace: boolean;
        disabled: boolean;
        dot: boolean;
        showZeroBadge: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    to: PropType<RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
} & {
    dot: BooleanConstructor;
    name: (NumberConstructor | StringConstructor)[];
    badge: (NumberConstructor | StringConstructor)[];
    title: StringConstructor;
    disabled: BooleanConstructor;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | CSSProperties>;
    showZeroBadge: {
        type: BooleanConstructor;
        default: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    replace: boolean;
    disabled: boolean;
    dot: boolean;
    showZeroBadge: boolean;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        title?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>) | ( SFCWithInstall<DefineComponent<DMapIProps, {
    MapInstance: any;
    initMap: (center?: BMapGL.Point, zoomLevel?: number) => void;
    addRailwayBureauLayer: (bureanName?: string) => void;
    removeRailwayBureauLayer: () => void;
    removeRailwayLineLayer: () => void;
    addRailwayLineLayer: (lineName?: string) => Promise<void>;
    setMapCenter: (lat: number, lng: number, zoomLevel?: number) => void;
    reload: (center?: BMapGL.Point, zoomLevel?: number) => Promise<void>;
    destoryMap: () => void;
    setLocationIcon: (center: BMapGL.Point) => Promise<void>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
    click: (payload: BMapGL.Point) => any;
    zoomEnd: () => any;
    init: () => any;
    moveEnd: () => any;
    programmaticMoveEnd: () => any;
    railwayLineClick: (payload: RailwayLineItem) => any;
    railwayBureauClick: (payload: RailwayBureauItem) => any;
    railwayPointClick: (payload: RailwayPointItem) => any;
}, string, PublicProps, Readonly< DMapIProps> & Readonly<{
    onClick?: ((payload: BMapGL.Point) => any) | undefined;
    onZoomEnd?: (() => any) | undefined;
    onInit?: (() => any) | undefined;
    onMoveEnd?: (() => any) | undefined;
    onProgrammaticMoveEnd?: (() => any) | undefined;
    onRailwayLineClick?: ((payload: RailwayLineItem) => any) | undefined;
    onRailwayBureauClick?: ((payload: RailwayBureauItem) => any) | undefined;
    onRailwayPointClick?: ((payload: RailwayPointItem) => any) | undefined;
}>, {
    width: string;
    height: string;
    className: string;
    maxZoom: number;
    minZoom: number;
    showRailwayLine: boolean;
    showRailwayStation: boolean;
    showRailwayBureau: boolean;
    mapId: string;
    copyright: string;
    showAttribution: boolean;
    stationLevel: number;
    showCopyRight: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>> & Record<string, any>))[];
export default _default;
