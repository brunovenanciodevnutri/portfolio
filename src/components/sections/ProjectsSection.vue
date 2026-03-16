<script setup lang="ts">
import { ref } from "vue";
import { ArrowRight } from "lucide-vue-next";

const projects = ref([
  {
    title: "MiniFast",
    description:
      "Sistema de cardápio online para foodparks, onde é possível reservar/comprar pedidos e retirar no estabelecimento. Plataforma tipo ifood sem entregas, facilitando a compra e dando mais visibilidade aos estabelecimentos e às promoções.",
    technologies: ["Vue.js", "TypeScript", "TailwindCSS", "Vuetify"],
    link: "#",
  },
  {
    title: "Sistema de Risco Sacado",
    description:
      "Responsável e desenvolvedor líder do front-end deste sistema financeiro para antecipação de recebíveis na del.tech. Projeto reconhecido internamente pela organização, clareza visual e qualidade da interface.",
    technologies: [
      "Vue.js",
      "TypeScript",
      "Vitest",
      "Testing Library",
      "Vuetify",
    ],
    link: "#",
  },
  {
    title: "Landing Pages & Self Checkout",
    description:
      "Desenvolvimento de landing pages para novos produtos e sistemas internos de autoatendimento com integração às APIs backend.",
    technologies: ["JavaScript", "HTML5", "TailwindCSS"],
    link: "#",
  },
]);
</script>

<template>
  <section
    id="projects"
    class="relative py-16 lg:py-32 px-4 sm:px-8 lg:px-12 border-t border-white/5 overflow-hidden"
  >
    <div
      class="absolute top-20 left-16 w-96 h-96 bg-blue-700/8 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-32 right-20 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Featured <span class="gradient-text">Projects</span>
      </h2>

      <div
        class="h-1 w-20 bg-gradient-to-r from-blue-700 to-blue-600 mb-16"
      ></div>

      <div class="grid gap-8">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group bg-white/5 border border-white/10 hover:border-blue-700/30 rounded-2xl p-8 card-hover transition-all"
        >
          <h3
            class="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors"
          >
            {{ project.title }}
          </h3>
          <p class="text-gray-400 mb-6 leading-relaxed">
            {{ project.description }}
          </p>

          <ul class="flex flex-wrap gap-2 mb-6" aria-label="Tecnologias do projeto">
            <li
              v-for="tech in project.technologies"
              :key="tech"
              class="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400"
            >
              {{ tech }}
            </li>
          </ul>

          <a
            :href="project.link"
            class="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors"
          >
            <span class="text-sm font-medium">Ver Projeto</span>
            <ArrowRight
              class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
