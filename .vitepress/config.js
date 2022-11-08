// import { RepoBranch, RepoPath } from "./constant.js";
import { head, markdown, nav, sidebars } from "./config/index.js";
import { langs, defaultLang, repoPath } from "../project.config.json";

module.exports = {
  title: "liyy Blog",
  description: "Just playing around",
  lastUpdated: true,
  head,
  outDir: "../dist",

  markdown,

  themeConfig: {
    // repo: RepoPath,
    // docsBranch: RepoBranch,
    // docsDir: "docs",
    langs,
    nav,
    sidebars,

    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    // lastUpdated: "Last Updated",

    socialLinks: [
      {
        key: "github",
        link: repoPath,
      },
    ],

    // footer: {
    //   message: "Released under the MIT License.",
    //   copyright: "Copyright © 2019-present Liyy",
    // },
  },
};
