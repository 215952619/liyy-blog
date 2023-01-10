import { defineConfig, loadConfigFromFile, mergeConfig } from "vite";
import type { UserConfig } from "vite";
import { resolve } from "path";
import Unocss from "unocss/vite";
import { presetAttributify, presetIcons, presetUno } from "unocss";
import vue from "@vitejs/plugin-vue";

export default defineConfig(async ({ mode, command }) => {
  const base = (await loadConfigFromFile({ command, mode }, resolve(__dirname, ".", "../../vite.config.ts")))
    ?.config as UserConfig;

  const config = {
    build: {
      outDir: "./lib",
      lib: {
        name: "@lyb/theme",
        entry: resolve(__dirname, "index.ts"),
        fileName: "lyb-theme",
      },
      rollupOptions: {
        external: ["vue", "vitepress"],
        output: {
          globals: {
            vue: "vue",
            vitepress: "vitepress",
            unocss: "unocss",
          },
        },
      },
    },
    plugins: [
      vue(),
      Unocss({
        presets: [presetUno(), presetAttributify(), presetIcons()],
        include: [`${__dirname}/**/*`],
        exclude: [`${__dirname}/node_modules/**/*`],
        theme: {
          colors: {
            primary: {
              DEFAULT: "#2563eb",
              deep: "#1d4ed8",
            },
          },
        },
      }),
    ],
  };

  let _out = mergeConfig(base, config);

  return _out;
});
