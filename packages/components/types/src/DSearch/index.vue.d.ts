import { ComponentInternalInstance, VNodeProps, AllowedComponentProps, ComponentCustomProps, Attrs, Slot, ComponentPublicInstance, ComponentOptionsBase, ExtractPropTypes, PropType, HTMLAttributes, ComponentOptionsMixin, GlobalComponents, GlobalDirectives, ComponentProvideOptions, DebuggerEvent, nextTick, WatchOptions, WatchStopHandle, ShallowUnwrapRef, ComponentCustomProperties, DefineComponent, PublicProps } from 'vue';
import { SearchShape, FieldClearTrigger, FieldFormatTrigger, FieldTextAlign, FieldEnterKeyHint } from 'vant';
import { OnCleanup } from '@vue/reactivity';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'left-icon'?(_: {}): any;
        'right-icon'?(_: {}): any;
    };
    refs: {
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
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<ExtractPropTypes<{
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
}>, {
    focus: () => void;
    blur: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, PublicProps, Readonly< ExtractPropTypes<{
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
    shape: SearchShape;
    showAction: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {
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
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
