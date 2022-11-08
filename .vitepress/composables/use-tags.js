import { computed } from "vue";
import { useData } from "vitepress";

import { isDark } from "./dark";

export const useTags = () => {
  const { frontmatter } = useData();
  const tags = (frontmatter.value.tags ?? "").split(" ");

  return computed(() =>
    tags.map((tag) => {
      return {
        label: tag,
        key: tag,
        effect: isDark ? "dark" : "light",
        round: true,
      };
    })
  );
};
