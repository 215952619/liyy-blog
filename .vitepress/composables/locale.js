import { computed } from "vue";
import { useLang } from "./lang";

export const useLocale = (localeJson) => {
  const lang = useLang();
  return computed(() => localeJson[lang.value]);
};
