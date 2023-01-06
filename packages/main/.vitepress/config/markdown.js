import taskLists from "markdown-it-task-lists";

export const markdown = {
  lineNumbers: true,
  anchor: { permalink: false },
  config: md => {
    md.use(taskLists);
  },
};
