<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import Layout from "@/components/layout/Layout.vue";

const Toaster = defineAsyncComponent(async () => {
  const { Toaster } = await import("vue-sonner");
  await import("vue-sonner/style.css");
  return Toaster;
});
</script>

<template>
  <Suspense>
    <Toaster position="top-right" richColors />
  </Suspense>
  <Layout />
</template>