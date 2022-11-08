<script setup>
import { useData } from "vitepress";
import VPPageFooter from "~/components/doc/PageFooter.vue";
import VPPageNav from "~/components/doc/PageNav.vue";
import VPTableOfContent from "~/components/doc/TableOfContent.vue";

const { page } = useData();
</script>

<template>
  <div class="doc-content-wrapper">
    <div class="doc-content-container">
      <Content class="doc-content vp-doc" />
      <VPPageFooter />
      <VPPageNav />
    </div>
    <VPTableOfContent v-if="page.headers" />
  </div>
</template>
