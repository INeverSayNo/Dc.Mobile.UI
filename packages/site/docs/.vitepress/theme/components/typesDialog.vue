<script lang="ts" setup>
import { ref, watch } from "vue";
import { Dialog, Button, showSuccessToast } from "vant";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/arduino-light.css";

hljs.registerLanguage("typescript", typescript);

const show = ref(false);
const props = defineProps<{
  url: string;
}>();

const rawCode = ref("");
const pureCode = ref("");

async function copyCode() {
  await navigator.clipboard.writeText(pureCode.value);
  //  ElMessage.success("复制成功")
  showSuccessToast({
    message: "复制成功",
  });
}

watch(
  () => props.url,
  async (v) => {
    /* @ts-ignore */
    const result = await import(`../dctypes/${v}.ts?raw`).then(
      (res) => res.default,
    );
    pureCode.value = result;
    rawCode.value = hljs.highlight(result, { language: "typescript" }).value;
  },
  {
    immediate: true,
  },
);
</script>
<template>
  <Dialog v-model:show="show" :show-close="false" class="ts-type-dialog">
    <template #header="{ close }">
      <div class="ts-type-dialog-header">
        <Icon name="link-o" @click="copyCode"></Icon>
        <Icon name="cross" @click="close"></Icon>
      </div>
    </template>
    <pre><code v-html="rawCode" class="language-typescript"></code></pre>
  </Dialog>
  <Button type="success" @click="show = true" size="small"
    >点我查看</Button
  >
</template>
<style lang="less">
.ts-type-dialog-header {
  text-align: right;
  & > :first-child {
    margin-right: 10px;
  }
  & > * {
    cursor: pointer;
  }
}
.ts-type-dialog {
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .el-dialog__body {
    flex-grow: 1;
    overflow: auto;
    background: #f5f5f5;
    padding: 0 0.6rem;
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #999;
      -webkit-border-radius: 5px;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb:vertical:hover {
      background-color: #666;
    }
    &::-webkit-scrollbar-thumb:vertical:active {
      background-color: #333;
    }
    &::-webkit-scrollbar-button {
      display: none;
    }
    &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }
  }
}
</style>
