<script setup>
import { toggleDark } from "../../composables/dark";
import DarkIcon from "~/components/icons/Dark.vue";
import LightIcon from "~/components/icons/Light.vue";
import VPSwitch from "~/components/common/Switch.vue";
</script>

<template>
  <div class="theme-toggler-content">
    <VPSwitch @click="() => toggleDark()">
      <ElIcon :size="13">
        <DarkIcon class="dark-icon" />
        <LightIcon class="light-icon" />
      </ElIcon>
    </VPSwitch>
  </div>
</template>

<style scoped lang="scss">
@use "~/style/mixins" as *;
.theme-toggler-content {
  @include with-bg;
  background-color: transparent;
  display: none;
  border-radius: 50%;
  height: 24px;
  padding: 0 12px;

  @include respond-to("md") {
    display: flex;
    align-items: center;
  }
}

.el-icon {
  cursor: pointer;
}

.dark-icon,
.light-icon {
  transition: color var(--el-transition-duration),
    opacity var(--el-transition-duration);
}

.light-icon {
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
}

.dark-icon {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}

@at-root .dark {
  .dark-icon {
    opacity: 1;
  }

  .light-icon {
    opacity: 0;
  }
}
</style>
