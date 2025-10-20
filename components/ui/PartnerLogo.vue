// PartenerLogo.vue

<template>
  <div
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 500, 
        delay: delay 
      } 
    }"
    class="card-modeli p-6 flex items-center justify-center hover:shadow-card transition-all duration-300 group cursor-pointer h-32"
    :class="{ 'bg-neutral': !highlighted }"
  >
    <!-- Logo image -->
    <img
      v-if="logo"
      :src="logo"
      :alt="name"
      class="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
    />

    <!-- Fallback texte si pas d'image -->
    <div v-else class="text-center">
      <h4 class="text-lg font-heading font-bold text-primary group-hover:text-accent transition-colors">
        {{ name }}
      </h4>
      <p v-if="description" class="text-xs text-gray-500 mt-1">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  logo?: string
  description?: string
  highlighted?: boolean
  delay?: number
}>()
</script>

<style scoped>
/* Styles additionnels si nécessaires */
</style>