const { cpSync, existsSync, mkdirSync, rmSync, watch } = require("fs");
const { resolve } = require("path");

const {
  defaultLang,
  langs,
  docDir: _docDir,
} = require("../../project.config.json");

const rootDir = resolve(__dirname, "../..");
const docDir = resolve(rootDir, _docDir);
// 特制防抖
const debounce = (fn, time) => {
  let timer = {};
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, time);
  };
};

const watchDocs = () => {
  watch(
    docDir,
    { recursive: true },
    debounce((eventType, filename) => {
      console.log(filename, " is ", eventType);
    }, 500)
  );
};

watchDocs();
