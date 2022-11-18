<template>
  <template v-for="link in links" :key="links.key">
    <a :href="link.link">
      <component :is="link.component"></component>
    </a>
  </template>
</template>

<script setup lang="ts">
import { useLinks } from "../../composables/links";

const links = useLinks();
</script>
