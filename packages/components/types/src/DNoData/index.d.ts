import { SFCWithInstall } from '../utils/typescript';
import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { DNoDataProps, ImgType } from './type';
export declare const DNoData: SFCWithInstall<{
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
})> & Record<string, any>;
export default DNoData;
export * from './index.vue';
