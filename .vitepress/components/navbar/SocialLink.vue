<script setup>
import { useSocialLinks } from "~/composables/social-links";

const links = useSocialLinks();
</script>

<template>
  <div class="social-links">
    <template v-for="link in links" :key="link.text">
      <a
        :href="link.link"
        :title="links.text"
        target="_blank"
        rel="noreferrer noopener"
        class="social-link"
      >
        <ElIcon v-if="link.icon" :size="24">
          <component :is="link.icon" />
        </ElIcon> </a
    ></template>
  </div>
</template>

<style scoped lang="scss">
.social-links {
  height: 24px;
  padding: 0 12px;

  .social-link {
    color: var(--text-color);
  }
}
</style>
