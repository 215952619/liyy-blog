import { computed } from "vue";
import { useRoute, useRouter } from "vitepress";
import { useStorage } from "@vueuse/core";
import { PREFERRED_LANG_KEY } from "~/constant";

import langs from "i18n/lang.json";
import { useLang } from "~/composables/lang";

export const useTranslation = () => {
  const route = useRoute();
  const router = useRouter();
  const lang = useLang();

  const languageMap = {
    "en-us": "English",
    "zh-cn": "中文",
    "es-es": "Español",
    "fr-fr": "Français",
    "ja-jp": "日本語",
  };

  const langsRef = computed(() => {
    const langsCopy = langs.slice(0);
    langsCopy.splice(langsCopy.indexOf(lang.value), 1);
    return langs.slice(0);
  });

  const language = useStorage(PREFERRED_LANG_KEY, "zh-cn");

  const switchLang = (targetLang) => {
    if (lang.value === targetLang) return;
    language.value = targetLang;
    const firstSlash = route.path.indexOf("/", 1);
    const goTo = `/${targetLang}/${route.path.slice(firstSlash + 1)}`;
    router.go(goTo);
  };

  return {
    languageMap,
    langs: langsRef,
    lang,
    switchLang,
  };
};
