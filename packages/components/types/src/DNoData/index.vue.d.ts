import { DNoDataProps, ImgType } from './type';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<DNoDataProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
    click: () => any;
    clickTips: () => any;
    clickImages: () => any;
}, string, PublicProps, Readonly<DNoDataProps> & Readonly<{
    onClick?: (() => any) | undefined;
    onClickTips?: (() => any) | undefined;
    onClickImages?: (() => any) | undefined;
}>, {
    type: ImgType;
    layout: "vertical" | "horizontal";
    errImg: string;
    tips: string;
    className: string | string[];
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
