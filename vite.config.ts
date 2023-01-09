import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
import Component from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Component({
      dirs: ["src/components"],
      allowOverrides: true,
      include: [/\.vue$/],
      resolvers: [ElementPlusResolver()],
    }),
    // vue(),
  ],
});
