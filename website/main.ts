import { createApp } from "vue";
import App from "./App.vue";

// 引入路由
import router from "./router";

// 暂时还没用到 使用时再引入
// import store from "./store";

// dev mode 引入seen-ui
import ui from "seen-ui";
// import 'seen-ui/theme-chalk/src/index.scss';
import '@seen-ui/theme-chalk/src/index.scss';
// import '../packages/theme-chalk/src/index.scss'

import "./style/main.css";

createApp(App)
  .use(ui, {
    // componentSize: "large"
  })
  .use(router)
  // .use(store)
  .mount("#app");
