// HeroSection.vue

<template>
  <section class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <!-- Image de fond avec overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary">
      <img
        v-if="backgroundImage"
        :src="backgroundImage"
        :alt="title"
        class="w-full h-full object-cover opacity-20 mix-blend-overlay"
      />
    </div>

    <!-- Overlay décoratif avec motif -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(248,194,145,0.1),transparent_50%)]"></div>

    <!-- Contenu principal -->
    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Titre principal avec animation -->
      <h1
        v-motion
        :initial="{ opacity: 0, y: 60 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } }"
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6"
      >
        {{ title }}
      </h1>

      <!-- Sous-titre avec animation décalée -->
      <p
        v-if="subtitle"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } }"
        class="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
      >
        {{ subtitle }}
      </p>

      <!-- CTA Button avec animation décalée -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.6 } }"
        class="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        
      </div>
    </div>

    <!-- Indicateur de scroll animé -->
    <div
      v-if="showScrollIndicator"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 0.8, delay: 1 } }"
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 text-white/70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>

    <!-- Éléments décoratifs flottants (optionnel) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonCTA from "./ButtonCTA.vue"

defineProps<{
  title: string
  subtitle?: string
  ctaText?: string
  secondaryCtaText?: string
  backgroundImage?: string
  showArrow?: boolean
  showScrollIndicator?: boolean
}>()

defineEmits<{
  'cta-click': []
  'secondary-cta-click': []
}>()
</script>

<style scoped>
/* Animation de flottement pour les éléments décoratifs */
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-30px) translateX(-15px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
  animation-delay: 1s;
}
</style>