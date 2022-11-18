<template>
  <input type="text" @click="handleClickInput" />
  <Teleport v-if="showSearchContent" to="body">
    <SearchContent />
  </Teleport>
</template>

<script setup lang="ts">
import { useToggle } from "@vueuse/core";
import SearchContent from "./SearchContent.vue";

const [showSearchContent, toggleContent] = useToggle();
const handleClickInput = () => toggleContent(true);
</script>
