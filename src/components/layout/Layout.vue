<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-x-hidden max-w-full">
    <Header />

    <main class="flex-1">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
main {
  padding-top: 80px;
}
</style>
