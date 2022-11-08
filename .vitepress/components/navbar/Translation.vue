<script setup>
import Translate from "~/components/icons/Translate.vue";
import { useTranslation } from "~/composables/translation";

const { switchLang, languageMap, langs, lang } = useTranslation();
</script>

<template>
  <div class="translation-container">
    <ClientOnly>
      <ElPopover
        :show-arrow="false"
        trigger="hover"
        popper-class="translation-popup"
      >
        <template #reference>
          <ElIcon :size="24">
            <Translate />
          </ElIcon>
        </template>
        <div
          v-for="l in langs"
          :key="l"
          :class="{ language: true, selected: l === lang }"
          @click="switchLang(l)"
        >
          {{ languageMap[l] }}
        </div>
      </ElPopover>
    </ClientOnly>
  </div>
</template>
<style lang="scss" scoped>
@use "~/style/mixins" as *;
.translation-container {
  display: none;
  height: 24px;
  padding: 0 12px;

  @include respond-to("md") {
    display: block;
  }

  @at-root .translation-popup.el-popper {
    box-shadow: var(--el-box-shadow);

    .language {
      cursor: pointer;
      padding: 0 16px;
      line-height: 28px;
      &.selected {
        color: var(--brand-color);
      }

      .link-item {
        font-weight: 500;
      }
    }
  }
}
</style>
