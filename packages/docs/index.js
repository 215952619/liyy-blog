export const nav = [
  {
    text: "随手记",
    link: "/note/start",
    activeMatch: "/note/",
  },
  {
    text: "专题",
    link: "/library/start",
    activeMatch: "/library/",
  },
  {
    text: "实验室",
    link: "/playground/start",
    activeMatch: "/playground/",
  },
];

export const sidebars = [
  {
    text: "读书笔记",
    children: [
      {
        text: "http 缓存",
        link: "/note/http缓存",
      },
      {
        text: "script异步加载",
        link: "/note/script标签",
      },
    ],
  },
  {
    text: "代码实现",
    children: [
      {
        text: "promise",
        link: "/note/myPromise",
      },
      {
        text: "Windows批处理文件获取管理员权限",
        link: "/note/bash获取管理员权限",
      },
    ],
  },
];
