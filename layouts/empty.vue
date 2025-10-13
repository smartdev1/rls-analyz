<template>
  <div class="min-h-screen">
    <!-- Juste le contenu de la page, sans Navbar ni Footer -->
    <slot />

    <!-- Loader global (optionnel même dans empty) -->
    <Loader
      v-if="uiStore.globalLoading"
      :message="uiStore.loadingMessage"
      variant="logo"
      size="xl"
      fullscreen
    />
  </div>
</template>

<script setup lang="ts">
import { useUIStore } from '@/store/useUIStore'
import Loader from '@/components/ui/Loader.vue'

const uiStore = useUIStore()
</script>

<style scoped>
/* Styles spécifiques pour le layout empty si nécessaire */
</style>