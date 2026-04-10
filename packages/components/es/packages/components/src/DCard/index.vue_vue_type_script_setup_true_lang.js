import { Icon as e } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/icon/index.js";
import { Divider as t } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/divider/index.js";
import n from "../DThemeProvider/index.js";
/* empty css                                                                                                          */
import { createBlock as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, createVNode as s, defineComponent as c, normalizeClass as l, normalizeStyle as u, openBlock as d, ref as f, renderSlot as p, toDisplayString as m, unref as h, useSlots as g, withCtx as _ } from "vue";
//#region src/DCard/index.vue?vue&type=script&setup=true&lang.ts
var v = { key: 2 }, y = /* @__PURE__ */ c({
	name: "DCard",
	__name: "index",
	props: {
		dividerDashed: {
			type: Boolean,
			default: !1
		},
		footerLayout: { default: "between" },
		isShowCollapse: {
			type: Boolean,
			default: !1
		},
		shadow: {
			type: Boolean,
			default: !1
		},
		footerTitle: { default: "查看更多信息" },
		customClass: { default: "" },
		showFooter: {
			type: Boolean,
			default: !0
		}
	},
	emits: ["clickFooter", "clickHeader"],
	setup(c, { emit: y }) {
		let b = c, x = y, S = g(), C = f(!1), w = () => {
			x("clickFooter"), b.isShowCollapse && (C.value = !0);
		};
		return (f, g) => (d(), r(n, null, {
			default: _(() => [o("div", {
				class: l(["dc-bg-white dc-rounded-7px dc-p-10px", c.customClass]),
				style: u({ boxShadow: c.shadow ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" : "" })
			}, [
				p(f.$slots, "header"),
				S.header ? (d(), r(h(t), {
					key: 0,
					dashed: c.dividerDashed,
					style: { margin: "8px 0" }
				}, null, 8, ["dashed"])) : i("", !0),
				p(f.$slots, "default"),
				c.showFooter ? (d(), r(h(t), {
					key: 1,
					dashed: c.dividerDashed,
					style: { margin: "8px 0" }
				}, null, 8, ["dashed"])) : i("", !0),
				C.value ? (d(), a("div", v, [p(f.$slots, "more")])) : i("", !0),
				c.showFooter ? p(f.$slots, "footer", { key: 3 }, () => [o("div", {
					class: l(["dc-font-size-12px dc-flex dc-items-center", {
						"dc-justify-between": c.footerLayout === "between",
						"dc-justify-center": c.footerLayout === "center",
						"dc-justify-end": c.footerLayout === "right"
					}]),
					onClick: w
				}, [o("span", null, m(c.footerTitle), 1), s(h(e), { name: "arrow-down" })], 2)]) : i("", !0)
			], 6)]),
			_: 3
		}));
	}
});
//#endregion
export { y as default };
