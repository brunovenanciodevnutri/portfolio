<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from "vue";
import { Mail, Linkedin, Github, Upload } from "lucide-vue-next";
import profileImage from '@/assets/images/selfie_1_black_compress.png';

const AboutSection = defineAsyncComponent(() => import('@/components/sections/AboutSection.vue'));
const SkillsSection = defineAsyncComponent(() => import('@/components/sections/SkillsSection.vue'));
const ExperienceSection = defineAsyncComponent(() => import('@/components/sections/ExperienceSection.vue'));
const ProjectsSection = defineAsyncComponent(() => import('@/components/sections/ProjectsSection.vue'));
const ContactSection = defineAsyncComponent(() => import('@/components/sections/ContactSection.vue'));

const displayedText = ref("");
const showCursor = ref(true);
const fullText = "Bruno Venâncio\nFront-End Developer";
const typingSpeed = 80;

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  let currentIndex = 0;
  
  const typeCharacter = () => {
    if (currentIndex < fullText.length) {
      displayedText.value += fullText[currentIndex];
      currentIndex++;
      setTimeout(typeCharacter, typingSpeed);
    } else {
      setTimeout(() => {
        showCursor.value = false;
      }, 500);
    }
  };
  
  typeCharacter();
});
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <section
      id="home"
      class="relative py-12 lg:py-24 pt-20 md:pt-28 flex items-center justify-center overflow-hidden"
    >
      <div
        class="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      ></div>
      <div
        class="absolute top-1/4 right-20 w-80 h-80 bg-blue-700/8 rounded-full blur-3xl pointer-events-none"
      ></div>
      <div
        class="absolute bottom-32 left-1/4 w-72 h-72 bg-blue-400/6 rounded-full blur-3xl pointer-events-none"
      ></div>
      <div
        class="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-800/7 rounded-full blur-3xl pointer-events-none"
      ></div>
      <div
        class="absolute bottom-20 right-16 w-56 h-56 bg-blue-300/5 rounded-full blur-3xl pointer-events-none"
      ></div>

      <div
        class="fixed right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-700/0 via-blue-700 to-blue-700/0"
      ></div>

      <div class="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12 animate-fade-in-up">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <div class="order-2 lg:order-1">
            <h1
              class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight max-w-full min-h-[7rem] sm:min-h-[8.5rem] lg:min-h-[11.5rem]"
            >
              <span v-if="displayedText.includes('\n')">
                {{ displayedText.split('\n')[0] }}<br />
                <span class="gradient-text lg:whitespace-nowrap text-4xl sm:text-6xl lg:text-7xl">
                  {{ displayedText.split('\n')[1] }}<span v-if="showCursor" class="typing-cursor">|</span>
                </span>
              </span>
              <span v-else class="lg:whitespace-nowrap">
                {{ displayedText }}<span v-if="showCursor" class="typing-cursor">|</span>
              </span>
            </h1>

            <p
              class="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
            >
              Desenvolvedor de Software com atuação em aplicações web utilizadas em
              ambiente financeiro. Forte atuação em frontend com
              <strong class="text-white">Vue.js</strong>,
              <strong class="text-white">JavaScript</strong> e
              <strong class="text-white">TypeScript</strong>, com experiência no
              desenvolvimento de dashboards, backoffices e sistemas críticos.
            </p>

            <div class="flex flex-wrap gap-4 mb-16">
              <VBtn
                size="large"
                color="blue"
                variant="flat"
                class="flex items-center justify-center gap-3 px-8 py-6 bg-blue-500/5 border-2 border-blue-500/40 rounded-lg text-white text-lg font-semibold shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all hover:-translate-y-1 hover:bg-blue-500/10 hover:border-blue-500/50 hover:shadow-[0_15px_40px_rgba(59,130,246,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                href="/CURRÍCULO SOFTWARE DEVELOPER _ BRUNO VENÂNCIO SANTOS DE JESUS.pdf"
                download="Bruno_Venancio_CV.pdf"
                target="_blank"
              >
                Download CV
                <Upload class="w-5 h-5 ml-2" />
              </VBtn>

              <VBtn
                size="large"
                variant="outlined"
                color="white"
                class="px-8 py-6 text-base font-medium flex items-center"
                @click="scrollToSection('contact')"
              >
                Entrar em Contato
              </VBtn>
            </div>

            <div class="flex items-center gap-6">
              <a
                href="https://linkedin.com/in/brunovenanciodevnutri"
                target="_blank"
                class="text-gray-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin class="w-6 h-6" />
              </a>
              <a
                href="https://github.com/brunovenanciodevnutri"
                target="_blank"
                class="text-gray-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github class="w-6 h-6" />
              </a>
              <a
                href="mailto:brunovenanciodevnutri@gmail.com"
                class="text-gray-500 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail class="w-6 h-6" />
              </a>
            </div>
          </div>

          <div class="flex justify-center -mt-10 md:mt-0 lg:justify-end order-1 lg:order-2">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full blur opacity-75 transition duration-300"></div>
              <div class="relative">
                <img
                  :src="profileImage"
                  alt="Bruno Venâncio"
                  fetchpriority="high"
                  class="relative w-40 h-40 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-blue-500/40 shadow-[0_10px_40px_rgba(59,130,246,0.4)] transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Suspense>
      <AboutSection />
    </Suspense>

    <Suspense>
      <SkillsSection />
    </Suspense>

    <Suspense>
      <ExperienceSection />
    </Suspense>

    <Suspense>
      <ProjectsSection />
    </Suspense>

    <Suspense>
      <ContactSection />
    </Suspense>
  </div>
</template>
