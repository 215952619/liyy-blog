<template>
  <Nav />
  <Sidebar>
    <template #top>sider bar top slot</template>
    <template #bottom>sider bar bottom slot</template>
  </Sidebar>
  <Footer />
</template>

<script setup lang="ts">
import { useProgress } from "../composables/progress";
import Nav from "./Nav.vue";
import Sidebar from "./Sidebar.vue";
import Footer from "./Footer.vue";

const { open } = useProgress();
open();
</script>
