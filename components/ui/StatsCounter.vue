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
      <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <component
          :is="icon"
          class="w-8 h-8 text-accent"
        />
      </div>
    </div>

    <!-- Nombre animé -->
    <div class="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
      <span ref="counterRef">{{ displayValue }}</span>{{ suffix }}
    </div>

    <!-- Label -->
    <div class="text-base md:text-lg text-gray-600 font-semibold">
      {{ label }}
    </div>

    <!-- Description optionnelle -->
    <p v-if="description" class="text-sm text-gray-500 mt-2 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onBeforeUnmount } from 'vue'
import type { Component } from 'vue'

const props = withDefaults(defineProps<{
  value: number
  suffix?: string
  label: string
  description?: string
  icon?: Component
  delay?: number
  duration?: number
  decimals?: number // Nombre de décimales à afficher
}>(), {
  suffix: '',
  delay: 0,
  duration: 2000,
  decimals: 0
})

const displayValue = ref(0)
const counterRef = ref<HTMLElement | null>(null)
let animationFrameId: number | null = null
let timerId: NodeJS.Timeout | null = null

// Animation du compteur avec requestAnimationFrame pour de meilleures performances
const animateCounter = () => {
  // Nettoyer les animations précédentes
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
  if (timerId !== null) {
    clearTimeout(timerId)
  }

  const start = 0
  const end = props.value
  const duration = props.duration
  const startTime = performance.now()

  const updateCounter = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Fonction d'easing (ease-out-cubic) pour une animation plus naturelle
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3)
    }

    const easedProgress = easeOutCubic(progress)
    const currentValue = start + (end - start) * easedProgress

    // Arrondir selon le nombre de décimales
    displayValue.value = Number(currentValue.toFixed(props.decimals))

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(updateCounter)
    } else {
      displayValue.value = end
      animationFrameId = null
    }
  }

  animationFrameId = requestAnimationFrame(updateCounter)
}

// Démarrer l'animation au montage avec délai
onMounted(() => {
  if (props.delay > 0) {
    timerId = setTimeout(() => {
      animateCounter()
    }, props.delay)
  } else {
    animateCounter()
  }
})

// Réanimer si la valeur change
watch(() => props.value, () => {
  animateCounter()
})

// Nettoyer les timers et animations lors de la destruction du composant
onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
  if (timerId !== null) {
    clearTimeout(timerId)
  }
})
</script>

<style scoped>
/* Animation de pulsation subtile au hover */
.group:hover .text-4xl {
  animation: pulse 0.6s ease-in-out;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
</style>