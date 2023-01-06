import { defineConfig, loadConfigFromFile, mergeConfig, loadEnv } from "vite";
import type { UserConfig } from "vite";
import { resolve } from "path";

export default defineConfig(async ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = (await loadConfigFromFile({ command, mode }, resolve(__dirname, ".", "../../vite.config.ts")))
    ?.config as UserConfig;

  const config = {
    server: {
      host: true,
      https: !!env.HTTPS,
      fs: {
        allow: ["."],
      },
    },
  };

  return mergeConfig(base, config);
});
