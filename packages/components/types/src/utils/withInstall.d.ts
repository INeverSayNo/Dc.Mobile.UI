import { App, Directive, Plugin } from 'vue';
import { SFCInstallWithContext, SFCWithInstall } from './typescript';
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E) => SFCWithInstall<T> & E;
export declare const withInstallFunction: <T>(fn: T, name: string) => SFCInstallWithContext<T>;
export declare const withInstallDirective: <T extends Directive>(directive: T, name: string) => SFCWithInstall<T>;
export declare const makeInstaller: (components?: Plugin[]) => {
    install: (app: App) => void;
};
