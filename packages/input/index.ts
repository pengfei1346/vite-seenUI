import { App } from "vue";
import Input from "./src/input.vue";// .vue后缀的类型声明在 vue-shim.d.ts中。定义了.vue后缀的组件的类型

Input.install = (app: App): void => {
  app.component(Input.name, Input);
};

export default Input;
