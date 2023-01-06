<template>
  <Switch v-model="isDark" @click="toggleTheme"></Switch>
</template>

<script setup lang="ts">
import { isDark, toggleTheme } from "../../composables/mode";
import Switch from "../common/Switch.vue";
</script>
