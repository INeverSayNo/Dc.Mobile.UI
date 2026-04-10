import { defineStore as e } from "pinia";
//#region src/store/modules/useHostStore.ts
var t = e("dcMobileUIHostStore", {
	state: () => ({
		base_url: "https://gateway.daochen.com",
		file_url: "https://gateway.daochen.com/api/files/static",
		login_url: "https://gateway.daochen.com",
		getfile_url: "https://gateway.daochen.com",
		tokenName: "JsToken",
		useCrypto: !0,
		cryptoType: 1
	}),
	actions: { initState(e) {
		this.base_url = e.base_url, this.file_url = e.file_url, this.login_url = e.login_url, this.getfile_url = e.getfile_url, this.tokenName = e.tokenName, this.useCrypto = e.useCrypto, this.cryptoType = e.cryptoType;
	} }
});
//#endregion
export { t as useHostStore };
