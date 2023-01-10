<template>
  <ElIcon class="bg-red lyb-icon">
    <Dark v-if="modelValue" />
    <Light v-else />
  </ElIcon>
</template>

<script setup lang="ts">
import { ElIcon } from "element-plus";
import Dark from "../../assets/icons/Dark.vue";
import Light from "../../assets/icons/Light.vue";

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.lyb-icon {
  font-size: 1em;

  > svg {
    width: 1em;
    height: 1em;
  }
}
</style>
