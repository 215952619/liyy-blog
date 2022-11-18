const { cpSync, existsSync, mkdirSync, rmSync } = require("fs");
const { resolve } = require("path");

const {
  defaultLang,
  langs,
  docDir: _docDir,
} = require("../../project.config.json");

const rootDir = resolve(__dirname, "../..");
const docDir = resolve(rootDir, _docDir);

const generateDocs = () => {
  if ((langs?.length || 0) === 0) {
    langs = [defaultLang];
  }
  console.log("docs list ", langs.join(", "));

  langs.map((lang) => {
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
};

generateDocs();
