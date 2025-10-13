<template>
  <div
    v-motion="fadeInUp"
    class="text-center mb-10"
  >
    <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary">
      {{ title }}
    </h2>
    <span
      class="block w-16 h-1 bg-accent mx-auto mt-3 rounded-full"
    ></span>
    <p
      v-if="subtitle"
      class="text-gray-600 text-base md:text-lg mt-3 max-w-2xl mx-auto"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { fadeInUp } from "../../utils/motionPresets"

defineProps<{
  title: string
  subtitle?: string
}>()
</script>
