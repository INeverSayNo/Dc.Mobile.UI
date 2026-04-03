<!-- src/DcThemeProvider/index.vue -->
<script lang="ts" setup>
import { ConfigProvider } from "vant";
import { useThemeStore } from "../store/modules/useThemeStore";
import { computed } from "vue";

const themeStore = useThemeStore();

const themeVars = computed(() => ({
  primaryColor: themeStore.primary,
  successColor: themeStore.success,
  dangerColor: themeStore.danger,
}));

const cssVars = computed(() => ({
  "--dc-primary": themeStore.primary,
  "--dc-success": themeStore.success,
  "--dc-danger": themeStore.danger,
  "--dc-error": themeStore.error,
}));

</script>

<template>
  <ConfigProvider :theme-vars="themeVars" :style="cssVars">
    <slot />
  </ConfigProvider>
</template>
