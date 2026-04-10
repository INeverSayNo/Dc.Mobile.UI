import { Qo as e } from "../../../../node_modules/.pnpm/dc-tools@2.0.11_@babel_core@7.29.0_@zxing_library@0.21.3/node_modules/dc-tools/lib/index.esm.js";
//#region src/api/useRequest.ts
var t = class extends e {
	constructor(e, t = { onRequestFulfilled: n }) {
		let r = {
			baseURL: e?.baseURL,
			isJwt: !0,
			timeout: 9e4,
			...e,
			crypto: Reflect.has(e || {}, "crypto") ? e?.crypto : !0
		};
		super(r, t);
	}
};
async function n(e) {
	return e.url?.includes("/connect/token"), e;
}
//#endregion
export { t as BaseApi };
