<script setup>
import { computed } from "vue";
import Edit from "~/components/icons/Edit.vue";

const props = defineProps({
  href: String,
  noIcon: Boolean,
});

const isExternal = computed(() => props.href && /^[a-z]+:/i.test(props.href));
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    class="link-item"
    :class="{ link: href }"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
    <ElIcon v-if="isExternal && !noIcon">
      <Edit class="link-icon" />
    </ElIcon>
  </component>
</template>

<style scoped>
.link-item {
  display: flex;
  align-items: center;
}

.el-icon {
  margin-left: 4px;
}
</style>
