import { isMobile as e } from "../utils/coordTranslate.js";
//#region src/DMap/hooks/useCreateCustomLayer.ts
var t = "https://gateway.dczhiyun.com/geo/geoserver/osm/wms";
function n() {
	return { createLayerUrl: (n, r) => {
		let { layerName: i, maxZoom: a, minZoom: o, paneName: s } = n, c = {
			layers: `osm:${i}`,
			service: "WMS",
			request: "GetMap",
			format: "image/png8",
			transparent: !0,
			version: "1.1.0",
			srs: "EPSG:3857",
			width: e ? 512 : 1024,
			height: e ? 512 : 1024,
			tiled: !0,
			FORMAT_OPTIONS: "dpi:180"
		}, l = new URLSearchParams();
		for (let e in c) l.append(e, c[e]);
		if (r && typeof r == "object") for (let e in r) l.append(e, r[e]);
		return `${t}?${l.toString()}`;
	} };
}
//#endregion
export { n as default };
