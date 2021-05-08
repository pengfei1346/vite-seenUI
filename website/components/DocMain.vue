<template>
  <div class="wrapper">
    <article class="prose">
      <router-view></router-view>
    </article>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 4rem;
}
  .text-gray-100 {
    color: #374151;
    max-width: 65ch;
    color: rgba(243, 244, 246, 1);
  }
</style>
