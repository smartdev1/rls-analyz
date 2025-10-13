<template>
  <div
    :class="[
      'flex items-center justify-center',
      fullscreen ? 'fixed inset-0 bg-white/80 backdrop-blur-sm z-50' : ''
    ]"
  >
    <div class="text-center">
      <!-- Loader animé -->
      <div
        v-if="variant === 'spinner'"
        :class="[
          'inline-block border-4 border-t-accent border-r-accent border-b-accent/30 border-l-accent/30 rounded-full animate-spin',
          sizeClasses
        ]"
      ></div>

      <!-- Loader à points -->
      <div
        v-else-if="variant === 'dots'"
        class="flex items-center justify-center space-x-2"
      >
        <div
          v-for="i in 3"
          :key="i"
          :class="[
            'bg-accent rounded-full animate-bounce',
            dotSizeClasses
          ]"
          :style="{ animationDelay: `${i * 0.15}s` }"
        ></div>
      </div>

      <!-- Loader à barres -->
      <div
        v-else-if="variant === 'bars'"
        class="flex items-end justify-center space-x-1.5"
      >
        <div
          v-for="i in 4"
          :key="i"
          :class="[
            'bg-accent rounded-sm animate-pulse',
            barSizeClasses
          ]"
          :style="{ 
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1s'
          }"
        ></div>
      </div>

      <!-- Loader cercle progressif -->
      <div
        v-else-if="variant === 'circle'"
        class="relative inline-flex items-center justify-center"
      >
        <svg
          :class="sizeClasses"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Cercle de fond -->
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#F5F6FA"
            stroke-width="8"
          />
          <!-- Cercle animé -->
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#F8C291"
            stroke-width="8"
            stroke-linecap="round"
            class="animate-circle-progress"
            pathLength="100"
          />
        </svg>
      </div>

      <!-- Loader logo MODELI -->
      <div
        v-else-if="variant === 'logo'"
        class="relative"
      >
        <div class="inline-block">
          <svg
            :class="sizeClasses"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Icône Building simplifiée -->
            <rect
              x="30"
              y="20"
              width="40"
              height="60"
              rx="4"
              fill="#0A3D62"
              class="animate-pulse"
            />
            <rect x="38" y="30" width="8" height="8" rx="1" fill="#F8C291" />
            <rect x="54" y="30" width="8" height="8" rx="1" fill="#F8C291" />
            <rect x="38" y="44" width="8" height="8" rx="1" fill="#F8C291" />
            <rect x="54" y="44" width="8" height="8" rx="1" fill="#F8C291" />
            <rect x="38" y="58" width="8" height="8" rx="1" fill="#F8C291" />
            <rect x="54" y="58" width="8" height="8" rx="1" fill="#F8C291" />
          </svg>
        </div>
      </div>

      <!-- Message de chargement -->
      <p
        v-if="message"
        class="mt-4 text-sm md:text-base text-text/70 font-body animate-pulse"
      >
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    variant?: 'spinner' | 'dots' | 'bars' | 'circle' | 'logo'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    message?: string
    fullscreen?: boolean
  }>(),
  {
    variant: 'spinner',
    size: 'md',
    fullscreen: false
  }
)

// Classes de taille pour le spinner et circle
const sizeClasses = computed(() => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }
  return sizes[props.size]
})

// Classes de taille pour les dots
const dotSizeClasses = computed(() => {
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
    xl: 'w-6 h-6'
  }
  return sizes[props.size]
})

// Classes de taille pour les barres
const barSizeClasses = computed(() => {
  const sizes = {
    sm: 'w-1.5 h-8',
    md: 'w-2 h-12',
    lg: 'w-3 h-16',
    xl: 'w-4 h-24'
  }
  return sizes[props.size]
})
</script>

<style scoped>
/* Animation du spinner */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Animation du cercle progressif */
@keyframes circle-progress {
  0% {
    stroke-dasharray: 0 100;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 70 100;
    stroke-dashoffset: -15;
  }
  100% {
    stroke-dasharray: 0 100;
    stroke-dashoffset: -100;
  }
}

.animate-circle-progress {
  animation: circle-progress 1.5s ease-in-out infinite;
  transform-origin: center;
}

/* Amélioration de l'animation bounce pour les dots */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100%);
  }
}

.animate-bounce {
  animation: bounce 0.8s ease-in-out infinite;
}

/* Animation pulse personnalisée */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(0.95);
  }
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}
</style>