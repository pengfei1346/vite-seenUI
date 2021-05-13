import {App} from "vue";
import Button from "@seen-ui/button";
import Input from "@seen-ui/input";
import type { InstallOptions } from '@seen-ui/utils/config'
import { setConfig } from '@seen-ui/utils/config'

const components = [
    Button,
    Input
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


const defaultInstallOpt: InstallOptions = {
    size: "default",
    zIndex: 2000,
}

const install = (app: App, opt: InstallOptions): void => {
    // , opt: InstallOptions
    // const option = Object.assign(defaultInstallOpt, opt)
    // locale(option.locale)
    // if (option.i18n) {
    //   i18n(option.i18n)
    // }
    // app.config.globalProperties.$ELEMENT = option
    // setConfig(option)

    const option = Object.assign(defaultInstallOpt, opt)

    app.config.globalProperties.$vitec = option;
    setConfig(option)

    // 遍历组件，挂载到全局
    components.forEach(component => {
        app.component(component.name, component)
    })

    // plugins.forEach(plugin => {
    //   app.use(plugin)
    // })
}

export {
    Button,
    Input
}

export default {
    install // 导出install方法。createApp({}).use() 需要install方法
}
