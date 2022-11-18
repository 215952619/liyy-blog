const { resolve } = require("path");
const { cpSync, existsSync, mkdirSync, rmSync } = require("fs");

const defaultLang = "zh-cn";
const rootDir = resolve(__dirname, "../..");
const docDir = resolve(rootDir, "docs");

const langList = ["zh-cn", "en-us"]; // TODO: 自动获取
(langList.length > 0 ? langList : [defaultLang]).map((lang) => {
  const outPutDir = resolve(rootDir, lang);
  if (existsSync(outPutDir)) {
    console.log("clear dir ", outPutDir);
    rmSync(outPutDir, { recursive: true, force: true });
  }
  console.log("create dir ", outPutDir);
  mkdirSync(outPutDir, { recursive: true });
  console.log("copy docs to new dir ", outPutDir);
  cpSync(docDir, outPutDir, { recursive: true });
});
