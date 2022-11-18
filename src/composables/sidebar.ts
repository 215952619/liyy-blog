import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import type { VitePressData } from "vitepress";
// import { SidebarItem } from "src/types";

export const useSidebar = () => {
  const sidebars = computed<[SidebarItem]>(() => {
    const { site, page, frontmatter, theme } = useData<VitePressData>();
    if (page.value.frontmatter?.sidebars ?? false) return [];

    if (frontmatter.value?.page ?? false) return [];

    const route = useRoute();
    const path = route.data?.relativePath ?? "/";
    const sidebars = site.value.themeConfig?.sidebars ?? {};

    return sidebars[path];
  });
  const hasSidebar = computed<boolean>(() => sidebars.value.length > 0);

  return [hasSidebar, sidebars];
};
