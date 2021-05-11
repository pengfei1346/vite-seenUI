<template>
  <header
    class="header-wrapper"
  >
    <div
      class="container justify-between align-center"
    >
      <div>
        <router-link
          class="link"
          to="/"
        >
          seen-ui-vite
        </router-link>
      </div>

      <div class="flex justify-between align-center">
        <a
          class="margin-right flex items-center text-gray-500"
          href="https://github.com/pengfei1346/vite-seenUI"
        >
          <Icon icon="codicon:github" height="24" />
        </a>
        <div class="flex justify-between align-center">
          <Icon
            :icon="isDark ? 'carbon:moon' : 'carbon:sun'"
            @click="isDark = !isDark"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon, addCollection } from "@iconify/vue";
import { isDark } from "../store";
import codicon from "@iconify/json/json/codicon.json";
import carbon from "@iconify/json/json/carbon.json";

addCollection(codicon);
addCollection(carbon);
export default defineComponent({
  components: {
    // Add Icon to list of used components
    Icon,
  },
  setup() {
    return {
      isDark,
    };
  },
});
</script>

<style scoped lang="scss">
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E5E7EB;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
    height: 4rem;
    //border-color: rgba(107, 114, 128, 1);

    .link {
      color: #333;
      font-weight: bold;
      font-size: 22px;
    }

    .container {
      width: 100%;
      height: 100%;
      position: relative;
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
      display: flex;
      align-items: center;

    }
  }

  .text-gray-500 {
    color: rgba(107, 114, 128, 1);
  }
  .margin-right {
    margin-right: 20px;
  }
</style>
