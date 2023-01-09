import taskLists from "markdown-it-task-lists";
import type { MarkdownOptions } from "vitepress";

export const markdown: MarkdownOptions = {
  lineNumbers: true,
  anchor: { permalink: () => false },
  config: md => {
    md.use(taskLists);
  },
};
