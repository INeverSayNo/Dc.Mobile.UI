import e from "./hooks/usePureBmapLogic.js";
import { createElementBlock as t, defineComponent as n, normalizeClass as r, normalizeStyle as i, openBlock as a, unref as o } from "vue";
//#region src/DMap/index.vue?vue&type=script&setup=true&lang.ts
var s = ["id"], c = /* @__PURE__ */ n({
	name: "DMap",
	__name: "index",
	props: {
		height: { default: "100vh" },
		width: { default: "100vw" },
		className: { default: "" },
		showRailwayLine: {
			type: Boolean,
			default: !0
		},
		showRailwayStation: {
			type: Boolean,
			default: !0
		},
		showTerrain: { type: Boolean },
		showRailwayBureau: {
			type: Boolean,
			default: !0
		},
		minZoom: { default: 4 },
		maxZoom: { default: 18 },
		mapId: { default: "dcPureMap" },
		disableZoom: { type: Boolean },
		copyright: { default: "©道臣智运" },
		useLargeCopyright: { type: Boolean },
		showAttribution: {
			type: Boolean,
			default: !0
		},
		stationLevel: { default: 6 },
		scrollWheelZoom: { type: Boolean },
		showCopyRight: {
			type: Boolean,
			default: !1
		}
	},
	emits: [
		"zoomEnd",
		"init",
		"moveEnd",
		"click",
		"programmaticMoveEnd",
		"railwayLineClick",
		"railwayBureauClick",
		"railwayPointClick"
	],
	setup(n, { expose: c, emit: l }) {
		let { MapId: u, MapInstance: d, initMap: f, setMapCenter: p, addRailwayBureauLayer: m, addRailwayLineLayer: h, removeRailwayLineLayer: g, removeRailwayBureauLayer: _, reload: v, destoryMap: y, setLocationIcon: b } = e(n, l);
		return c({
			MapInstance: d,
			initMap: f,
			addRailwayBureauLayer: m,
			removeRailwayBureauLayer: _,
			removeRailwayLineLayer: g,
			addRailwayLineLayer: h,
			setMapCenter: p,
			reload: v,
			destoryMap: y,
			setLocationIcon: b
		}), (e, c) => (a(), t("div", {
			id: o(u),
			style: i({
				height: n.height,
				width: n.width
			}),
			class: r([n.className, "dc-pure-map"])
		}, null, 14, s));
	}
});
//#endregion
export { c as default };
