import { tabProps as e } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/tab/Tab.js";
import { Tab as t } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/tab/index.js";
import n from "../DThemeProvider/index.js";
import "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/lib/tab/style/index.js";
import { createBlock as r, createElementVNode as i, createVNode as a, defineComponent as o, mergeProps as s, openBlock as c, renderSlot as l, shallowRef as u, toDisplayString as d, unref as f, withCtx as p } from "vue";
//#region src/DTab/index.vue?vue&type=script&setup=true&lang.ts
var m = /* @__PURE__ */ o({
	name: "DTab",
	__name: "index",
	props: e,
	setup(e) {
		let o = e, m = u();
		return (e, u) => (c(), r(n, null, {
			default: p(() => [a(f(t), s(o, {
				ref_key: "TabRef",
				ref: m
			}), {
				title: p(() => [l(e.$slots, "title", {}, () => [i("span", null, d(e.title), 1)])]),
				default: p(() => [l(e.$slots, "default")]),
				_: 3
			}, 16)]),
			_: 3
		}));
	}
});
//#endregion
export { m as default };
