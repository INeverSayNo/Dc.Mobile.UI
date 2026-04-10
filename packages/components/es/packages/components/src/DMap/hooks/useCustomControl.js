import { render as e } from "vue";
//#region src/DMap/hooks/useCustomControl.ts
function t() {
	return class extends BMapGL.Control {
		vNode;
		constructor(e, t, n) {
			super(), this.vNode = n, this.defaultAnchor = e, this.defaultOffset = t;
		}
		initialize(t) {
			let n = document.createElement("div");
			return e(this.vNode, n), t.getContainer().appendChild(n), n;
		}
	};
}
//#endregion
export { t as default };
