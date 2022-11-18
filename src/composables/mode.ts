import { useDark, useToggle } from "@vueuse/core";
import { themeModeStorageKey } from "../utils/constants";

export const isDark = useDark({
  storageKey: themeModeStorageKey,
});

export const toggleTheme = useToggle(isDark);
