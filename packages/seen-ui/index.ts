import { App } from "vue";
import Button from "@seen-ui/button";
import { ViteCreateOptions } from "@seen-ui/utils";

const components = [
  Button,
  // Icon,
  // ButtonGroup,
  // Col,
  // Row,
  // Checkbox,
  // CheckboxGroup,
  // Transfer
];

// const plugins = [
//   Message
// ];

const install = (app: App): void => {
  // 遍历组件，挂载到全局
  components.forEach(component => {
    app.component(component.name, component);
  })
  // 注册插件
  // plugins.forEach(plugin => {
  //   app.use(plugin as any);
  // })
}

// export default {
//   install // 导出install方法。createApp({}).use() 需要install方法
// }

export default (app: App, options: ViteCreateOptions): void => {
  const optionsResolver: ViteCreateOptions = Object.assign(
    {
      componentSize: "default",
    },
    options
  );

  app.config.globalProperties.$vitec = optionsResolver;

  app.component(`s-button`, Button);
};
