<script setup lang="ts">
import { computed } from "vue";
import { inBrowser, useData } from "vitepress";

import BlogSvg from "./icons/Blog.vue";
import VPNavbarSearch from "./navbar/Search.vue";
import VPNavbarMenu from "./navbar/Menu.vue";
import VPNavbarThemeToggler from "./navbar/ThemeToggler.vue";
import VPNavbarTranslation from "./navbar/Translation.vue";
import VPNavbarSocialLink from "./navbar/SocialLink.vue";

defineEmits(["toggle"]);

const { theme, page } = useData();

const currentLink = computed(() => {
  if (!inBrowser) {
    return `/${page.value?.frontmatter?.lang || ""}/`;
  }
  const existLangIndex = theme.value.langs.findIndex((lang) =>
    window?.location?.pathname.startsWith(`/${lang}`)
  );

  return existLangIndex === -1 ? "/" : `/${theme.value.langs[existLangIndex]}/`;
});
</script>

<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <div class="logo-container">
        <a :href="currentLink">
          <!-- <img
            class="logo"
            src="/images/element-plus-logo.svg"
            alt="Element Plus Logo"
          /> -->
          <BlogSvg />
        </a>
      </div>
      <div class="content">
        <VPNavbarSearch class="search" :options="theme.agolia" multilang />
        <VPNavbarMenu class="menu" />
        <VPNavbarThemeToggler class="theme-toggler" />
        <VPNavbarTranslation class="translation" />
        <VPNavbarSocialLink class="social-links" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  height: var(--header-height);
}
.logo-container > a {
  height: 28px;
  width: 128px;
}
.logo-container .logo {
  position: relative;
  height: 100%;
}
</style>
