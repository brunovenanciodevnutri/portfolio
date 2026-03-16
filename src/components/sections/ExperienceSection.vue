<script setup lang="ts">
import { ref } from "vue";

const experiences = ref([
  {
    role: "Desenvolvedor de Software",
    company: "del.tech",
    period: "Outubro 2025 - Atualmente",
    description:
      "Desenvolvimento e manutenção de aplicações web em ambiente financeiro (fintech). Responsável pelo desenvolvimento completo do front-end de sistemas financeiros, com destaque para o sistema de risco sacado (antecipação de recebíveis), reconhecido pela organização, clareza visual e qualidade da interface. Contribuição ativa na padronização de componentes, organização do código e automatização de testes unitários utilizando Vitest e Testing Library.",
    technologies: [
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "Axios",
      "Vitest",
      "Testing Library",
      "TailwindCSS",
      "Vuetify",
    ],
  },
  {
    role: "Estagiário de Desenvolvimento Web",
    company: "del.tech",
    period: "Maio 2025 - Outubro 2025",
    description:
      "Desenvolvimento e contribuição na manutenção de sistemas financeiros críticos, realizando ajustes em fluxos existentes e apoio na resolução de problemas em produção. Atuação na criação de landing pages para novos produtos da empresa e desenvolvimento do front-end de sistemas internos de autoatendimento (self checkout), integrando as interfaces às APIs backend.",
    technologies: [
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "Axios",
      "React",
      "TailwindCSS",
      "Vuetify",
    ],
  },
]);
</script>

<template>
  <section
    id="experience"
    class="relative py-16 lg:py-32 px-4 sm:px-8 lg:px-12 border-t border-white/5 overflow-hidden"
  >
    <div
      class="absolute top-32 right-16 w-72 h-72 bg-blue-500/6 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-24 left-1/4 w-80 h-80 bg-blue-800/7 rounded-full blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Work <span class="gradient-text">Experience</span>
      </h2>

      <div
        class="h-1 w-20 bg-gradient-to-r from-blue-700 to-blue-600 mb-16"
      ></div>

      <div class="space-y-12">
        <article
          v-for="exp in experiences"
          :key="`${exp.company}-${exp.role}-${exp.period}`"
          class="border-l-2 border-blue-700/20 pl-8 hover:border-blue-700 transition-colors"
        >
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3"
          >
            <h3 class="text-2xl font-bold">{{ exp.role }}</h3>
            <time class="text-sm text-gray-500">{{ exp.period }}</time>
          </div>

          <p class="text-lg text-blue-600 mb-4">{{ exp.company }}</p>

          <p class="text-gray-400 leading-relaxed mb-4">
            {{ exp.description }}
          </p>

          <ul class="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
            <li
              v-for="tech in exp.technologies"
              :key="tech"
              class="px-3 py-1 bg-blue-700/10 border border-blue-700/20 rounded-lg text-xs text-blue-400"
            >
              {{ tech }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
