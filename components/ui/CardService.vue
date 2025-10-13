// CardService.vue

<template>
  <div
    v-motion="fadeInUp"
    class="bg-white rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-500 ease-smooth transform hover:-translate-y-2 cursor-pointer group"
  >
    <!-- Icône du service -->
    <div class="flex justify-center mb-6">
      <div
        class="w-16 h-16 rounded-full bg-neutral flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-500"
      >
        <component
          :is="icon"
          class="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-500"
        />
      </div>
    </div>

    <!-- Titre du service -->
    <h3 class="font-heading text-xl md:text-2xl text-primary text-center mb-4 font-semibold">
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="text-gray-600 text-sm md:text-base text-center leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { fadeInUp } from "~/utils/motionPresets"
import type { Component } from "vue"

defineProps<{
  title: string
  description: string
  icon: Component
}>()
</script>

<style scoped>
/* Animation supplémentaire sur l'icône au survol */
.group:hover .w-8 {
  animation: iconPulse 0.6s ease-in-out;
}

@keyframes iconPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>