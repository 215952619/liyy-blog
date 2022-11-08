import { watch } from "vue";

import { isClient } from "@vueuse/core";

export const useToggleWidgets = (watchSource, handler) => {
  if (!isClient) return;

  watch(
    () => watchSource.value,
    (val) => {
      if (val) {
        window.addEventListener("resize", handler);
      } else {
        window.removeEventListener("resize", handler);
      }
    }
  );
};
