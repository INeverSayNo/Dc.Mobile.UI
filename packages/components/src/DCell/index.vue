<script lang="ts" setup>
import { Cell, cellProps, Icon } from "vant";
import DThemeProvider from "../DThemeProvider/index.vue";
import type { DCellEmits } from "./type";

defineOptions({
  name: "DCell",
});

const props = defineProps({
  ...cellProps,
  valueLayout: {
    type: String as () => "left" | "right" | "center",
    default: "right",
  },
});

const emits = defineEmits<DCellEmits>();

const cellClick = () => {
  emits("click");
};
</script>
<template>
  <DThemeProvider>
    <div
      class="dc-flex dc-items-baseline dc-pt-8px dc-pb-3px bg-white dc-cell-wrap"
      @click="cellClick()"
    >
      <Cell v-bind="props">
        <template #title>
          <slot name="title">
            <p
              class="dc-overflow-hidden dc-whitespace-nowrap dc-text-ellipsis dc-max-w-80% dc-c-#999999 dc-font-size-13px dc-font-weight-500"
            >
              {{ title }}
            </p>
          </slot>
        </template>
        <template #value>
          <slot name="value">
            <p
              class="dc-c-#333333 dc-font-size-13px dc-font-weight-500"
              :style="{
                'text-align': valueLayout,
              }"
            >
              <span>{{ value }}</span>
              <Icon v-if="isLink" name="arrow"></Icon>
            </p>
          </slot>
        </template>
        <template #label>
          <slot name="label"> </slot>
        </template>
        <template #icon>
          <slot name="icon"> </slot>
        </template>
        <template #right-icon>
          <slot name="right-icon"> </slot>
        </template>
        <template #extra>
          <slot name="extra"> </slot>
        </template>
      </Cell>
    </div>
  </DThemeProvider>
</template>
<style lang="less" scoped>
.dc-cell-wrap {
  :deep(.van-cell) {
    padding: 0;
    // height: 21px;
    // line-height: 21px;
  }
  :deep(.van-cell__title) {
    max-width: 126px;
  }
}
</style>
