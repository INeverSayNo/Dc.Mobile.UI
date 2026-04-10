//#region src/DMap/utils/coordTranslate.ts
var e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t = 3.141592653589793, n = 6378245, r = .006693421622965943;
function i(e, t) {
	let n = 3.141592653589793 * 3e3 / 180, r = e - .0065, i = t - .006, a = Math.sqrt(r * r + i * i) - 2e-5 * Math.sin(i * n), o = Math.atan2(i, r) - 3e-6 * Math.cos(r * n);
	return [a * Math.cos(o), a * Math.sin(o)];
}
function a(e, i) {
	if (c(e, i)) return [+e, +i];
	{
		let a = o(e - 105, i - 35), c = s(e - 105, i - 35), l = i / 180 * t, u = Math.sin(l);
		u = 1 - r * u * u;
		let d = Math.sqrt(u);
		a = a * 180 / (n * (1 - r) / (u * d) * t), c = c * 180 / (n / d * Math.cos(l) * t);
		let f = +i + a, p = +e + c;
		return [e * 2 - p, i * 2 - f];
	}
}
function o(e, n) {
	let r = -100 + 2 * e + 3 * n + .2 * n * n + .1 * e * n + .2 * Math.sqrt(Math.abs(+e));
	return r += (20 * Math.sin(6 * e * t) + 20 * Math.sin(2 * e * t)) * 2 / 3, r += (20 * Math.sin(+n * t) + 40 * Math.sin(n / 3 * t)) * 2 / 3, r += (160 * Math.sin(n / 12 * t) + 320 * Math.sin(+n * t / 30)) * 2 / 3, r;
}
function s(e, n) {
	let r = 300 + +e + 2 * n + .1 * e * e + .1 * e * n + .1 * Math.sqrt(Math.abs(+e));
	return r += (20 * Math.sin(6 * e * t) + 20 * Math.sin(2 * e * t)) * 2 / 3, r += (20 * Math.sin(+e * t) + 40 * Math.sin(e / 3 * t)) * 2 / 3, r += (150 * Math.sin(e / 12 * t) + 300 * Math.sin(e / 30 * t)) * 2 / 3, r;
}
function c(e, t) {
	return +e < 72.004 || +e > 137.8347 || +t < .8293 || +t > 55.8271 || !1;
}
function l(e, t) {
	let n = i(e, t);
	return a(n[0], n[1]);
}
//#endregion
export { l as bd09towgs84, e as isMobile };
