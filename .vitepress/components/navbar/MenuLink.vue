<script setup>
import { useRoute } from "vitepress";
import { useStorage } from "@vueuse/core";
import VPLink from "~/components/common/Link.vue";
import { isActiveLink } from "~/utils";

const USER_VISITED_NEW_RESOURCE_PAGE = "USER_VISITED_NEW_RESOURCE_PAGE";
defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const route = useRoute();
const isVisited = useStorage(USER_VISITED_NEW_RESOURCE_PAGE, false);
const isNewPage = (item) => item.activeMatch === "/some_fake_path/";

const onNavClick = (item) => {
  if (isNewPage(item) && !isVisited.value) {
    isVisited.value = Date.now().toString();
  }
};
</script>

<template>
  <VPLink
    :class="{
      'is-menu-link': true,
      active: isActiveLink(
        route,
        item.activeMatch || item.link,
        !!item.activeMatch
      ),
    }"
    :href="item.link"
    :no-icon="true"
    @click="onNavClick(item)"
  >
    <el-badge v-if="isNewPage(item) && !isVisited" is-dot class="badge">
      {{ item.text }}</el-badge
    >
    <template v-else> {{ item.text }}</template>
  </VPLink>
</template>

<style scoped>
.is-menu-link {
  display: block;
  padding: 0 12px;
  line-height: calc(var(--nav-height) - 3px);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  transition: color var(--el-transition-duration);
  border-bottom: 2px solid transparent;
}
.is-menu-link.active {
  border-bottom-color: var(--brand-color);
}

.is-menu-link:hover {
  color: var(--brand-color);
}

.is-menu-link .badge {
  display: inline;
  vertical-align: unset;
}

.is-menu-link .badge:deep(.is-dot) {
  right: 0;
}
</style>
