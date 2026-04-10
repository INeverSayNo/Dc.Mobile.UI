import { DcToolsRequest, defineConfig, interceptorsUse } from 'dc-tools';
export declare class BaseApi extends DcToolsRequest {
    constructor(config?: defineConfig, use?: interceptorsUse);
}
export declare function handleRequestFulfilled(config: defineConfig): Promise<defineConfig<any>>;
