import { computed } from "vue";
import { useRoute } from "vitepress";

import { projectConfig } from "../utils/constants";

export const useLang = () => {
  const route = useRoute();
  const path: string = route?.data?.relativePath ?? "";

  return computed(() => (path.includes("/") ? path.split("/").shift() : projectConfig.defaultLang));
};
