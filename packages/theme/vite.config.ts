import { defineConfig, loadConfigFromFile, mergeConfig } from "vite";
import { resolve } from "path";
import Unocss from "unocss/vite";
import { presetAttributify, presetIcons, presetUno } from "unocss";

export default defineConfig(async ({ mode, command }) => {
  const base = (await loadConfigFromFile({ command, mode }, resolve(__dirname, ".", "../../vite.config.ts"))).config;

  const config = {
    plugins: [
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

  const _result = mergeConfig(base, config);
  return _result;
});
