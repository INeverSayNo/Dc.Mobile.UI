import { ComponentInternalInstance, CSSProperties, VNodeProps, AllowedComponentProps, ComponentCustomProps, Attrs, Slot, ComponentPublicInstance, ComponentOptionsBase, ExtractPropTypes, PropType, ComponentOptionsMixin, GlobalComponents, GlobalDirectives, ComponentProvideOptions, DebuggerEvent, nextTick, WatchOptions, WatchStopHandle, ShallowUnwrapRef, ComponentCustomProperties, DefineComponent, PublicProps } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import { OnCleanup } from '@vue/reactivity';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        title?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
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
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<ExtractPropTypes<{
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
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
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
}>> & Readonly<{}>, {
    replace: boolean;
    disabled: boolean;
    dot: boolean;
    showZeroBadge: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {
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
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
