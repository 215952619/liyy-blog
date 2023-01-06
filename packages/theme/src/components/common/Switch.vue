<template>
  <ElIcon class="bg-red">
    <Dark v-if="modelValue" />
    <Light v-else />
  </ElIcon>
</template>

<script setup lang="ts">
// import { watch } from "vue";
import Dark from "../../assets/icons/Dark.vue";
import Light from "../../assets/icons/Light.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

// const emits = defineEmits<{
//   (e: "change"): void;
// }>();

// watch(
//   () => props.modelValue,
//   () => emits("change")
// );
</script>
