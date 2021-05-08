<template>
  <aside
    class="left-siderbar"
  >
    <nav
      class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-16 bg-white"
    >
      <div
        class="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:pt-8 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)"
        v-for="subMenu in menuConfig"
      >
        <h2
          class="mb-3 lg:mb-2 uppercase font-bold lg:text-xs text-gray-700 dark:text-gray-300"
        >
          {{ subMenu.name }}
        </h2>
        <ul>
          <li class="mb-3 lg:mb-1" v-for="menu in subMenu.children">
            <router-link
              class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block text-gray-500 font-medium"
              :class="{
                'hover:translate-x-2px': $route.name !== menu.name,
                'hover:text-gray-900': $route.name !== menu.name,
                'dark:hover:text-gray-100': $route.name !== menu.name,
              }"
              :to="`/doc/${menu.path}`"
            >
              <span
                class="relative font-normal"
                :class="{ 'font-bold': $route.name === menu.name }"
                >{{ menu.name }}</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script lang="ts">
import { menuConfig } from "../router/demo-routes";
export default {
  setup() {
    return {
      menuConfig,
    };
  },
};
</script>

<style scoped lang="scss">
aside {
  width: 100%;
  height: 100%;
  z-index: 90;
  border-bottom-width: 1px;
  margin-bottom: -4rem;
  padding-top: 4rem;





}
  .left-siderbar {

  }
</style>
