import { HostState } from '../type';
import { StoreDefinition } from 'pinia';
export declare const useHostStore: StoreDefinition<"dcMobileUIHostStore", HostState, {}, {
    initState(payload: HostState): void;
}>;
export type HostStoreState = ReturnType<typeof useHostStore>;
