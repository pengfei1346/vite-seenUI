import { ComponentOptions } from "vue";

import introDoc from "../../README.md";
import buttonDoc from "../../packages/components/button/README.md";
import themeDoc from "../../packages/theme-chalk/README.md";
import utilsDoc from "../../packages/utils/README.md";

declare type Menu = {
  name: string;
  component: ComponentOptions;
  path: string;
  meta?: any;
};
declare type SubMenu = {
  name: string;
  meta?: any;
  children: Array<Menu>;
};

const menuConfig: Array<SubMenu> = [
  {
    name: "快速开始",
    children: [
      {
        name: "introduction",
        component: introDoc,
        path: "intro",
      },
      {
        name: "Theme",
        component: themeDoc,
        path: "theme",
      },
      {
        name: "utils",
        component: utilsDoc,
        path: "utils",
      },
    ],
  },
  {
    name: "组件",
    children: [
      {
        name: "button",
        component: buttonDoc,
        meta: { requiresAuth: true },
        path: "button",
      },
    ],
  },
];

export { menuConfig };

export default menuConfig
  .reduce((prev: Array<Menu>, current: SubMenu): Array<Menu> => {
    return [...prev, ...current.children];
  }, [])
  .map((demo: Menu) => {
    const path: string = demo.path;
    const name: string = demo.name;
    return {
      path: `${path?.toLowerCase()}`,
      name,
      component: demo.component,
    };
  });
