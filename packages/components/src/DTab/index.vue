<script lang="ts" setup>
import { shallowRef } from "vue";
import DThemeProvider from "../DThemeProvider/index.vue";
import { Tab, tabProps } from "vant";
import "vant/lib/tab/style/index";

defineOptions({
  name: "DTab",
});

const props = defineProps(tabProps);

const TabRef = shallowRef();
</script>
<template>
  <DThemeProvider>
    <Tab v-bind="props" ref="TabRef">
      <template #title>
        <slot name="title">
          <span>{{ title }}</span>
        </slot>
      </template>
      <template #default>
        <slot></slot>
      </template>
    </Tab>
  </DThemeProvider>
</template>

