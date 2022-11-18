<template>
  <Nav />
  <Sidebar>
    <template #top></template>
    <template #bottom></template>
  </Sidebar>
  <Footer v-if="!hiddenFooter" />
</template>

<script setup lang="ts">
import { useProgress } from "../composables/progress";
import { useFooter } from "../composables/showFooter";
import Nav from "./Nav.vue";
import Sidebar from "./Sidebar.vue";
import Footer from "./Footer.vue";

const hiddenFooter = useFooter();
const { open } = useProgress();
open();
</script>
