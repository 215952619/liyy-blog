<template>
  <header class="navbar, has-sidebar">
    <div class="left_side">
      <Logo />
    </div>
    <div class="right_side">
      <Search />
      <Menu />
      <ThemeToggle />
      <Links />
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "./nav/Logo.vue";
import Search from "./nav/Search.vue";
import Menu from "./nav/Menu.vue";
import ThemeToggle from "./nav/ThemeToggle.vue";
import Links from "./nav/Links.vue";
</script>
