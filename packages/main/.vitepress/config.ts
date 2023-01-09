import { defineConfig, defineConfigWithTheme } from "vitepress";

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
