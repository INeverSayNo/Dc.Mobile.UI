import { useHostStore as e } from "./modules/useHostStore.js";
import { useThemeStore as t } from "./modules/useThemeStore.js";
import { createPinia as n, getActivePinia as r } from "pinia";
import "vue";
//#region src/store/piniaHelper.ts
var i = () => r() || (console.warn("未找到活跃的 Pinia 实例，正在创建新实例"), n());
function a(n) {
	i(), e().initState(n.request), t().initState(n.theme);
}
//#endregion
export { a as initPiniaState };
