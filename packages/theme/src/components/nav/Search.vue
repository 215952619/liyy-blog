<template>
  <input type="text" @click="openContent" />
  <Teleport v-if="showSearchContent" to="body">
    <SearchContent @close="closeContent" />
  </Teleport>
</template>

<script setup lang="ts">
import { useToggle } from "@vueuse/core";
import SearchContent from "./SearchContent.vue";

const [showSearchContent, toggleContent] = useToggle();
const openContent = () => toggleContent(true);
const closeContent = () => toggleContent(false);
</script>
