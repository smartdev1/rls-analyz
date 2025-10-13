<template>
  <article
    v-motion="fadeInUp"
    class="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 ease-smooth cursor-pointer group"
  >
    <!-- Image de l'article -->
    <div class="relative overflow-hidden h-56">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      
      <!-- Badge catégorie (optionnel) -->
      <div
        v-if="category"
        class="absolute top-4 left-4 px-3 py-1 bg-accent/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full"
      >
        {{ category }}
      </div>

      <!-- Overlay au survol -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>
    </div>

    <!-- Contenu de la carte -->
    <div class="p-6">
      <!-- Date et temps de lecture -->
      <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
        <time :datetime="date" class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {{ formattedDate }}
        </time>

        <span v-if="readTime" class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {{ readTime }} min
        </span>
      </div>

      <!-- Titre de l'article -->
      <h3 class="font-heading text-xl md:text-2xl text-primary mb-3 font-semibold line-clamp-2 group-hover:text-secondary transition-colors duration-300">
        {{ title }}
      </h3>

      <!-- Extrait de l'article -->
      <p class="text-gray-600 text-sm md:text-base mb-4 line-clamp-3 leading-relaxed">
        {{ excerpt }}
      </p>

      <!-- Auteur (optionnel) -->
      <div v-if="author" class="flex items-center mb-4">
        <div
          v-if="authorAvatar"
          class="w-8 h-8 rounded-full bg-neutral overflow-hidden mr-2"
        >
          <img
            :src="authorAvatar"
            :alt="author"
            class="w-full h-full object-cover"
          />
        </div>
        <span class="text-sm text-gray-600">Par {{ author }}</span>
      </div>

      <!-- Bouton de lecture -->
      <div class="flex items-center text-secondary font-semibold text-sm group-hover:text-accent transition-colors duration-300">
        <span>Lire l'article</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { fadeInUp } from "~/utils/motionPresets"

const props = defineProps<{
  title: string
  excerpt: string
  image: string
  date: string
  category?: string
  readTime?: number
  author?: string
  authorAvatar?: string
}>()

// Formatage de la date
const formattedDate = computed(() => {
  const dateObj = new Date(props.date)
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(dateObj)
})
</script>

<style scoped>
/* Limitation du nombre de lignes */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>