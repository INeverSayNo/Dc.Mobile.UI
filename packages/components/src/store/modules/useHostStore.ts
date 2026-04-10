import { defineStore } from "pinia";
import type { HostState } from "../type";

export const useHostStore = defineStore("dcMobileUIHostStore", {
  state: (): HostState => ({
    base_url: "https://gateway.daochen.com",
    file_url: "https://gateway.daochen.com/api/files/static",
    login_url: "https://gateway.daochen.com",
    getfile_url: "https://gateway.daochen.com",
    tokenName: "JsToken",
    useCrypto: true,
    cryptoType: 1
  }),
  actions: {
    initState(payload: HostState) {
      this.base_url = payload.base_url;
      this.file_url = payload.file_url;
      this.login_url = payload.login_url;
      this.getfile_url = payload.getfile_url;
      this.tokenName = payload.tokenName;
      this.useCrypto = payload.useCrypto;
      this.cryptoType = payload.cryptoType;
    },
  },
});

export type HostStoreState = ReturnType<typeof useHostStore>;
