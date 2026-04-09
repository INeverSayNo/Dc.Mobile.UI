import { defineStore as e } from "../../../../../node_modules/.pnpm/pinia@3.0.4_typescript@6.0.2_vue@3.5.31_typescript@6.0.2_/node_modules/pinia/dist/pinia.js";
//#region src/store/modules/useThemeStore.ts
var t = e("dcMobileUIThemeStore", {
	state: () => ({
		primary: "#007bff",
		success: "#28a745",
		danger: "#dc3545",
		error: "#dc3545"
	}),
	actions: { initState(e) {
		this.primary = e.primary, this.success = e.success, this.danger = e.danger, this.error = e.error;
	} }
});
//#endregion
export { t as useThemeStore };
