<script lang="ts" setup>
import { Search, searchProps } from "vant";
import "vant/lib/search/style/index";
import DThemeProvider from "../DThemeProvider/index.vue";
import DAliIcon from "../DcAliIcon/index.vue";
import { shallowRef, useAttrs } from "vue";
import { SearchExpose } from "vant/lib/search/types";

defineOptions({
  name: "DSearch",
});

defineProps({
  ...searchProps,
  showSearch: {
    type: Boolean,
    default: true,
  },
});

const attrs = useAttrs();

const modelValue = defineModel({
  type: String,
  default: "",
});

const SearchRef = shallowRef();

defineExpose(
  new Proxy({} as SearchExpose, {
    get(_taget, key) {
      return SearchRef.value?.[key as keyof typeof SearchRef.value];
    },
    has(_taget, key) {
      return SearchRef.value?.[key as keyof typeof SearchRef.value];
    },
  }),
);
</script>
<template>
  <DThemeProvider>
    <div class="d-search">
      <Search v-model="modelValue" v-bind="attrs" ref="SearchRef">
        <template #left-icon>
          <slot name="left-icon">
            <span class="dc-flex dc-items-center dc-justify-center">
              <DAliIcon
                icon-name="a-sousuoliebiaoicon2"
                width="16"
                height="16"
              ></DAliIcon>
            </span>
          </slot>
        </template>
        <template #right-icon>
          <slot name="right-icon">
            <span
              v-if="showSearch"
              class="dc-c-white dc-bg-primary dc-px-14px dc-py-7px dc-rounded-7px dc-font-size-12px"
              >搜索</span
            >
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
  :deep(.van-field__left-icon) {
    margin-right: 11px !important;
  }
}
</style>
