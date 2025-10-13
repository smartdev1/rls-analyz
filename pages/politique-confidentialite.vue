<!-- pages/politique-confidentialite.vue -->
<template>
  <div>
    <h1>{{ $t('privacy.title') }}</h1>
    <p>{{ $t('privacy.content') }}</p>
  </div>
</template>

<script setup>
useHead({
  title: 'Politique de Confidentialité | MODELI',
});
</script>
