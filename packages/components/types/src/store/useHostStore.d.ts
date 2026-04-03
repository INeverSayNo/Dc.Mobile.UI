import { StoreDefinition } from 'pinia';
export interface HostState {
    base_url: string;
    file_url: string;
    login_url: string;
    esb_url: string;
    abpBase_url: string;
    getfile_url: string;
    ocr_url: string;
    view_url: string;
    tokenName: string;
    applicationId: string;
    apiArea: string;
    loginPath?: string;
    token: string;
}
export declare const useHostStore: StoreDefinition<string, {}, {}, {}>;
export type HostStoreState = ReturnType<typeof useHostStore>;
