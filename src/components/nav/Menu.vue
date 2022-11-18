<template>
  <a
    v-for="item in nav"
    :key="item.link"
    :href="item.link"
    :class="{ active: currentPath.includes(item.activeMatch) }"
    >{{ item.text }}</a
  >
</template>

<script setup lang="ts">
import { useRoute } from "vitepress";
import { useNav } from "../../composables/nav";

const route = useRoute();
const nav = useNav();

const currentPath = route.data?.relativePath;
</script>
