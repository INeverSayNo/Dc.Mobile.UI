import e from "../DcIcon/icon.js";
import { searchProps as t } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/search/Search.js";
import { Search as n } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/search/index.js";
import "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/lib/search/style/index.js";
import r from "../DThemeProvider/index.js";
import { createBlock as i, createElementVNode as a, createVNode as o, defineComponent as s, mergeModels as c, mergeProps as l, openBlock as u, renderSlot as d, shallowRef as f, unref as p, useAttrs as m, useModel as h, withCtx as g } from "vue";
//#region src/DSearch/index.vue?vue&type=script&setup=true&lang.ts
var _ = { class: "d-search" }, v = { class: "dc-flex dc-items-center dc-justify-center" }, y = /* @__PURE__ */ s({
	__name: "index",
	props: /* @__PURE__ */ c(t, {
		modelValue: {
			type: String,
			default: ""
		},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(t, { expose: s }) {
		let c = m(), y = h(t, "modelValue"), b = f();
		return s(new Proxy({}, {
			get(e, t) {
				return b.value?.[t];
			},
			has(e, t) {
				return b.value?.[t];
			}
		})), (t, s) => (u(), i(r, null, {
			default: g(() => [a("div", _, [o(p(n), l({
				modelValue: y.value,
				"onUpdate:modelValue": s[0] ||= (e) => y.value = e
			}, p(c), {
				ref_key: "SearchRef",
				ref: b
			}), {
				"left-icon": g(() => [d(t.$slots, "left-icon", {}, () => [a("span", v, [o(e, {
					"icon-name": "a-sousuoliebiaoicon2",
					width: "16",
					height: "16"
				})])], !0)]),
				"right-icon": g(() => [d(t.$slots, "right-icon", {}, () => [s[1] ||= a("span", { class: "dc-c-white dc-bg-primary dc-px-14px dc-py-7px dc-rounded-7px dc-font-size-12px" }, "搜索", -1)], !0)]),
				_: 3
			}, 16, ["modelValue"])])]),
			_: 3
		}));
	}
});
//#endregion
export { y as default };
