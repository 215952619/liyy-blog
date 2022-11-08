import "uno.css";
import "element-plus/theme-chalk/dark/css-vars.css";
// import "vitepress/dist/client/theme-default/styles/components/vp-doc.css";
import "./style.scss";
import VPNotFound from "~/components/NotFound.vue";
import VPApp from "~/components/App.vue";

export default {
  NotFound: VPNotFound,
  Layout: VPApp,
};
