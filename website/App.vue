<template>
  <div>
    <doc-header />

    <main class="main">
      <div class="flex align-start">

        <!-- sidebar -->
        <doc-siderbar class="siderbar"/>

        <!-- content -->
        <div class="content flex">
          <router-view />
        </div>

      </div>
    </main>
  </div>
</template>

<script lang="ts">
import DocHeader from "./components/DocHeader.vue";
import DocSiderbar from "./components/DocSiderbar.vue";

export default {
  name: "App",
  components: { DocHeader, DocSiderbar },
};
</script>

<style scoped lang="scss">
  .main {
    width: 100%;
    max-width: 1280px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-left: auto;
    margin-right: auto;

    .siderbar {
      flex: 1;
    }

    .content {
      flex: 3;
      width: 100%;
      min-height: 100vh;
    }
  }
</style>
