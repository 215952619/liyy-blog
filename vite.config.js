import path from "path";
import { defineConfig, loadEnv } from "vite";
import Component from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import Unocss from "unocss/vite";

const alias = [
  {
    find: "@/",
    replacement: `${path.resolve(__dirname, "examples")}/`,
  },
  {
    find: "~/",
    replacement: `${path.resolve(__dirname, ".vitepress")}/`,
  },
  {
    find: "i18n/",
    replacement: `${path.resolve(__dirname, "./i18n/")}/`,
  },
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: true,
      https: !!env.HTTPS,
      fs: {
        allow: ["."],
      },
    },
    resolve: {
      alias,
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Component({
        dirs: [".vitepress/components", "examples/components", "example/pages"],
        allowOverrides: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [ElementPlusResolver()],
      }),
      Unocss(),
    ],
  };
});
