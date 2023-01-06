import { defineConfig, defineConfigWithTheme } from "vitepress";
console.log("fasf", defineConfig);

import { head, markdown, nav, sidebars } from "./config/index.js";
import { langs, repoPath } from "../project.config.json";

export default defineConfigWithTheme({
  title: "liyy Blog",
  description: "Just playing around",
  lastUpdated: true,
  head,
  outDir: "../dist",

  markdown,

  themeConfig: {
    langs,
    nav,
    sidebars,

    editLinks: true,
    editLinkText: "Edit this page on GitHub",

    socialLinks: [
      {
        key: "github",
        link: repoPath,
      },
    ],
  },
});
