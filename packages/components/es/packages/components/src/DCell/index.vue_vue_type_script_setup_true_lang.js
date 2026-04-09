import { Icon as e } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/icon/index.js";
import { cellProps as t } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/cell/Cell.js";
import { Cell as n } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/cell/index.js";
import r from "../DThemeProvider/index.js";
import { createBlock as i, createCommentVNode as a, createElementVNode as o, createVNode as s, defineComponent as c, guardReactiveProps as l, normalizeProps as u, normalizeStyle as d, openBlock as f, renderSlot as p, toDisplayString as m, unref as h, withCtx as g } from "vue";
//#region src/DCell/index.vue?vue&type=script&setup=true&lang.ts
var _ = { class: "dc-overflow-hidden dc-whitespace-nowrap dc-text-ellipsis dc-max-w-80% dc-c-#999999 dc-font-size-13px dc-font-weight-500" }, v = /* @__PURE__ */ c({
	name: "DCell",
	__name: "index",
	props: {
		...t,
		valueLayout: {
			type: String,
			default: "right"
		}
	},
	emits: [
		"click",
		"titleClick",
		"valueClick"
	],
	setup(t, { emit: c }) {
		let v = t, y = c, b = () => {
			y("click");
		};
		return (c, y) => (f(), i(r, null, {
			default: g(() => [o("div", {
				class: "dc-flex dc-items-baseline dc-pt-8px dc-pb-3px bg-white dc-cell-wrap",
				onClick: y[0] ||= (e) => b()
			}, [s(h(n), u(l(v)), {
				title: g(() => [p(c.$slots, "title", {}, () => [o("p", _, m(c.title), 1)], !0)]),
				value: g(() => [p(c.$slots, "value", {}, () => [o("p", {
					class: "dc-c-#333333 dc-font-size-13px dc-font-weight-500",
					style: d({ "text-align": t.valueLayout })
				}, [o("span", null, m(c.value), 1), c.isLink ? (f(), i(h(e), {
					key: 0,
					name: "arrow"
				})) : a("", !0)], 4)], !0)]),
				label: g(() => [p(c.$slots, "label", {}, void 0, !0)]),
				icon: g(() => [p(c.$slots, "icon", {}, void 0, !0)]),
				"right-icon": g(() => [p(c.$slots, "right-icon", {}, void 0, !0)]),
				extra: g(() => [p(c.$slots, "extra", {}, void 0, !0)]),
				_: 3
			}, 16)])]),
			_: 3
		}));
	}
});
//#endregion
export { v as default };
