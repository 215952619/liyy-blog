export const sideNote = () => {
  return {
    "zh-cn": [
      {
        text: "overflow",
        link: "/zh-cn/note/start.md",
      },
      {
        text: "读书笔记",
        collapsibel: true,
        children: [
          {
            text: "http 缓存",
            link: "/zh-cn/note/http缓存",
          },
          {
            text: "script异步加载",
            link: "/zh-cn/note/script标签",
          },
        ],
      },
      {
        text: "代码实现",
        collapsibel: true,
        children: [
          {
            text: "promise",
            link: "/zh-cn/note/myPromise",
          },
          {
            text: "Windows批处理文件获取管理员权限",
            link: "/zh-cn/note/bash获取管理员权限",
          },
        ],
      },
    ],
  };
};

export const sidebars = {
  "/note/": sideNote(),
};
