<script setup lang="ts">
import { Mail, Linkedin, Github } from 'lucide-vue-next';

const currentYear = new Date().getFullYear();

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/brunovenanciodevnutri', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/brunovenanciodevnutri', label: 'GitHub' },
  { icon: Mail, href: 'mailto:brunovenanciodevnutri@gmail.com', label: 'Email' }
];

const quickLinks = [
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
  }
};
</script>

<template>
  <footer class="relative bg-black border-t border-white/5">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        <div class="space-y-4 md:col-span-5 lg:col-span-4">
          <div>
            <span class="text-2xl font-bold">Bruno <span class="gradient-text">Venâncio</span></span>
          </div>
          <p class="text-gray-400 leading-relaxed">
            Front-End Developer especializado em Vue.js, JavaScript e TypeScript, trabalhando com aplicações financeiras.
          </p>
        </div>

        <div class="md:col-span-7 lg:col-span-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 md:justify-items-end">
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Navegação</h3>
              <ul class="space-y-3">
                <li v-for="link in quickLinks" :key="link.href">
                  <a
                    :href="link.href"
                    @click.prevent="scrollToSection(link.href)"
                    class="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {{ link.label }}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Contato</h3>
              <ul class="space-y-3">
                <li>
                  <a href="mailto:brunovenanciodevnutri@gmail.com" class="text-gray-400 hover:text-white transition-colors text-sm block">
                    brunovenanciodevnutri@gmail.com
                  </a>
                </li>
              </ul>

              <div class="flex gap-4 mt-6">
                <a
                  v-for="social in socialLinks"
                  :key="social.label"
                  :href="social.href"
                  target="_blank"
                  :aria-label="social.label"
                  class="text-gray-500 hover:text-white transition-colors"
                >
                  <component :is="social.icon" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-white/5">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {{ currentYear }} Bruno Venâncio. Todos os direitos reservados.</p>
          <p>Desenvolvido com Vue 3 Composition & Tailwind CSS</p>
        </div>
      </div>
    </div>
  </footer>
</template>