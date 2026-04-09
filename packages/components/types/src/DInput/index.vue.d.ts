import { ModelRef, DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const modelValue: ModelRef<string, string, string, string>;
type __VLS_PublicProps = {
    modelValue?: typeof modelValue['value'];
};
declare const _default: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
