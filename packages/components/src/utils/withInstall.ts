import type { App, Directive, Plugin } from "vue";
import { initPiniaState } from "../store/piniaHelper";
import type {
  IConfig,
  SFCInstallWithContext,
  SFCWithInstall,
} from "./typescript";
import { createPinia } from "pinia";

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E,
) => {
  (main as SFCWithInstall<T>).install = (app: App): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};

export const withInstallFunction = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    (fn as SFCInstallWithContext<T>)._context = app._context;
    app.config.globalProperties[name] = fn;
  };

  return fn as SFCInstallWithContext<T>;
};

export const withInstallDirective = <T extends Directive>(
  directive: T,
  name: string,
) => {
  (directive as SFCWithInstall<T>).install = (app: App): void => {
    app.directive(name, directive);
  };

  return directive as SFCWithInstall<T>;
};

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, config?: IConfig) => {
    components.forEach((c) => app.use(c));
    if (config) {
      const pinia = createPinia();
      if (!app.config.globalProperties.$pinia) {
        app.use(pinia);
      }
      initPiniaState(config);
    }
  };

  return {
    // version,
    install,
  };
};
