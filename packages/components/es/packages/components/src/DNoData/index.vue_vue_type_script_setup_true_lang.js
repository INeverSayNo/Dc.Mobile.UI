import { Image as e } from "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/image/index.js";
import "../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/lib/image/style/index.js";
import { computed as t, createElementBlock as n, createElementVNode as r, createVNode as i, defineComponent as a, normalizeClass as o, openBlock as s, renderSlot as c, toDisplayString as l, unref as u } from "vue";
//#region src/DNoData/index.vue?vue&type=script&setup=true&lang.ts
var d = { class: "dc-font-size-14px dc-text-center dc-c-#666 dc-mt--14px dc-text-ellipsis dc-line-clamp-2 dc-w-full dc-mb-0 dc-px-6px dc-box-border" }, f = /* @__PURE__ */ a({
	name: "DNoData",
	__name: "index",
	props: {
		layout: { default: "vertical" },
		type: { default: "noSearch" },
		errImg: { default: "" },
		tips: { default: "暂无数据" },
		className: { default: "" }
	},
	emits: [
		"clickTips",
		"clickImages",
		"click"
	],
	setup(a, { emit: f }) {
		let p = new Map([["noSearch", "https://gateway.daochen.com/api/abp/minio/wechat/images/DcComponentNoSearch.png"], ["noData", "https://gateway.daochen.com/api/abp/minio/wechat/images/DcComponentsNoData.png"]]), m = a, h = f, g = t(() => m.errImg ? m.errImg : p.get(m.type) || p.get("noSearch")), _ = () => {
			h("click");
		};
		return (t, f) => (s(), n("div", {
			class: o(["dc-flex dc-items-center dc-justify-center dc-h-190px dc-bg-white dc-rounded-7px dc-box-border dc-px-98px dc-overflow-hidden", { "dc-flex-col": a.layout === "vertical" }]),
			onClick: f[0] ||= (e) => _()
		}, [c(t.$slots, "default", {}, () => [i(u(e), {
			src: g.value,
			width: "146",
			height: "94",
			fit: "contain"
		}, null, 8, ["src"]), r("div", d, l(a.tips), 1)])], 2));
	}
});
//#endregion
export { f as default };
