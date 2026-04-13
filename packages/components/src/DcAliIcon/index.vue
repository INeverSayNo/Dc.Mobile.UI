<template>
  <svg
    class=""
    :class="prefixCls"
    aria-hidden="true"
    :width="transformWidth"
    :height="transformHeight"
  >
    <use :href='transformIconName'></use>
  </svg>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount } from "vue";
import { DcIconProps } from "./type";

defineOptions({
  name: "DcAliIcon",
});

const props = withDefaults(defineProps<DcIconProps>(), {
  prefixCls: "icon",
  iconName: "",
  width: "22px",
  height: "22px",
});

const transformWidth = computed(() => {
  if (typeof props.width === "number" || /^-?\d+(\.\d+)?$/.test(props.width)) {
    return `${props.width}px`;
  }
  return props.width;
});
const transformHeight = computed(() => {
  if (
    typeof props.height === "number" ||
    /^-?\d+(\.\d+)?$/.test(props.height)
  ) {
    return `${props.height}px`;
  }
  return props.height;
});

const transformIconName = computed(() => {
  return `#icon-${props.iconName}`;
});

const getIconFontOnlineLink = () => {
  if (!document.querySelector(".dczy-mobile-iconfont")) {
    const url =
        "https://gateway.daochen.com/api/abp/minio/wechat/icon/dczy-mobile-iconfont.js",
      i = document.createElement("script");
    ((i.className = "dczy-mobile-iconfont"),
      (i.src = url),
      document.head.appendChild(i));
  }
};
onBeforeMount(getIconFontOnlineLink);
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
