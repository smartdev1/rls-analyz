// ButtonCTA.vue

<template>
  <button
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }"
    class="px-6 py-3 rounded-2xl font-semibold text-white bg-primary hover:bg-secondary
           transition-all duration-500 ease-in-out shadow-md hover:shadow-lg focus:ring-2
           focus:ring-accent focus:outline-none"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped>

button:active {
  transform: scale(0.97);
}
</style>
