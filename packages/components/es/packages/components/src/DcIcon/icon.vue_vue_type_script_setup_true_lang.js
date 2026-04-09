import { computed as e, createElementBlock as t, createElementVNode as n, defineComponent as r, normalizeClass as i, onBeforeMount as a, openBlock as o } from "vue";
//#region src/DcIcon/icon.vue?vue&type=script&setup=true&lang.ts
var s = ["width", "height"], c = ["href"], l = /* @__PURE__ */ r({
	name: "DcAliIcon",
	__name: "icon",
	props: {
		prefixCls: { default: "icon" },
		iconName: { default: "" },
		width: { default: "22px" },
		height: { default: "22px" }
	},
	setup(r) {
		let l = r, u = e(() => typeof l.width == "number" || /^-?\d+(\.\d+)?$/.test(l.width) ? `${l.width}px` : l.width), d = e(() => typeof l.height == "number" || /^-?\d+(\.\d+)?$/.test(l.height) ? `${l.height}px` : l.height), f = e(() => `#icon-${l.iconName}`);
		return a(() => {
			if (!document.querySelector(".dczy-mobile-iconfont")) {
				let e = document.createElement("script");
				e.className = "dczy-mobile-iconfont", e.src = "https://gateway.daochen.com/api/abp/minio/wechat/icon/dczy-mobile-iconfont.js", document.head.appendChild(e);
			}
		}), (e, a) => (o(), t("svg", {
			class: i(["", r.prefixCls]),
			"aria-hidden": "true",
			width: u.value,
			height: d.value
		}, [n("use", { href: f.value }, null, 8, c)], 10, s));
	}
});
//#endregion
export { l as default };
