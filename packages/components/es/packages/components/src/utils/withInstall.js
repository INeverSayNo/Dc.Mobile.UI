//#region src/utils/withInstall.ts
var e = (e, t) => {
	if (e.install = (n) => {
		for (let r of [e, ...Object.values(t ?? {})]) n.component(r.name, r);
	}, t) for (let [n, r] of Object.entries(t)) e[n] = r;
	return e;
}, t = (e = []) => ({ install: (t) => {
	console.log(t), e.forEach((e) => t.use(e));
} });
//#endregion
export { t as makeInstaller, e as withInstall };
