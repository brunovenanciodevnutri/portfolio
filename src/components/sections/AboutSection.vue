<template>
  <section
    id="about"
    class="relative py-16 lg:py-32 px-4 sm:px-8 lg:px-12 border-t border-white/5 overflow-hidden"
  >
    <div
      class="absolute top-40 right-10 w-80 h-80 bg-blue-500/6 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-20 left-20 w-72 h-72 bg-blue-700/5 rounded-full blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        About <span class="gradient-text">me</span>
      </h2>

      <div
        class="h-1 w-20 bg-gradient-to-r from-blue-700 to-blue-600 mb-12"
      ></div>

      <div class="grid md:grid-cols-2 gap-16">
        <div class="space-y-6">
          <p class="text-lg text-gray-400 leading-relaxed">
            Desenvolvedor de Software com atuação em aplicações web utilizadas
            em ambiente financeiro, trabalhando em sistemas internos e
            produtos voltados ao cliente final.
          </p>
          <p class="text-lg text-gray-400 leading-relaxed">
            Forte experiência em frontend com Vue.js, JavaScript e TypeScript,
            no desenvolvimento de dashboards, backoffices e sistemas
            financeiros críticos. Experiência em integração com APIs REST,
            desenvolvimento de interfaces responsivas e arquitetura baseada em
            componentes.
          </p>

          <div class="pt-6 space-y-4">
            <div class="flex items-center gap-4">
              <div class="w-2 h-2 bg-blue-700 rounded-full"></div>
              <span class="text-white font-medium"
                >Desenvolvimento Frontend</span
              >
            </div>
            <div class="flex items-center gap-4">
              <div class="w-2 h-2 bg-blue-700 rounded-full"></div>
              <span class="text-white font-medium"
                >Integração com APIs REST</span
              >
            </div>
            <div class="flex items-center gap-4">
              <div class="w-2 h-2 bg-blue-700 rounded-full"></div>
              <span class="text-white font-medium"
                >Arquitetura de Componentes</span
              >
            </div>
            <div class="flex items-center gap-4">
              <div class="w-2 h-2 bg-blue-700 rounded-full"></div>
              <span class="text-white font-medium">Testes Unitários</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 h-fit">
          <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div class="text-4xl font-bold text-blue-600 mb-2">1+</div>
            <div class="text-sm text-gray-400">Ano de<br />Experiência</div>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div class="text-4xl font-bold text-blue-600 mb-2">3+</div>
            <div class="text-sm text-gray-400">Projetos<br />Concluídos</div>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div class="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div class="text-sm text-gray-400">
              Tecnologias<br />Dominadas
            </div>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div class="text-4xl font-bold text-blue-600 mb-2">B1</div>
            <div class="text-sm text-gray-400">Inglês<br />Intermediário</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
