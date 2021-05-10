<template>
  <aside>
    <nav>
      <div
        class="container"
        v-for="subMenu in menuConfig"
      >
        <h2>
          {{ subMenu.name }}
        </h2>
        <ul>
          <li v-for="menu in subMenu.children">
            <router-link
              class="li-item"
              :class="{
                'hover:translate-x-2px': $route.name !== menu.name,
                'hover:text-gray-900': $route.name !== menu.name,
                'dark:hover:text-gray-100': $route.name !== menu.name,
              }"
              :to="`/doc/${menu.path}`"
            >
              <span
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
  padding-top: 40px;

  nav {
    height: 100%;
    overflow-y: auto;
    background: #fff;

    .container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 1.5rem;
      overflow-y: auto;
      font-size: 1rem;
      line-height: 1.5rem;

      h2 {
        margin-bottom: 0.75rem;
        text-transform: uppercase;
        font-weight: 700;
        color: rgba(55, 65, 81, 1);

      }

      ul > li {
        margin-bottom: 0.75rem;

        .li-item {
          padding: 0.25rem 0.5rem;
          transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 200ms;
          position: relative;
          display: block;
          color: rgba(107, 114, 128, 1);
          font-weight: 500;

          span {
            position: relative;
            font-weight: 400;
          }
        }
      }
    }
  }
}

</style>
