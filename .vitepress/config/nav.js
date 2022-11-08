export const navDefault = () => {
  return [
    {
      text: "随手记",
      link: "/docs/note/start",
      activeMatch: "/note/",
    },
    {
      text: "专题",
      link: "/docs/library/start",
      activeMatch: "/library/",
    },
    {
      text: "实验室",
      link: "/docs/playground/start",
      activeMatch: "/playground/",
    },
  ];
};

export const nav = {
  "zh-cn": navDefault(),
};
