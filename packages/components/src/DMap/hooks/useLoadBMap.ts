export class BmapController {
  static isLoad = false;
  static eventList = new Set<Function>();
  static async insertBMapEle() {
    const ak = "QfsfdSaTbBV1RneMR2h0awHUoAQv0vbI";

    (window as any).resourcebaiduMapInit = () => {
      this.isLoad = true;
      this.executeCallbacks();
    };
    const src = document.getElementById("DcResourceBmapScript");
    if (src) {
      (window as any).resourcebaiduMapInit();
      return;
    }
    const script = document.createElement("script");
    script.id = "DcResourceBmapScript";
    script.type = "text/javascript";
    script.src = `https://api.map.baidu.com/api?type=webgl&v=1.0&ak=${ak}&callback=resourcebaiduMapInit&s=1`;
    document.head.appendChild(script);
  }

  static whenLoad(fn = () => {}) {
    this.isLoad ? fn() : this.eventList.add(fn);
  }

  static executeCallbacks() {
    this.eventList.forEach((fn) => fn());
    this.eventList.clear();
  }
}
