import { createPinia, getActivePinia, Pinia } from "pinia";
import { getCurrentInstance } from "vue";
import { useHostStore } from "./modules/useHostStore";
import { useThemeStore } from "./modules/useThemeStore";
import { IConfig } from "src/utils/typescript";

export function InjectPinia() {
  const hasInject = Boolean(
    getCurrentInstance()?.appContext.config.globalProperties.$pinia,
  );
  if (hasInject) return false;
  const pinia = createPinia();
  getCurrentInstance()?.appContext.app.use(pinia);
}

export const getOrCreatePinia = (): Pinia => {
  const activePinia = getActivePinia();
  if (activePinia) {
    return activePinia;
  }
  console.warn("未找到活跃的 Pinia 实例，正在创建新实例");
  const newPinia = createPinia();
  return newPinia;
};

export function initPiniaState(config: IConfig) {
  getOrCreatePinia();
  const hostStore = useHostStore();
  hostStore.initState(config.request);
  const themeStore = useThemeStore();
  themeStore.initState(config.theme);
}
