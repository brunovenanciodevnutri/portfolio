<script setup lang="ts">
import { Mail, Linkedin } from "lucide-vue-next";
</script>

<template>
  <section
    id="contact"
    class="relative py-16 lg:py-32 px-4 sm:px-8 lg:px-12 border-t border-white/5 overflow-hidden"
  >
    <div
      class="absolute top-40 left-1/3 w-80 h-80 bg-blue-500/7 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-20 right-24 w-72 h-72 bg-blue-800/6 rounded-full blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Get In <span class="gradient-text">Touch</span>
      </h2>

      <div
        class="h-1 w-20 bg-gradient-to-r from-blue-700 to-blue-600 mb-12"
      ></div>

      <p class="text-xl text-gray-400 mb-12 max-w-2xl">
        Vamos trabalhar juntos! Entre em contato para discutir seu próximo
        projeto ou oportunidade.
      </p>

      <address class="grid sm:grid-cols-2 gap-8 mb-12 not-italic">
        <div class="flex items-start gap-4">
          <div
            class="w-12 h-12 bg-blue-700/10 border border-blue-700/20 rounded-xl flex items-center justify-center flex-shrink-0"
          >
            <Mail class="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 class="font-semibold mb-1">Email</h3>
            <a
              href="mailto:brunovenanciodevnutri@gmail.com"
              class="text-gray-400 hover:text-blue-600 transition-colors"
            >
              brunovenanciodevnutri@gmail.com
            </a>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div
            class="w-12 h-12 bg-blue-700/10 border border-blue-700/20 rounded-xl flex items-center justify-center flex-shrink-0"
          >
            <Linkedin class="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 class="font-semibold mb-1">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/brunovenanciodevnutri"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-blue-600 transition-colors"
            >
              /in/brunovenanciodevnutri
            </a>
          </div>
        </div>
      </address>
    </div>
  </section>
</template>
