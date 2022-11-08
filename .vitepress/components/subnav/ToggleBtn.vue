<script setup>
import ToggleButton from "~/components/icons/ToggleButton.vue";
</script>

<template>
  <div class="sidebar-button flex items-center">
    <ElIcon :size="20" class="mr-2">
      <ToggleButton />
    </ElIcon>
    <span class="leading-6">Menu</span>
  </div>
</template>

<style>
.sidebar-button {
  cursor: pointer;
  color: var(--text-color);
}

.sidebar-button .icon {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
}

/* @media screen and (max-width: 1044px) {
  .sidebar-button {
    display: block;
  }
} */
</style>
