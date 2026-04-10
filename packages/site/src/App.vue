<script lang="ts" setup>
import { DTab, DTabs } from "dc-mobile-ui";
import { ref } from "vue";

const active = ref(0);
</script>
<template>
  <div>
    <DTabs v-model:active="active" animated>
      <DTab title="标签 1">内容 1</DTab>
      <DTab title="标签 2">内容 2</DTab>
      <DTab title="标签 3">内容 3</DTab>
      <DTab title="标签 4">内容 4</DTab>
    </DTabs>
  </div>
</template>
