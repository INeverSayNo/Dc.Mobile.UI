<script lang="ts" setup>
import { ref } from "vue";
import { DInput } from "dc-mobile-ui";

const value = ref("");
</script>
<template>
  <DInput v-model="value" placeholder="请输入内容" />
</template>
