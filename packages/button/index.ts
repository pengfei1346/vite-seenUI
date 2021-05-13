import { App } from "vue";
import Button from "./src/button.vue";// .vue后缀的类型声明在 vue-shim.d.ts中。定义了.vue后缀的组件的类型

Button.install = (app: App): void => {
  app.component(Button.name, Button);
};

export default Button;
