<script lang="ts" setup>
import { computed, shallowRef } from "vue";
import DThemeProvider from "../DThemeProvider/index.vue";
import { Tabs, tabsProps } from "vant";
import "vant/lib/tabs/style/index";
import { useThemeStore } from "../store/modules/useThemeStore";
import type { TabsExpose } from "vant/lib/tabs/types";
import type { DTabsEmits } from "./type";
import type { PropType } from "vue";

defineOptions({
  name: "DTabs",
});

const props = defineProps({
  ...tabsProps,
  transparent: {
    type: Boolean,
    default: true,
  },
  customClass: {
    type: String as PropType<string | string[]>,
    default: "",
  },
});
const emits = defineEmits<DTabsEmits>();

const activeIndicator = defineModel("active", {
  type: String,
  default: "",
});

const slots = defineSlots<{
  navLeft?: () => any;
  navRight?: () => any;
  navBottom?: () => any;
  default?: () => any;
}>();

const className = computed(() => {
  if (Array.isArray(props.customClass)) {
    return props.customClass.join(" ");
  } else {
    return props.customClass;
  }
});

const themeStore = useThemeStore();

const lineBackground = computed(() => {
  if (themeStore.primary) {
    return themeStore.primary;
  } else {
    return "#1989fa";
  }
});

const tabsRef = shallowRef();

defineExpose(
  new Proxy({} as TabsExpose, {
    get(_taget, key) {
      return tabsRef.value?.[key as keyof typeof tabsRef.value];
    },
    has(_taget, key) {
      return tabsRef.value?.[key as keyof typeof tabsRef.value];
    },
  }),
);
</script>
<template>
  <DThemeProvider>
    <Tabs
      v-bind="props"
      v-model:active="activeIndicator"
      :class="[className, transparent ? 'd-tabs-transparent-bg' : '']"
      :style="{
        '--dc-tabs-line-bg': lineBackground,
      }"
      ref="tabsRef"
      @click-tab="
        (name, title, event, disabled) =>
          emits('click-tab', name, title, event, disabled)
      "
      @change="(name, title) => emits('change', name, title)"
      @rendered="(name, title) => emits('rendered', name, title)"
      @scroll="(scrollTop, isFixed) => emits('scroll', scrollTop, isFixed)"
    >
      <template #nav-left>
        <slot name="navLeft"></slot>
      </template>
      <template #nav-right>
        <slot name="navRight"></slot>
      </template>
      <template #nav-bottom>
        <slot name="navBottom"></slot>
      </template>
      <template #default>
        <slot></slot>
      </template>
    </Tabs>
  </DThemeProvider>
</template>

<style lang="less">
.d-tabs-transparent-bg .van-tabs__wrap {
  background: transparent !important;
}
.d-tabs-transparent-bg .van-tabs__nav {
  background: transparent !important;
}
</style>
<style lang="less" scoped>
:deep(.van-tab) {
  font-size: 14px;
}
:deep(.van-tabs__line) {
  bottom: 20px !important;
  background: var(--dc-tabs-line-bg) !important;
}
</style>
