<script setup>
import { onMounted } from "vue";
import nprogress from "nprogress";
import { isClient, useStorage, useToggle } from "@vueuse/core";
import { useSidebar } from "~/composables/sidebar";
import { useToggleWidgets } from "~/composables/toggle-widgets";
import { useLang } from "~/composables/lang";
import { breakpoints } from "~/constant";
import VPOverlay from "./Overlay.vue";
import VPContent from "./Content.vue";

const USER_PREFER_GITHUB_PAGE = "USER_PREFER_GITHUB_PAGE";
const [isSidebarOpen, toggleSidebar] = useToggle(false);
const { hasSidebar } = useSidebar();
const lang = useLang();

const mirrorUrl = "element-plus.gitee.io";
const isMirrorUrl = () => {
  if (!isClient) return;
  return window.location.hostname === mirrorUrl;
};

useToggleWidgets(isSidebarOpen, () => {
  if (!isClient) return;
  if (window.outerWidth >= breakpoints.lg) {
    toggleSidebar(false);
  }
});

onMounted(async () => {
  if (!isClient) return;
  window.addEventListener(
    "click",
    (e) => {
      const link = e.target.closest("a");
      if (!link) return;

      const { protocol, hostname, pathname, target } = link;
      const currentUrl = window.location;
      const extMatch = pathname.match(/\.\w+$/);
      // only intercept inbound links
      if (
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey &&
        !e.metaKey &&
        target !== `_blank` &&
        protocol === currentUrl.protocol &&
        hostname === currentUrl.hostname &&
        !(extMatch && extMatch[0] !== ".html")
      ) {
        e.preventDefault();
        if (pathname !== currentUrl.pathname) {
          nprogress.start();
        }
      }
    },
    { capture: true }
  );
});
</script>

<template>
  <div class="App">
    <VPOverlay
      class="overlay"
      :show="isSidebarOpen"
      @click="toggleSidebar(false)"
    />
    <Nav />
    <SubNav v-if="hasSidebar || true" @open-menu="toggleSidebar(true)" />
    <Sidebar :open="isSidebarOpen" @close="toggleSidebar(false)">
      <template #top> sider top slot </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>
    <VPContent :is-sidebar-open="isSidebarOpen">
      <template #content-top>
        <slot name="content-top" />
      </template>
      <template #content-bottom>
        <slot name="content-bottom" />
      </template>
      <template #aside-top>
        <slot name="aside-top" />
      </template>
      <template #aside-mid>
        <slot name="aside-mid" />
      </template>
      <template #aside-bottom>
        <slot name="aside-bottom" />
      </template>
    </VPContent>
  </div>
</template>
