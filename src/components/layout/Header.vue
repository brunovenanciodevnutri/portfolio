<script setup lang="ts">
import { ref } from 'vue';
import { Menu, X } from 'lucide-vue-next';

const mobileMenuOpen = ref(false);

const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' }
];

const scrollToSection = (href: string) => {
  const sectionId = href.replace('#', '');
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    mobileMenuOpen.value = false;
  }
};
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/5">
    <nav class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-20" aria-label="Menu principal">
      <div class="flex justify-between items-center h-full">
        <a 
          href="#home" 
          @click.prevent="scrollToSection('#home')"
          class="text-xl font-bold tracking-tight hover:text-blue-600 transition-colors"
        >
          <span class="text-blue-700 mr-1 inline-block dev-bounce">Dev</span>
          <span class="text-white"> Bruno</span>
          <span class="text-white"> Venâncio</span>
        </a>

        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            @click.prevent="scrollToSection(item.href)"
            class="text-sm text-gray-400 hover:text-white transition-colors"
          >
            {{ item.label }}
          </a>
        </div>

        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Abrir menu"
        >
          <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="mobileMenuOpen"
          class="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/5 py-4 px-4"
        >
          <div class="flex flex-col gap-2">
            <a
              v-for="item in navItems"
              :key="item.href"
              :href="item.href"
              @click.prevent="scrollToSection(item.href)"
              class="px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<style scoped>
header ~ main {
  padding-top: 80px;
}

.dev-bounce {
  animation: devBounce 2s ease-in-out infinite;
  transform-origin: center;
}

@keyframes devBounce {
  0%, 100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  10% {
    transform: translateY(-8px) rotate(-5deg) scale(1.1);
  }
  20% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  30% {
    transform: translateY(-4px) rotate(3deg) scale(1.05);
  }
  40% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
}
</style>
