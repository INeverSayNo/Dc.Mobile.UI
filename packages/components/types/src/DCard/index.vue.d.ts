import { DCardProps } from './types';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
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
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<DCardProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
    clickFooter: () => any;
    clickHeader: () => any;
}, string, PublicProps, Readonly<DCardProps> & Readonly<{
    onClickFooter?: (() => any) | undefined;
    onClickHeader?: (() => any) | undefined;
}>, {
    dividerDashed: boolean;
    footerLayout: "between" | "center" | "right";
    isShowCollapse: boolean;
    shadow: boolean;
    footerTitle: string;
    customClass: string | string[];
    showFooter: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
