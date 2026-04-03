import { defineStore } from "pinia";
import type { ThemeState } from "../type";

export const useThemeStore = defineStore("dcMobileUIThemeStore", {
  state: (): ThemeState => ({
    primary: "#007bff",
    success: "#28a745",
    danger: "#dc3545",
    error: "#dc3545",
  }),
  actions: {
    initState(payload: ThemeState) {
      this.primary = payload.primary;
      this.success = payload.success;
      this.danger = payload.danger;
      this.error = payload.error;
    },
  },
});

export type ThemeStoreState = ReturnType<typeof useThemeStore>;
