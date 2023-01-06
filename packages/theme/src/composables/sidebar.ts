import { computed } from "vue";
import type { ComputedRef } from "vue";

import { useData, useRoute } from "vitepress";
import { SidebarItem } from "../types";

export const useSidebar: () => [ComputedRef<boolean>, ComputedRef<SidebarItem[]>] = () => {
  const sidebars = computed<SidebarItem[]>(() => {
    const { site, page, frontmatter, theme } = useData();
    if (page.value.frontmatter?.sidebars ?? false) return [];

    if (frontmatter.value?.page ?? false) return [];

    const route = useRoute();
    const path = route.data?.relativePath ?? "/";
    const sidebars = site.value.themeConfig?.sidebars ?? {};

    return sidebars[path];
  });
  const hasSidebar = computed<boolean>(() => sidebars.value?.length > 0);

  return [hasSidebar, sidebars];
};
