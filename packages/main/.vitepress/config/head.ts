import { readFileSync } from "fs";
import { resolve } from "path";

export const head = [
  ["script", {}, readFileSync(resolve(__dirname, "head/supported-langs.js"), "utf-8")],
  ["script", [], readFileSync(resolve(__dirname, "head/lang.js"), "utf-8")],
  // [
  //   "script",
  //   [],
  //   readFileSync(resolve(__dirname, "head/dark-mode.js"), "utf-8"),
  // ],
];
