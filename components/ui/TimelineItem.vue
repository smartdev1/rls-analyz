// TimelineItem.vue

<template>
  <div class="relative flex gap-6 group">
    <!-- Timeline vertical line -->
    <div class="flex flex-col items-center">
      <!-- Point -->
      <div
        class="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10"
      >
        <span class="text-white font-bold text-sm">{{ year }}</span>
      </div>
      
      <!-- Ligne verticale (sauf pour le dernier élément) -->
      <div
        v-if="!isLast"
        class="w-0.5 flex-1 bg-gradient-to-b from-accent to-accent/20 mt-2"
      ></div>
    </div>

    <!-- Contenu -->
    <div class="flex-1 pb-12">
      <div
        v-motion
        :initial="{ opacity: 0, x: 30 }"
        :enter="{ 
          opacity: 1, 
          x: 0, 
          transition: { 
            duration: 600, 
            delay: delay 
          } 
        }"
        class="card-modeli p-6 hover:shadow-card transition-all duration-300"
      >
        <!-- Titre -->
        <h4 class="text-xl font-heading font-bold text-primary mb-2">
          {{ title }}
        </h4>

        <!-- Description -->
        <p class="text-gray-700 leading-relaxed text-sm md:text-base">
          {{ description }}
        </p>

        <!-- Tags optionnels -->
        <div v-if="tags && tags.length > 0" class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  year: string
  title: string
  description: string
  tags?: string[]
  isLast?: boolean
  delay?: number
}>()
</script>

<style scoped>
/* Styles additionnels si nécessaires */
</style>