<template>
  <NotFound v-if="isNotFound" />
  <!-- docContent -->
  <!-- heroContent -->
  <Footer v-if="isHeroPage" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import NotFound from "./NotFound.vue";
import Footer from "./Footer.vue";

const { frontmatter } = useData();
const route = useRoute();
const isHeroPage = computed(() => frontmatter.value?.page ?? false);

const isNotFound = computed(() => route?.component === NotFound);
</script>
