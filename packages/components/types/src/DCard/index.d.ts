import { SFCWithInstall } from '../utils/typescript';
import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { DCardProps } from './types';
export declare const DCard: SFCWithInstall<{
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
})> & Record<string, any>;
export default DCard;
export * from './index.vue';
