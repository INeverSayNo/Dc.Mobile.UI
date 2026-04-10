<script setup>
import DefaultTheme from 'vitepress/theme'
import PhoneSimulator from './phoneSimulator.vue'
import { useRoute } from 'vitepress'
import { computed } from 'vue'

const route = useRoute()
const isComponentPage = computed(() => route.path.startsWith('/components/'))
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <PhoneSimulator v-if="isComponentPage" />
    </template>
  </DefaultTheme.Layout>
</template>

<style>
/* 组件文档页收窄内容区，给手机模拟器留空间 */
.is-component-page .VPDoc .container .content {
  max-width: 680px !important;
}
</style>