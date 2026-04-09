import { useThemeStore as e } from "../store/modules/useThemeStore.js";
import { ConfigProvider as t } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/config-provider/index.js";
import { computed as n, createBlock as r, defineComponent as i, normalizeStyle as a, openBlock as o, renderSlot as s, unref as c, withCtx as l } from "vue";
//#region src/DThemeProvider/index.vue?vue&type=script&setup=true&lang.ts
var u = /* @__PURE__ */ i({
	__name: "index",
	setup(i) {
		let u = e(), d = n(() => ({
			primaryColor: u.primary,
			successColor: u.success,
			dangerColor: u.danger
		})), f = n(() => ({
			"--dc-primary": u.primary,
			"--dc-success": u.success,
			"--dc-danger": u.danger,
			"--dc-error": u.error
		}));
		return (e, n) => (o(), r(c(t), {
			"theme-vars": d.value,
			style: a(f.value),
			class: "dc-component"
		}, {
			default: l(() => [s(e.$slots, "default")]),
			_: 3
		}, 8, ["theme-vars", "style"]));
	}
});
//#endregion
export { u as default };
