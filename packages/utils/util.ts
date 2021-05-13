import {getCurrentInstance} from "vue";

export function useGlobalConfig() {
    const vm: any = getCurrentInstance()
    if ('$vitec' in vm.proxy) {
        return vm.proxy.$vitec
    }
    return {}
}