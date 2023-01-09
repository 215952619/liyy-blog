import { defineConfig, loadConfigFromFile, mergeConfig, loadEnv } from "vite";
import type { UserConfig } from "vite";
import { resolve } from "path";
import Unocss from "unocss/vite";
import { presetAttributify, presetIcons, presetUno } from "unocss";

export default defineConfig(async ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = (await loadConfigFromFile({ command, mode }, resolve(__dirname, ".", "../../vite.config.ts")))
    ?.config as UserConfig;

  const config = {
    server: {
      port: 5000,
      host: true,
      https: !!env.HTTPS,
      fs: {
        allow: ["."],
      },
    },
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

  console.log("base", base);
  console.log("config", config);

  let _out = mergeConfig(base, config);
  console.log("_out", _out);

  return _out;
});
