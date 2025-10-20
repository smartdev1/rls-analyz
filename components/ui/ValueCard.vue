// ValueCard.vue

<template>
  <div
    v-motion="fadeInUp"
    class="card-modeli p-6 md:p-8 text-center hover:shadow-card transition-all duration-500 hover:-translate-y-2 group"
  >
    <!-- Icône -->
    <div class="flex justify-center mb-6">
      <div
        class="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-md"
      >
        <component
          :is="icon"
          class="w-10 h-10 text-accent"
        />
      </div>
    </div>

    <!-- Titre -->
    <h3 class="text-xl md:text-2xl font-heading font-bold text-primary mb-3">
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="text-gray-600 text-sm md:text-base leading-relaxed">
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
/* Animation au hover */
.group:hover .w-10 {
  animation: iconBounce 0.6s ease-in-out;
}

@keyframes iconBounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15) rotate(5deg);
  }
}
</style>