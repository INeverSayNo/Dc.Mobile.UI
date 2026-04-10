import { watch as e } from "vue";
//#region src/DMap/hooks/useSatelliteMap.ts
function t(t, n, r) {
	e([() => t.showTerrain, () => r.value], ([e, t]) => {
		t && (e ? t.setMapType(BMAP_SATELLITE_MAP) : t.setMapType(BMAP_NORMAL_MAP));
	}, { immediate: !0 });
}
//#endregion
export { t as default };
