import { computed } from "vue";
import { useRoute } from "vitepress";
import { defaultLang } from "~/constant";

export const useLang = () => {
  const route = useRoute();
  return computed(() => {
    const path = route.data?.relativePath;
    let lang = defaultLang;

    if (path.includes("/")) {
      lang = path.split("/").shift();
    }

    return lang;
  });
};
