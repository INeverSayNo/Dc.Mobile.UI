import { DcToolsRequest, defineConfig, interceptorsUse } from "dc-tools";

export class BaseApi extends DcToolsRequest {
  constructor(
    config?: defineConfig,
    use: interceptorsUse = {
      onRequestFulfilled: handleRequestFulfilled,
    },
  ) {
    const baseConfig = {
      baseURL: config?.baseURL,
      isJwt: true,
      timeout: 90000,
      ...config,
      crypto: Reflect.has(config || {}, "crypto") ? config?.crypto : true,
    };
    super(baseConfig, use);
  }
}
export async function handleRequestFulfilled(config: defineConfig) {
  if (config.url?.includes("/connect/token")) return config;
  // await RefushToken()
  return config;
}
