import { defineStore as e } from "../../../../../node_modules/.pnpm/pinia@3.0.4_typescript@6.0.2_vue@3.5.31_typescript@6.0.2_/node_modules/pinia/dist/pinia.js";
//#region src/store/modules/useHostStore.ts
var t = e("dcMobileUIHostStore", {
	state: () => ({
		base_url: "https://gateway.daochen.com",
		file_url: "https://gateway.daochen.com/api/files/static",
		login_url: "https://gateway.daochen.com",
		getfile_url: "https://gateway.daochen.com",
		tokenName: "JsToken"
	}),
	actions: { initState(e) {
		this.base_url = e.base_url, this.file_url = e.file_url, this.login_url = e.login_url, this.getfile_url = e.getfile_url, this.tokenName = e.tokenName;
	} }
});
//#endregion
export { t as useHostStore };
