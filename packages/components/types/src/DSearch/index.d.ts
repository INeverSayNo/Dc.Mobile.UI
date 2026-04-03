import { SFCWithInstall } from '../utils/typescript';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
export declare const DSearch: SFCWithInstall<DefineComponent<{
    modelValue?: string;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, PublicProps, Readonly<{
    modelValue?: string;
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>> & Record<string, any>;
export default DSearch;
export * from './index.vue';
export * from './index';
