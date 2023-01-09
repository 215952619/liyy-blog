import { readFileSync } from "fs";
import { resolve } from "path";
import type { HeadConfig } from "vitepress";

export const head: HeadConfig[] = [
  ["script", {}, readFileSync(resolve(__dirname, "head/supported-langs.js"), "utf-8")],
  ["script", {}, readFileSync(resolve(__dirname, "head/lang.js"), "utf-8")],
  // [
  //   "script",
  //   {},
  //   readFileSync(resolve(__dirname, "head/dark-mode.js"), "utf-8"),
  // ],
];
