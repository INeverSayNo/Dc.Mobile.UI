<script lang="ts" setup>
import { computed } from "vue";
import { Image } from "vant";
import "vant/lib/image/style/index";
import type { DNoDataEmits, DNoDataProps, ImgType } from "./type";

const imgMap = new Map<ImgType, string>([
  [
    "noSearch",
    "https://gateway.daochen.com/api/abp/minio/wechat/images/DcComponentNoSearch.png",
  ],
  [
    "noData",
    "https://gateway.daochen.com/api/abp/minio/wechat/images/DcComponentsNoData.png",
  ],
]);

defineOptions({
  name: "DNoData",
});

const props = withDefaults(defineProps<DNoDataProps>(), {
  layout: "vertical",
  type: "noSearch",
  tips: "暂无数据",
  errImg: "",
  className: "",
});

const emits = defineEmits<DNoDataEmits>();

const imgUrl = computed(() => {
  if (props.errImg) return props.errImg;
  return imgMap.get(props.type) || imgMap.get("noSearch");
});

const handleClick = () => {
  emits("click");
};
</script>
<template>
  <div
    class="dc-flex dc-items-center dc-justify-center dc-h-190px dc-bg-white dc-rounded-7px dc-box-border dc-px-98px dc-overflow-hidden"
    :class="{
      'dc-flex-col': layout === 'vertical',
    }"
    @click="handleClick()"
  >
    <slot>
      <Image :src="imgUrl" width="146" height="94" fit="contain"></Image>
      <div
        class="dc-font-size-14px dc-text-center dc-c-#666 dc-mt--14px dc-text-ellipsis dc-line-clamp-2 dc-w-full dc-mb-0 dc-px-6px dc-box-border"
      >
        {{ tips }}
    </div>
    </slot>
  </div>
</template>
<style lang="less" scoped></style>
