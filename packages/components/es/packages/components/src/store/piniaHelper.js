import { createPinia as e, getActivePinia as t } from "../../../../node_modules/.pnpm/pinia@3.0.4_typescript@6.0.2_vue@3.5.31_typescript@6.0.2_/node_modules/pinia/dist/pinia.js";
import { useHostStore as n } from "./modules/useHostStore.js";
import { useThemeStore as r } from "./modules/useThemeStore.js";
import "vue";
//#region src/store/piniaHelper.ts
var i = () => t() || (console.warn("未找到活跃的 Pinia 实例，正在创建新实例"), e());
function a(e) {
	i(), n().initState(e.request), r().initState(e.theme);
}
//#endregion
export { a as initPiniaState };
