<script lang="ts" setup>
import { showSuccessToast } from "vant";
import { onMounted, ref } from "vue";

const iconNameList = ref<string[]>([]);
const getIconFontOnlineLink = () => {
  fetch(
    "https://gateway.daochen.com/api/abp/minio/wechat/icon/dczy-mobile-iconfont.js",
  )
    .then((res) => res.text())
    .then((text) => {
      const iconNames = Array.from(
        text.matchAll(/<symbol\s+id="icon-([a-zA-Z0-9-_]+)"/g),
        (m) => m[1],
      );
      const names = iconNames.map((name) => name.replace(/^icon-/, ""));
      iconNameList.value = names;
    });
};

const copyIcon = async (name: string) => {
  const iconCode = `<DcAliIcon icon-name="${name}" />`;
  await navigator.clipboard.writeText(iconCode);
  showSuccessToast(`已复制: ${iconCode}`);
};

onMounted(getIconFontOnlineLink);
</script>
<template>
  <div class="preview-demo">
    <DcAliIcon
      v-for="item in iconNameList"
      :key="item"
      width="42px"
      height="42px"
      :icon-name="item"
      @click="copyIcon(item)"
    ></DcAliIcon>
  </div>
</template>

<style>
.preview-demo {
  padding: 10px;
  height: 38rem;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  place-items: center;
  cursor: pointer;
}
.preview-demo::-webkit-scrollbar {
  width: 3px;
}
.preview-demo::-webkit-scrollbar-thumb {
  border-radius: 1em;
  background-color: rgb(191 221 255);
}
</style>
