import { computed } from "vue";
import { useData } from "vitepress";

export const useNav = () => {
  const { theme } = useData();

  return computed(() => theme.value.nav);
};
