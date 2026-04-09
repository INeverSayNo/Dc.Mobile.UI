import { createPinia as e } from "../../../../node_modules/.pnpm/pinia@3.0.4_typescript@6.0.2_vue@3.5.31_typescript@6.0.2_/node_modules/pinia/dist/pinia.js";
import { initPiniaState as t } from "../store/piniaHelper.js";
//#region src/utils/withInstall.ts
var n = (e, t) => {
	if (e.install = (n) => {
		for (let r of [e, ...Object.values(t ?? {})]) n.component(r.name, r);
	}, t) for (let [n, r] of Object.entries(t)) e[n] = r;
	return e;
}, r = (n = []) => ({ install: (r, i) => {
	if (n.forEach((e) => r.use(e)), i) {
		let n = e();
		r.config.globalProperties.$pinia || r.use(n), t(i);
	}
} });
//#endregion
export { r as makeInstaller, n as withInstall };
