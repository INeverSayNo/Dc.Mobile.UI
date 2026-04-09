import { ThemeState } from '../type';
import { StoreDefinition } from 'pinia';
export declare const useThemeStore: StoreDefinition<"dcMobileUIThemeStore", ThemeState, {}, {
    initState(payload: ThemeState): void;
}>;
export type ThemeStoreState = ReturnType<typeof useThemeStore>;
