// StatsCounter.vue

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :enter="{ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 600, 
        delay: delay 
      } 
    }"
    class="text-center p-6"
  >
    <!-- Icône (optionnelle) -->
    <div v-if="icon" class="flex justify-center mb-4">
      <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
        <component
          :is="icon"
          class="w-8 h-8 text-accent"
        />
      </div>
    </div>

    <!-- Nombre animé -->
    <div class="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
      {{ displayValue }}{{ suffix }}
    </div>

    <!-- Label -->
    <div class="text-base md:text-lg text-gray-600 font-semibold">
      {{ label }}
    </div>

    <!-- Description optionnelle -->
    <p v-if="description" class="text-sm text-gray-500 mt-2">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import type { Component } from 'vue'

const props = defineProps<{
  value: number
  suffix?: string
  label: string
  description?: string
  icon?: Component
  delay?: number
  duration?: number
}>()

const displayValue = ref(0)

// Animation du compteur
const animateCounter = () => {
  const start = 0
  const end = props.value
  const duration = props.duration || 2000
  const stepTime = 20
  const steps = duration / stepTime
  const increment = (end - start) / steps

  let current = start
  const timer = setInterval(() => {
    current += increment
    if (current >= end) {
      displayValue.value = end
      clearInterval(timer)
    } else {
      displayValue.value = Math.floor(current)
    }
  }, stepTime)
}

// Démarrer l'animation au montage
onMounted(() => {
  // Attendre un peu pour l'effet visuel
  setTimeout(() => {
    animateCounter()
  }, props.delay || 0)
})

// Réanimer si la valeur change
watch(() => props.value, () => {
  animateCounter()
})
</script>

<style scoped>
/* Styles additionnels si nécessaires */
</style>