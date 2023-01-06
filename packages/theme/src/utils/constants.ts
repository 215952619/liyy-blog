export const themeModeStorageKey = "__lyb__theme_mode";

import { getProjectConfig } from "@lyb/main";

export const projectConfig = (() => getProjectConfig())();
