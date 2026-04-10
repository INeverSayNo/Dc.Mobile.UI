import { initPiniaState as e } from "../store/piniaHelper.js";
import { createPinia as t } from "pinia";
//#region src/utils/withInstall.ts
var n = (e, t) => {
	if (e.install = (n) => {
		for (let r of [e, ...Object.values(t ?? {})]) n.component(r.name, r);
	}, t) for (let [n, r] of Object.entries(t)) e[n] = r;
	return e;
}, r = (n = []) => ({ install: (r, i) => {
	if (n.forEach((e) => r.use(e)), i) {
		let n = t();
		r.config.globalProperties.$pinia || r.use(n), e(i);
	}
} });
//#endregion
export { r as makeInstaller, n as withInstall };
