import { Search as e } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/search/index.js";
import { createBlock as t, defineComponent as n, openBlock as r, unref as i, useModel as a } from "vue";
//#region src/DSearch/index.vue?vue&type=script&setup=true&lang.ts
var o = /* @__PURE__ */ n({
	__name: "index",
	props: {
		modelValue: {
			type: String,
			default: ""
		},
		modelModifiers: {}
	},
	emits: ["update:modelValue"],
	setup(n) {
		let o = a(n, "modelValue");
		return (n, a) => (r(), t(i(e), {
			modelValue: o.value,
			"onUpdate:modelValue": a[0] ||= (e) => o.value = e
		}, null, 8, ["modelValue"]));
	}
});
//#endregion
export { o as default };
