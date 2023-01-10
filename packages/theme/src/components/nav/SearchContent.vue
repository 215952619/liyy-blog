<template>
  <p>这是搜索的附加内容</p>
  <ElButton @click="closeContent">关闭</ElButton>
</template>

<script setup lang="ts">
import { ElButton } from "element-plus";
const emit = defineEmits<{
  (e: "close"): void;
}>();

const closeContent = () => emit("close");
</script>
