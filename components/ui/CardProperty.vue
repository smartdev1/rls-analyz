// CardProperty.vue
<template>
  <div
    v-motion="fadeInUp"
    class="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 ease-smooth cursor-pointer"
  >
    <!-- Image du bien -->
    <div class="relative overflow-hidden group">
      <img
        :src="image"
        :alt="title"
        class="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <!-- Overlay subtile au survol -->
      <div
        class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>
    </div>

    <!-- Contenu de la carte -->
    <div class="p-5">
      <h3 class="font-heading text-lg md:text-xl text-primary mb-1">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-sm mb-2">
        {{ location }}
      </p>
      <p class="text-secondary font-semibold text-base md:text-lg mb-4">
        {{ price }}
      </p>

      <ButtonCTA class="w-full">
        Voir le bien
      </ButtonCTA>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fadeInUp } from "../../utils/motionPresets"
import ButtonCTA from "../../components/ui/ButtonCTA.vue"

defineProps<{
  title: string
  image: string
  location: string
  price: string
}>()
</script>
