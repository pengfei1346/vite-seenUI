import { getCurrentInstance } from "vue";
import { ViteCreateOptions } from "./common";

export function useGlobalConfig(name = "$vitec"): ViteCreateOptions {
  const vm: any = getCurrentInstance();
  if (name in vm.proxy) {
    return vm.proxy[name];
  }
  return {};
}
