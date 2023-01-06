<template>
  <!-- <el-scrollbar v-if="hasSidebar" class="sidebar">
    <aside>
      <slot name="top" />
      <div class="sidebar-groups">
        <section v-for="(item, key) of sidebars" :key="key" class="sidebar-group">
          <p class="sidebar-group__title">
            {{ item.text }}
          </p>
          <VPSidebarLink
            v-for="(child, childKey) in item.children"
            :key="childKey"
            :item="child"
            @close="$emit('close')"
          />
        </section>
      </div>
      <slot name="bottom" />
    </aside>
  </el-scrollbar> -->
  siderbar
</template>
<script setup lang="ts">
// import { useSidebar } from "../composables/sidebar";
// const [hasSidebar, sidebars] = useSidebar();
</script>
