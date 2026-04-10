<script lang="ts" setup>
import { ref } from "vue";
import { Divider, Icon } from "vant";
import "vant/lib/divider/index.css";
import DThemeProvider from "../DThemeProvider/index.vue";
import type { DCardEmits, DCardProps } from "./types";

defineOptions({
  name: "DCard",
});
const props = withDefaults(defineProps<DCardProps>(), {
  footerLayout: "between",
  dividerDashed: false,
  isShowCollapse: false,
  shadow: false,
  customClass: "",
  footerTitle: "查看更多信息",
  showFooter: true
});

const emits = defineEmits<DCardEmits>();

const slots = defineSlots<{
  header?: () => any;
  footer?: () => any;
  default?: () => any;
  more?: () => any;
}>();

const showMore = ref(false);
const clickFooter = () => {
  emits("clickFooter");
  if (props.isShowCollapse) {
    showMore.value = true;
  }
};
</script>
<template>
  <DThemeProvider>
    <div
      class="dc-bg-white dc-rounded-7px dc-p-10px"
      :class="customClass"
      :style="{
        boxShadow: shadow ? 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' : '',
      }"
    >
      <slot name="header"></slot>
      <Divider
        v-if="slots.header"
        :dashed="dividerDashed"
        style="margin: 8px 0"
      ></Divider>
      <slot></slot>
      <Divider v-if="showFooter" :dashed="dividerDashed" style="margin: 8px 0"></Divider>
      <div v-if="showMore">
        <slot name="more"></slot>
      </div>
      <slot v-if="showFooter" name="footer">
        <div
          class="dc-font-size-12px dc-flex dc-items-center"
          :class="{
            'dc-justify-between': footerLayout === 'between',
            'dc-justify-center': footerLayout === 'center',
            'dc-justify-end': footerLayout === 'right',
          }"
          @click="clickFooter"
        >
          <span>{{ footerTitle }}</span>
          <Icon name="arrow-down"></Icon>
        </div>
      </slot>
    </div>
  </DThemeProvider>
</template>
