<script lang="ts" setup>
import { ref, watch } from "vue";
import { Dialog, Button, showSuccessToast, Icon } from "vant";
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
  <Dialog
    v-model:show="show"
    :closeOnClickOverlay="true"
    class="ts-type-dialog"
    width="70vw"
    teleport="body"
  >
    <template #title>
      <div class="ts-type-dialog-header">
        <Icon name="link-o" @click="copyCode"></Icon>
        <Icon name="cross" @click="show = false"></Icon>
      </div>
    </template>
    <div class="dialog-code-content">
      <pre><code v-html="rawCode" class="language-typescript"></code></pre>
    </div>
  </Dialog>
  <Button type="success" @click="show = true" size="small">点我查看</Button>
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
  .dialog-code-content {
    max-height: 42rem;
    overflow: auto;
    padding: 0 20px !important;
  }
  .van-dialog__header{
    padding: 10px 20px !important;
  }
}
</style>
