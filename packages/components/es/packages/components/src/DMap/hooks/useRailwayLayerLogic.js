import { closeToast as e, showLoadingToast as t } from "../../../../../node_modules/.pnpm/vant@4.9.24_vue@3.5.31_typescript@6.0.2_/node_modules/vant/es/toast/function-call.js";
import { point as n } from "../../../../../node_modules/.pnpm/@turf_helpers@7.3.4/node_modules/@turf/helpers/dist/esm/index.js";
import { booleanPointInPolygon as r } from "../../../../../node_modules/.pnpm/@turf_boolean-point-in-polygon@7.3.4/node_modules/@turf/boolean-point-in-polygon/dist/esm/index.js";
import { bd09towgs84 as i, isMobile as a } from "../utils/coordTranslate.js";
import o from "./useCreateCustomLayer.js";
import { useDMapApi as s } from "../api.js";
import { createReactiveDpiLayer as c } from "./createDynamicDpiLayer.js";
import { nextTick as l, shallowRef as u, watch as d } from "vue";
//#region src/DMap/hooks/useRailwayLayerLogic.ts
function f(f, p, m) {
	let { GetBureaByLatlng: h, GetLineByLatlng: g } = s(), { createLayerUrl: _ } = o(), v = u(null), y = u(null), b = null, x = u(null), S = null, C = u(null), w = (e) => {
		let t = _({
			layerName: e ? "dc_railway_bureau_select" : "dc_railway_bureau",
			paneName: "railwayBureauPane",
			maxZoom: f.maxZoom || 18,
			minZoom: f.minZoom || 3
		}, { cql_filter: e ? `name = '${e}'` : "" });
		v.value = new BMapGL.XYZLayer({ tileUrlTemplate: t + "&BBOX=[b]" }), m.value?.addTileLayer(v.value), v.value.setTop(9999999);
		let n = _({
			layerName: "dc_railway_bureau_label",
			paneName: "railwayBureauPane",
			maxZoom: f.maxZoom || 18,
			minZoom: f.minZoom || 3
		}, {
			styles: a ? "dc_railway_bureau_label_new" : "",
			cql_filter: e ? `name = '${e}'` : ""
		});
		y.value = new BMapGL.XYZLayer({ tileUrlTemplate: n + "&BBOX=[b]" }), m.value?.addTileLayer(y.value), y.value.setTop(9999999);
	}, T = async (n) => {
		if (!v.value || !m.value) return;
		let { latlng: r } = n;
		t({
			message: "路局信息获取中...",
			duration: 0,
			forbidClick: !0,
			className: "w-160px"
		});
		let [i, a] = await h({
			lat: r.lat,
			lng: r.lng
		});
		if (e(), i || !a || !Array.isArray(a.result) || !a.result.length) return;
		let [o = null] = a.result;
		o && p("railwayBureauClick", {
			...o,
			full_name: o.fullName,
			short_name: o.shortName,
			area_type: o.areaType
		});
	}, E = () => {
		v.value &&= (m.value?.removeTileLayer(v.value), null), y.value &&= (m.value?.removeTileLayer(y.value), null);
	};
	d([() => f.showRailwayBureau, () => m.value], ([e, t]) => {
		t && (e ? v.value || w() : E());
	});
	let D = async (e = "") => {
		m.value && (e && C.value && k(), await l(), _({
			layerName: e ? "dc_railway_line_select" : "dc_railway_line",
			paneName: "railwayLinePane",
			maxZoom: f.maxZoom || 18,
			minZoom: f.minZoom || 3
		}, {
			cql_filter: e ? `line_name like '%,${e},%'` : "",
			styles: a ? "dc_railway_line_new" : e ? "dc_railway_line_select_pc" : ""
		}), S = c({
			layerName: e ? "dc_railway_line_select" : "dc_railway_line",
			paneName: "railwayLinePane",
			maxZoom: f.maxZoom || 18,
			minZoom: f.minZoom || 3
		}, m, {
			cql_filter: e ? `line_name like '%,${e},%'` : "",
			styles: a ? "dc_railway_line_new" : e ? "dc_railway_line_select_pc" : ""
		}), C.value = S.getLayer(), p("init"));
	}, O = async (n) => {
		if (!C.value || !m.value) return;
		let { lat: r, lng: a } = n.latlng, [o, s] = i(a, r), c = m.value.getZoom(), l = c >= 12 ? 500 : c >= 7 ? 4e3 : 8e3;
		t({
			message: "路线信息获取中...",
			duration: 0,
			forbidClick: !0,
			className: "w-160px"
		});
		let [u, d] = await g({
			lat: s,
			lng: o
		}, l);
		e(), !(u || !d || !d.result.lineName) && p("railwayLineClick", d.result);
	}, k = () => {
		C.value &&= (m.value?.removeTileLayer(C.value), null), S?.remove(), S = null;
	};
	d([() => f.showRailwayLine, () => m.value], ([e, t]) => {
		t && (e ? C.value || D() : k());
	});
	let A = async () => {
		m.value && (_({
			layerName: "dc_railway_point",
			paneName: "railwayPointPane",
			maxZoom: f.maxZoom || 18,
			minZoom: f.minZoom || 3
		}, { styles: a ? "baidu_railway_point_mobile" : "baidu_railway_point_pc" }), b = c({
			layerName: "dc_railway_point",
			paneName: "railwayPointPane",
			maxZoom: f.maxZoom || 18,
			minZoom: f.minZoom || 3
		}, m, { styles: "baidu_railway_point_mobile" }), x.value = b.getLayer());
	}, j = (e) => {
		if (!b || !m.value) return;
		console.log(m.value.getBounds());
		let { ne: t, sw: n } = m.value.getBounds(), r = m.value.getSize(), [a, o] = i(n.lng, n.lat), [s, c] = i(t.lng, t.lat), l = m.value.getZoom(), u = 5;
		u = l <= 6 ? 15 : l <= 10 ? 10 : 5;
		let d = {
			request: "GetFeatureInfo",
			service: "WMS",
			version: "1.1.1",
			layers: "osm:dc_railway_point",
			query_layers: "osm:dc_railway_point",
			feature_count: 10,
			info_format: "application/json",
			srs: "EPSG:4326",
			width: r.width,
			height: r.height,
			buffer: u,
			x: Math.round(e.x),
			y: Math.round(e.y),
			bbox: `${a},${o},${s},${c}`
		}, f = `https://gateway.dczhiyun.com/geo/geoserver/osm/wms?${Object.entries(d).map(([e, t]) => `${e}=${encodeURIComponent(String(t))}`).join("&")}`;
		fetch(f).then((e) => e.json()).then((t) => {
			if (t && t.features && t.features.length > 0) {
				let [e] = t.features;
				return p("railwayPointClick", {
					...e.properties,
					lat: e.geometry.coordinates[1],
					lng: e.geometry.coordinates[0],
					id: e.id.split(".")[1]
				}), t;
			} else {
				let t = {
					...d,
					x: Math.round(e.x - 20)
				}, n = `https://gateway.dczhiyun.com/geo/geoserver/osm/wms?${Object.entries(t).map(([e, t]) => `${e}=${encodeURIComponent(String(t))}`).join("&")}`;
				return fetch(n);
			}
		}).then((e) => typeof e == "object" ? e : e?.json()).then((t) => {
			if (t && t.features && t.features.length > 0) {
				let [e] = t.features;
				p("railwayPointClick", {
					...e.properties,
					lat: e.geometry.coordinates[1],
					lng: e.geometry.coordinates[0],
					id: e.id.split(".")[1]
				});
			} else O(e);
		}).catch((e) => {
			console.error("获取WMS要素数据失败:", e);
		});
	}, M = () => {
		x.value &&= (m.value?.removeTileLayer(x.value), null), b?.remove(), b = null;
	};
	d([() => f.showRailwayStation, () => m.value], ([e, t]) => {
		t && (e ? l(A) : M());
	});
	let N = (e) => {
		e && m.value?.addEventListener("click", async (e) => {
			let t = await I(e.latlng);
			v.value && t ? T(e) : x.value && j(e);
		});
	}, P = u(), F = async () => {
		P.value = await fetch("./geoProvince.json").then((e) => e.json());
	}, I = async (e) => {
		P.value || await F();
		for (let t of P.value.features) if (r(n([e.lng, e.lat]), t)) return !0;
		return !1;
	};
	return d(() => m.value, N), {
		removeRailwayLineLayer: k,
		railwayLineClickEvent: O,
		addRailwayLineLayer: D,
		addRailwayBureauLayer: w,
		removeRailwayBureauLayer: E,
		railwayBureauClickEvent: T,
		addRailwayPointLayer: A,
		removeRailwayPointLayer: M,
		railwayPointClickEvent: j,
		rebuildRailwayLayer: () => {
			S?.rebuild(), b?.rebuild();
		}
	};
}
//#endregion
export { f as default };
