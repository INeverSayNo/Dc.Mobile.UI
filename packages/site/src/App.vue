<script lang="ts" setup>
import { DSearch } from 'dc-mobile-ui';
import { ref } from 'vue';

const keywords = ref("")

</script>
<template>
    <div>
        <DSearch v-model="keywords" ></DSearch>
    </div>
</template>