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
    class="card-modeli overflow-hidden group hover:shadow-card transition-all duration-500 hover:-translate-y-2"
  >
    <!-- Image du membre -->
    <div class="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
      <div class="aspect-square relative">
        <!-- Image si disponible -->
        <img
          v-if="image && !imageError"
          :src="image"
          :alt="name"
          @error="handleImageError"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <!-- Placeholder si pas d'image -->
        <div
          v-else
          class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20"
        >
          <svg
            class="w-24 h-24 text-primary/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </div>

      <!-- Overlay gradient au hover -->
      <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    <!-- Contenu -->
    <div class="p-6">
      <!-- Nom -->
      <h3 class="text-xl md:text-2xl font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
        {{ name }}
      </h3>

      <!-- Rôle -->
      <p class="text-accent font-semibold text-sm md:text-base mb-4">
        {{ role }}
      </p>

      <!-- Bio -->
      <p class="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
        {{ bio }}
      </p>

      <!-- Réseaux sociaux / Actions -->
      <div class="flex items-center gap-4">
        <!-- LinkedIn -->
        <a
          v-if="linkedin"
          :href="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center group/link transition-colors duration-300"
          aria-label="Profil LinkedIn"
        >
          <svg
            class="w-5 h-5 text-primary group-hover/link:text-white transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>

        <!-- Email (optionnel) -->
        <a
          v-if="email"
          :href="`mailto:${email}`"
          class="w-10 h-10 bg-accent/10 hover:bg-accent rounded-full flex items-center justify-center group/link transition-colors duration-300"
          aria-label="Envoyer un email"
        >
          <svg
            class="w-5 h-5 text-accent group-hover/link:text-white transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>

        <!-- Twitter/X (optionnel) -->
        <a
          v-if="twitter"
          :href="twitter"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 bg-gray-100 hover:bg-gray-800 rounded-full flex items-center justify-center group/link transition-colors duration-300"
          aria-label="Profil Twitter"
        >
          <svg
            class="w-5 h-5 text-gray-600 group-hover/link:text-white transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Badge spécial (optionnel) -->
    <div
      v-if="badge"
      class="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full shadow-lg"
    >
      {{ badge }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  name: string
  role: string
  bio: string
  image?: string
  linkedin?: string
  email?: string
  twitter?: string
  badge?: string // Ex: "CEO", "Fondateur", "Expert"
  delay?: number
}>(), {
  image: '',
  linkedin: '',
  email: '',
  twitter: '',
  badge: '',
  delay: 0
})

// Gestion de l'erreur de chargement d'image
const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}
</script>

<style scoped>
/* Animation au hover sur le nom */
h3 {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animation subtile sur les icônes sociales */
.group\/link svg {
  transition: all 0.3s ease-in-out;
}

.group\/link:hover svg {
  transform: scale(1.1);
}

/* Effet de brillance sur l'image au hover */
.group:hover img {
  filter: brightness(1.05);
}
</style>