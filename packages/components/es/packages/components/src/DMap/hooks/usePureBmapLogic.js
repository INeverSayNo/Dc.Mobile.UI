import { BmapController as e } from "./useLoadBMap.js";
import t from "./useCustomControl.js";
import n from "./useRailwayLayerLogic.js";
import r from "./useSatelliteMap.js";
import { createLabelMarker as i } from "../utils/mapHelper.js";
import { h as a, nextTick as o, onMounted as s, ref as c, shallowRef as l } from "vue";
//#region src/DMap/hooks/usePureBmapLogic.ts
function u(u, d) {
	let f = u.mapId || "dc-pure-map", p = l(null), { addRailwayBureauLayer: m, addRailwayLineLayer: h, removeRailwayLineLayer: g, removeRailwayBureauLayer: _, removeRailwayPointLayer: v, rebuildRailwayLayer: y } = n(u, d, p);
	r(u, d, p);
	let b = (t, n) => {
		e.whenLoad(async () => {
			let e = {
				minZoom: u.minZoom,
				maxZoom: u.maxZoom,
				enableRotate: !1,
				enableRotateGestures: !1
			}, r = t || new BMapGL.Point(104.08184, 30.702176);
			p.value = new BMapGL.Map(f, e), p.value.centerAndZoom(r, n || 14.08), u.scrollWheelZoom && p.value.enableScrollWheelZoom(), x(), w(), await o(), p.value.setMapStyleV2({
				styleId: "21f946c5cc0b3dc64ba1af3378c32c3a",
				version: "v3"
			});
		});
	}, x = () => {
		if (!u.showCopyRight) return;
		let e = new (t())(BMAP_ANCHOR_BOTTOM_RIGHT, new BMapGL.Size(0, 0), a("a", { style: { fontSize: u.useLargeCopyright ? "38px" : "12px" } }, u.copyright || "©道臣智运"));
		p.value?.addControl(e);
	}, S = c(!1), C = null, w = () => {
		let e = null, t = !1;
		p.value.onclick = (e) => {
			d("click", e.point);
		}, p.value.addEventListener("zoomend", () => {
			t = !0, setTimeout(() => {
				t = !1;
			}, 50), d("zoomEnd"), console.group("地图缩放层级"), console.log(p.value?.getZoom()), console.groupEnd(), y();
		}), p.value.onmoveend = (n) => {
			e && clearTimeout(e), e = setTimeout(() => {
				t || (S.value ? d("programmaticMoveEnd") : d("moveEnd"));
			}, 20);
		};
	}, T = l(null), E = (e, t, n) => {
		let r = new BMapGL.Point(t, e);
		S.value = !0, p.value?.flyTo(r, n || p.value?.getZoom()), D(r), C && clearTimeout(C), C = setTimeout(() => {
			S.value = !1, C = null;
		}, 500);
	}, D = async (e) => {
		T.value && p.value?.removeOverlay(T.value), T.value = null;
		let t = document.createElement("img");
		t.src = "https://gateway.dczhiyun.com/api/abp/minio/wechat/icon/compass1.png", t.style.width = "20px", t.style.height = "33px", t.style.objectFit = "cover", t.classList.add("bd-location-marker-icon"), T.value = i({
			label: t,
			lat: e.lat,
			lng: e.lng,
			offsetX: 0,
			offsetY: 0
		}), p.value?.addOverlay(T.value);
	}, O = async (e, t) => {
		try {
			k(), await o(), setTimeout(() => {
				b(e, t), D(e || new BMapGL.Point(39.91210293174053, 116.40334681632915));
			}, 100);
		} catch (e) {
			console.error("Error reloading map:", e);
		}
	}, k = () => {
		if (p.value) try {
			A(), p.value.destroy(), p.value = null;
		} catch (e) {
			console.error("Error destroying map:", e);
		}
	}, A = () => {
		if (p.value) try {
			g(), _(), v(), C &&= (clearTimeout(C), null);
		} catch (e) {
			console.error("Error removing events:", e);
		}
	};
	return s(() => {
		e.insertBMapEle(), b();
	}), {
		MapId: f,
		MapInstance: p,
		initMap: b,
		setMapCenter: E,
		reload: O,
		destoryMap: k,
		addRailwayBureauLayer: m,
		addRailwayLineLayer: h,
		removeRailwayLineLayer: g,
		removeRailwayBureauLayer: _,
		removeRailwayPointLayer: v,
		setLocationIcon: D
	};
}
//#endregion
export { u as default };
