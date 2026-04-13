import { SFCWithInstall } from '../utils/typescript';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { DcIconProps } from './type';
export declare const DcIcon: SFCWithInstall<DefineComponent<DcIconProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< DcIconProps> & Readonly<{}>, {
    prefixCls: string;
    iconName: string;
    width: string | number;
    height: string | number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, SVGSVGElement>> & Record<string, any>;
export default DcIcon;
export * from './index.vue';
