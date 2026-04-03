<script lang="ts" setup>
import { Search } from "vant";
import "vant/lib/search/style/index";
import DThemeProvider from "../DThemeProvider/index.vue";
import DAliIcon from "../DcIcon/icon.vue";
import { useAttrs } from "vue";

const props = withDefaults(defineProps(), {});

const attrs = useAttrs()

const modelValue = defineModel({
  type: String,
  default: "",
});
</script>
<template>
  <DThemeProvider>
    <div class="d-search">
      <Search v-model="modelValue" v-bind="attrs">
        <template #left-icon>
          <slot name="left-icon">
            <span class="dc-flex dc-items-center dc-justify-center">
              <DAliIcon icon-name="a-sousuoliebiaoicon2" width="16" height="16"></DAliIcon>
            </span>
          </slot>
        </template>
        <template #right-icon>
          <slot name="right-icon">
            <span class="dc-c-white dc-bg-primary dc-px-14px dc-py-7px dc-rounded-7px dc-font-size-12px">搜索</span>
          </slot>
        </template>
      </Search>
    </div>
  </DThemeProvider>
</template>

<style lang="less" scoped>
.d-search {
  :deep(.van-search) {
    padding: 0 !important;
    background: #ffffff;
    border-radius: 7px;
    border-width: 1px;
    border-color: var(--dc-primary);
    border-style: solid;
  }
  :deep(.van-search__content) {
    border-radius: 7px;
  }
  :deep(.van-field__left-icon){
    margin-right: 11px !important;
  }
}
</style>
