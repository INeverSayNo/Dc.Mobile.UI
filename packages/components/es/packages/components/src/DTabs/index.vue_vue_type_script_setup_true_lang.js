import { useThemeStore as e } from "../store/modules/useThemeStore.js";
import { tabsProps as t } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/tabs/Tabs.js";
import { Tabs as n } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/tabs/index.js";
import r from "../DThemeProvider/index.js";
import "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/lib/tabs/style/index.js";
import { computed as i, createBlock as a, createVNode as o, defineComponent as s, mergeModels as c, mergeProps as l, openBlock as u, renderSlot as d, shallowRef as f, unref as p, useModel as m, useSlots as h, withCtx as g } from "vue";
//#region src/DTabs/index.vue?vue&type=script&setup=true&lang.ts
var _ = /* @__PURE__ */ s({
	name: "DTabs",
	__name: "index",
	props: /* @__PURE__ */ c({
		...t,
		transparent: {
			type: Boolean,
			default: !0
		},
		customClass: {
			type: String,
			default: ""
		}
	}, {
		active: {
			type: String,
			default: ""
		},
		activeModifiers: {}
	}),
	emits: /* @__PURE__ */ c([
		"click-tab",
		"change",
		"rendered",
		"scroll"
	], ["update:active"]),
	setup(t, { expose: s, emit: c }) {
		let _ = t, v = c, y = m(t, "active");
		h();
		let b = i(() => Array.isArray(_.customClass) ? _.customClass.join(" ") : _.customClass), x = e(), S = i(() => x.primary ? x.primary : "#1989fa"), C = f();
		return s(new Proxy({}, {
			get(e, t) {
				return C.value?.[t];
			},
			has(e, t) {
				return C.value?.[t];
			}
		})), (e, i) => (u(), a(r, null, {
			default: g(() => [o(p(n), l(_, {
				active: y.value,
				"onUpdate:active": i[0] ||= (e) => y.value = e,
				class: [b.value, t.transparent ? "d-tabs-transparent-bg" : ""],
				style: { "--dc-tabs-line-bg": S.value },
				ref_key: "tabsRef",
				ref: C,
				onClickTab: i[1] ||= (e, t, n, r) => v("click-tab", e, t, n, r),
				onChange: i[2] ||= (e, t) => v("change", e, t),
				onRendered: i[3] ||= (e, t) => v("rendered", e, t),
				onScroll: i[4] ||= (e, t) => v("scroll", e, t)
			}), {
				"nav-left": g(() => [d(e.$slots, "navLeft", {}, void 0, !0)]),
				"nav-right": g(() => [d(e.$slots, "navRight", {}, void 0, !0)]),
				"nav-bottom": g(() => [d(e.$slots, "navBottom", {}, void 0, !0)]),
				default: g(() => [d(e.$slots, "default", {}, void 0, !0)]),
				_: 3
			}, 16, [
				"active",
				"class",
				"style"
			])]),
			_: 3
		}));
	}
});
//#endregion
export { _ as default };
