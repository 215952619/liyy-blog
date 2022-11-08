<script setup>
import { useNav } from "~/composables/nav";
import VPMenuLink from "~/components/navbar/MenuLink.vue";

const navs = useNav();
</script>

<template>
  <nav v-if="navs" class="navbar-menu">
    <VPMenuLink v-for="(item, key) in navs" :key="key" :item="item" />
  </nav>
</template>
