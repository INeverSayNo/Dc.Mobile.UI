import e from "../DcIcon/icon.js";
import { searchProps as t } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/search/Search.js";
import { Search as n } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/search/index.js";
import "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/lib/search/style/index.js";
import r from "../DThemeProvider/index.js";
import { createBlock as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, createVNode as c, defineComponent as l, mergeModels as u, mergeProps as d, openBlock as f, renderSlot as p, shallowRef as m, unref as h, useAttrs as g, useModel as _, withCtx as v } from "vue";
//#region src/DSearch/index.vue?vue&type=script&setup=true&lang.ts
var y = { class: "d-search" }, b = { class: "dc-flex dc-items-center dc-justify-center" }, x = {
	key: 0,
	class: "dc-c-white dc-bg-primary dc-px-14px dc-py-7px dc-rounded-7px dc-font-size-12px"
}, S = /* @__PURE__ */ l({
	__name: "index",
	props: /* @__PURE__ */ u({
		...t,
		showSearch: {
			type: Boolean,
			default: !0
		}
	}, {
		modelValue: {
			type: String,
			default: ""
		},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(t, { expose: l }) {
		let u = g(), S = _(t, "modelValue"), C = m();
		return l(new Proxy({}, {
			get(e, t) {
				return C.value?.[t];
			},
			has(e, t) {
				return C.value?.[t];
			}
		})), (l, m) => (f(), i(r, null, {
			default: v(() => [s("div", y, [c(h(n), d({
				modelValue: S.value,
				"onUpdate:modelValue": m[0] ||= (e) => S.value = e
			}, h(u), {
				ref_key: "SearchRef",
				ref: C
			}), {
				"left-icon": v(() => [p(l.$slots, "left-icon", {}, () => [s("span", b, [c(e, {
					"icon-name": "a-sousuoliebiaoicon2",
					width: "16",
					height: "16"
				})])], !0)]),
				"right-icon": v(() => [p(l.$slots, "right-icon", {}, () => [t.showSearch ? (f(), o("span", x, "搜索")) : a("", !0)], !0)]),
				_: 3
			}, 16, ["modelValue"])])]),
			_: 3
		}));
	}
});
//#endregion
export { S as default };
