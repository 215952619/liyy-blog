import { computed } from "vue";
import { useRoute } from "vitepress";
import { defaultLang } from "../../project.config.json";

export const useLang = () => {
  const route = useRoute();
  const path: string = route?.data?.relativePath ?? "";

  return computed(() =>
    path.includes("/") ? path.split("/").shift() : defaultLang
  );
};
