<template>
  <ElIcon>
    <Dark v-if="modelValue" />
    <Light v-else />
  </ElIcon>
</template>

<script setup lang="ts">
import Dark from "../../assets/icons/Dark.vue";
import Light from "../../assets/icons/Light.vue";

defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
});
</script>
