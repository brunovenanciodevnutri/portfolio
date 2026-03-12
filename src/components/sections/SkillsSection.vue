<script setup lang="ts">
import { ref } from "vue";

const skills = ref([
  { name: "Vue.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Axios", category: "Frontend" },
  { name: "Vitest", category: "Testing" },
  { name: "Testing Library", category: "Testing" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "NPM", category: "Tools" },
  { name: "Postman", category: "Tools" },
]);
</script>

<template>
  <section
    id="skills"
    class="relative py-16 lg:py-32 px-4 sm:px-8 lg:px-12 border-t border-white/5 overflow-hidden"
  >
    <div
      class="absolute top-20 left-1/4 w-96 h-96 bg-blue-800/7 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-40 right-1/3 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Technical <span class="gradient-text">Skills</span>
      </h2>

      <div
        class="h-1 w-20 bg-gradient-to-r from-blue-700 to-blue-600 mb-12"
      ></div>

      <div class="flex flex-wrap gap-3">
        <span
          v-for="skill in skills"
          :key="skill.name"
          class="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-700/30 rounded-full text-sm text-gray-300 hover:text-white transition-all cursor-default"
        >
          {{ skill.name }}
        </span>
      </div>
    </div>
  </section>
</template>
