<script setup>
import { ref } from "vue";
import { useToc } from "~/composables/use-toc";
import { useActiveSidebarLinks } from "~/composables/active-bar";
import { useLang } from "~/composables/lang";
import { useTags } from "../../composables/use-tags";

const headers = useToc();
const marker = ref();
const container = ref();
useActiveSidebarLinks(container, marker);
const lang = useLang();
const tags = useTags();
</script>

<template>
  <aside ref="container" class="toc-wrapper">
    <nav class="toc-content">
      <h3 class="toc-content__heading">Contents</h3>
      <ul class="toc-items">
        <li
          v-for="{ link, text, children } in headers"
          :key="link"
          class="toc-item"
        >
          <a class="toc-link" :href="link" :title="text">{{ text }}</a>
          <ul v-if="children">
            <li
              v-for="{ link: childLink, text: childText } in children"
              :key="childLink"
              class="toc-item"
            >
              <a class="toc-link subitem" :href="childLink" :title="text">{{
                childText
              }}</a>
            </li>
          </ul>
        </li>
      </ul>
      <div ref="marker" class="toc-marker" />

      <template v-if="tags.length > 0">
        <h3 class="toc-content__heading">Tags</h3>
        <ElTag v-for="tag in tags" v-bind="tag" class="mr-2">{{
          tag.label
        }}</ElTag>
      </template>
    </nav>
  </aside>
</template>
