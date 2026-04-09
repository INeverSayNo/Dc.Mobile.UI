import { Pinia } from 'pinia';
import { IConfig } from 'src/utils/typescript';
export declare function InjectPinia(): false | undefined;
export declare const getOrCreatePinia: () => Pinia;
export declare function initPiniaState(config: IConfig): void;
