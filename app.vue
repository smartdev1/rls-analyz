<template>
  <div class="min-h-screen flex flex-col">
    <!-- Barre de navigation -->
    <Navbar />

    <!-- Contenu principal -->
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <!-- Pied de page -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Importez vos composants de layout
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
</script>

<style>
@import "./assets/css/main.css";
body {
  font-family: 'Open Sans', sans-serif;
}
</style>
