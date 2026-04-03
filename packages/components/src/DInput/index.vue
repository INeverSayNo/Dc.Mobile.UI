<script lang="ts" setup>
import { Field } from "vant";
defineOptions({
  name: "DInput",
});

const modelValue = defineModel({
  type: String,
  default: "",
});
</script>
<template>
  <Field v-model="modelValue"></Field>
</template>
