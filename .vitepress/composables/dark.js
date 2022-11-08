import { useDark, useToggle } from "@vueuse/core";

export const isDark = useDark({
  storageKey: "el-theme-appearance", // todo: 检查key
});

export const toggleDark = useToggle(isDark);
