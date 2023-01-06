module.exports = {
  printWidth: 120, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  useTabs: false, // 缩进不使用tab，使用空格
  semi: true, // 句尾添加分号
  singleQuote: false, // 使用单引号代替双引号
  arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  htmlWhitespaceSensitivity: 'ignore',
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  trailingComma: 'es5', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
}
