import "vue";
//#region src/DMap/utils/mapHelper.ts
var e = (e) => {
	let { lat: t, lng: n, label: r, className: i = "", offsetX: a = 20, offsetY: o = 0 } = e;
	return new BMapGL.CustomOverlay(() => r, {
		point: new BMapGL.Point(n, t),
		offsetX: a,
		offsetY: o
	});
};
//#endregion
export { e as createLabelMarker };
