import { useHostStore as e } from "../store/modules/useHostStore.js";
import { BaseApi as t } from "../api/useRequest.js";
import { LsysTypeEnum as n } from "./utils/enum.js";
//#region src/DMap/api.ts
function r() {
	let r = e(), i = new t({
		crypto: !1,
		baseURL: r.base_url
	}), a = new t({
		crypto: r.useCrypto,
		baseURL: r.base_url
	}), o = () => {};
	async function s(e) {
		o && o();
		let { cancel: t, request: r } = await i.cancelRequest({
			url: "/api/lbs/location-geoserver/suggestion",
			params: {
				Text: e,
				CRSTypes: n.get("BaiduMap")?.id
			},
			method: "GET"
		}, !0);
		o = t;
		try {
			let e = await r();
			return !Array.isArray(e.result) || !e.result.length ? [] : e.result.filter((e) => e.latitude && e.longitude);
		} catch (e) {
			return console.log(e), [];
		}
	}
	async function c(e, t = !1) {
		o && o();
		let { cancel: n, request: r } = await a.cancelRequest({
			url: "/api/solution/MapRegion/GetCenter",
			data: e,
			method: "POST"
		}, !0);
		o = n;
		try {
			let e = await r();
			if (!Array.isArray(e.result) || !e.result.length) return t ? null : [];
			let n = e.result.filter((e) => e.center?.lat & e.center?.lng);
			return n.length ? t ? n[0] : n : t ? null : [];
		} catch (e) {
			return console.log(e), [];
		}
	}
	async function l(e, t, n = 50) {
		o && o();
		let { cancel: r, request: a } = await i.cancelRequest({
			url: "/api/lbs/location-geoserver/regeocode",
			params: {
				lat: e,
				lng: t,
				radius: n
			},
			method: "GET"
		}, !0);
		o = r;
		try {
			let e = await a();
			return e.code == "0" ? e.result : void 0;
		} catch {
			return;
		}
	}
	async function u(e) {
		o && o();
		let { cancel: t, request: n } = await i.cancelRequest({
			url: "/api/lbs/location-geoserver/navigation",
			data: e,
			method: "POST"
		}, !0);
		o = t;
		try {
			let e = await n();
			return e.code == "0" ? e.result : void 0;
		} catch {
			return;
		}
	}
	async function d(e, t = 1) {
		return a.post(`/api/solution/area-np/query-areas?areaType=${t}`, e);
	}
	async function f(e, t = 500) {
		return a.post(`/api/solution/line-np/query-by-point?distance=${t}`, e);
	}
	return {
		GetAddressSuggest: s,
		GetAddressCenter: c,
		GetReGeocode: l,
		MapNavgaition: u,
		GetBureaByLatlng: d,
		GetLineByLatlng: f
	};
}
//#endregion
export { r as useDMapApi };
