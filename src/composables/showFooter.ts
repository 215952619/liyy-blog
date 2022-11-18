import { computed } from "vue";
import { useData } from "vitepress";
import type { PageData } from "vitepress";

export const useFooter = () => {
  const { frontmatter } = useData<PageData>();
  const pageHome: boolean = frontmatter.value?.page ?? false;
  const playHome: boolean = frontmatter.value?.play ?? false;

  return computed<boolean>(() => !pageHome || !playHome);
};
