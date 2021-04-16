declare module "*.vue" {
  import { defineComponent, App } from 'vue';
  const component: ReturnType<typeof defineComponent> & { install(app: App): void }
  export default component;
}

declare module "*.md" {
  import { ComponentOptions } from "vue";
  const comp: ComponentOptions;
  export default comp;
}
