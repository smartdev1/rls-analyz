<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <!-- Mission -->
    <div
      v-motion
      :initial="{ opacity: 0, x: -50 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
      class="card-modeli p-8 relative overflow-hidden group hover:shadow-card transition-all duration-500"
    >
      <!-- Icône décorative en arrière-plan -->
      <div class="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-48 w-48 text-accent"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      </div>

      <!-- Contenu Mission -->
      <div class="relative z-10">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 class="text-2xl md:text-3xl font-heading font-bold text-primary">
            {{ missionTitle }}
          </h3>
        </div>

        <p class="text-gray-700 leading-relaxed text-base md:text-lg">
          {{ mission }}
        </p>
      </div>
    </div>

    <!-- Vision -->
    <div
      v-motion
      :initial="{ opacity: 0, x: 50 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
      class="card-modeli p-8 relative overflow-hidden group hover:shadow-card transition-all duration-500"
    >
      <!-- Icône décorative en arrière-plan -->
      <div class="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-48 w-48 text-accent"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      </div>

      <!-- Contenu Vision -->
      <div class="relative z-10">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <h3 class="text-2xl md:text-3xl font-heading font-bold text-primary">
            {{ visionTitle }}
          </h3>
        </div>

        <p class="text-gray-700 leading-relaxed text-base md:text-lg">
          {{ vision }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  missionTitle: string
  mission: string
  visionTitle: string
  vision: string
}>()
</script>

<style scoped>
/* Styles additionnels si nécessaires */
</style>