import { useDark, useToggle } from "@vueuse/core";
import { themeModeStorageKey } from "../utils/constants";

const isDark = useDark({
  storageKey: themeModeStorageKey,
});

const toggleTheme = useToggle(isDark);

export { toggleTheme, isDark };
