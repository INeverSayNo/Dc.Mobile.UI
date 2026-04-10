import { PropType, ComponentInternalInstance, VNodeProps, AllowedComponentProps, ComponentCustomProps, Attrs, Slot, ComponentPublicInstance, ComponentOptionsBase, ExtractPropTypes, ComponentOptionsMixin, GlobalComponents, GlobalDirectives, ComponentProvideOptions, DebuggerEvent, nextTick, WatchOptions, WatchStopHandle, ShallowUnwrapRef, ComponentCustomProperties, DefineComponent, PublicProps } from 'vue';
import { TabsType } from 'vant';
import { Interceptor, Numeric } from 'vant/lib/utils';
import { OnCleanup } from '@vue/reactivity';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
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
    refs: {
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
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<ExtractPropTypes<{
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: PropType<string | string[]>;
        default: string;
    };
    type: {
        type: PropType< TabsType>;
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
    beforeChange: PropType< Interceptor>;
    swipeThreshold: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    titleActiveColor: StringConstructor;
    titleInactiveColor: StringConstructor;
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
}, string, PublicProps, Readonly< ExtractPropTypes<{
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: PropType<string | string[]>;
        default: string;
    };
    type: {
        type: PropType< TabsType>;
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
    beforeChange: PropType< Interceptor>;
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
}, {}, {}, {}, string, ComponentProvideOptions, true, {
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
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
