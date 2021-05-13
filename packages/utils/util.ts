import {getCurrentInstance} from "vue";

export function useGlobalConfig() {
    const vm: any = getCurrentInstance()
    if ('$SEEN' in vm.proxy) {
        return vm.proxy.$SEEN
    }
    return {}
}