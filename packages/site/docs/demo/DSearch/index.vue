<script lang="ts" setup>
import { onMounted, ref, useTemplateRef, watch } from "vue";
import { DSearch } from "dc-mobile-ui";

const value = ref("");

const DSearchInstance = useTemplateRef("DSearchRef");

onMounted(()=>{
  DSearchInstance.value?.focus()
})
</script>
<template>
  <DSearch v-model="value" ref="DSearchRef" placeholder="请输入内容"/>
</template>
