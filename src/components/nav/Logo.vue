<template>
  <a :href="currentLink">
    <BlogSvg />
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLang } from "../../composables/lang";

const defaultLang = useLang();
const currentLink = computed(() => {
  return `/${defaultLang.value}/`;
});
</script>
