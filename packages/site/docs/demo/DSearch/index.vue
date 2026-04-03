<script lang="ts" setup>
import { ref, watch } from "vue";
import { DSearch } from "dc-mobile-ui";

const value = ref("");

</script>
<template>
  <DSearch v-model="value" placeholder="请输入内容" />
</template>
