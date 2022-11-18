import { computed } from "vue";
import { useData } from "vitepress";

export const useLinks = () => {
  const { theme } = useData();

  return computed(() => theme.value.links);
};
