<template>
  <div class="min-h-screen bg-neutral">
    <!-- HERO -->
    <section class="bg-gradient-to-br from-primary via-primary/95 to-accent py-20 md:py-32">
      <div class="container-modeli">
        <div v-motion :initial="{ opacity: 0, y: -30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="text-center text-white">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6" style="color: white;">
            {{ t('expertise.hero.title') }}
          </h1>
          <p class="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            {{ t('expertise.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- MODELI - OUTIL PROPRIÉTAIRE -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container-modeli">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Texte -->
          <div v-motion :initial="{ opacity: 0, x: -50 }" :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }">
            <div class="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
              <span class="text-accent font-semibold text-sm">{{ t('expertise.modeli.badge') }}</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              {{ t('expertise.modeli.title') }}
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              {{ t('expertise.modeli.description') }}
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{ t('expertise.modeli.features.f1') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{ t('expertise.modeli.features.f2') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{ t('expertise.modeli.features.f3') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{ t('expertise.modeli.features.f4') }}</span>
              </li>
            </ul>
          </div>

          <!-- Image/Illustration -->
          <div v-motion :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }" class="relative">
            <div class="card-modeli p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <div class="aspect-video bg-white rounded-lg shadow-md flex items-center justify-center">
                <svg class="w-24 h-24 text-accent/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p class="text-center text-sm text-gray-500 mt-4">
                {{ t('expertise.modeli.illustration') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ÉCOSYSTÈME LOGICIEL -->
    <section class="py-16 md:py-24">
      <div class="container-modeli">
        <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            {{ t('expertise.ecosystem.title') }}
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ t('expertise.ecosystem.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- ARGUS Enterprise -->
          <div v-motion :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 0 } }"
            class="card-modeli p-8 text-center hover:shadow-card transition-all duration-300 group">
            <div
              class="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-primary mb-3">
              {{ t('expertise.ecosystem.cards.argus.title') }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ t('expertise.ecosystem.cards.argus.text') }}
            </p>
          </div>

          <!-- Power BI -->
          <div v-motion :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
            class="card-modeli p-8 text-center hover:shadow-card transition-all duration-300 group">
            <div
              class="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-primary mb-3">
              {{ t('expertise.ecosystem.cards.powerbi.title') }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ t('expertise.ecosystem.cards.powerbi.text') }}
            </p>
          </div>

          <!-- Excel Avancé -->
          <div v-motion :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
            class="card-modeli p-8 text-center hover:shadow-card transition-all duration-300 group">
            <div
              class="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-primary mb-3">
              {{ t('expertise.ecosystem.cards.excel.title') }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ t('expertise.ecosystem.cards.excel.text') }}
            </p>
          </div>

          <!-- Gestion de Projet -->
          <div v-motion :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
            class="card-modeli p-8 text-center hover:shadow-card transition-all duration-300 group">
            <div
              class="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-primary mb-3">
              {{ t('expertise.ecosystem.cards.project.title') }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ t('expertise.ecosystem.cards.project.text') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- DOMAINES D'INTERVENTION -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container-modeli">
        <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            {{ t('expertise.domains.title') }}
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ t('expertise.domains.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Types d'Actifs -->
          <div v-motion :initial="{ opacity: 0, x: -50 }" :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
            class="card-modeli p-8">
            <h3 class="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
              <svg class="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {{ t('expertise.domains.assets.title') }}
            </h3>
            <ul class="space-y-4">
              <li v-for="(asset, index) in assets" :key="index" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-gray-700">{{ asset }}</span>
              </li>
            </ul>
          </div>

          <!-- Secteurs et Clients -->
          <div v-motion :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }" class="card-modeli p-8">
            <h3 class="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
              <svg class="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {{ t('expertise.domains.clients.title') }}
            </h3>
            <ul class="space-y-4">
              <li v-for="(client, index) in clients" :key="index" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-gray-700">{{ client }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- MÉTHODOLOGIE -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div class="container-modeli">
        <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            {{ t('expertise.methodology.title') }}
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto">
            {{ t('expertise.methodology.subtitle') }}
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          
          <TimelineItem 
            v-for="(step, index) in methodology" 
            :key="index" 
            :year="(index + 1).toString()"
            :title="step.title" 
            :description="step.description" 
            :isLast="index === methodology.length - 1"
            :delay="index * 150" 
          />
        </div>
      </div>
    </section>

    <!-- NORMES INTERNATIONALES -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container-modeli">
        <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            {{ t('expertise.norme.title') }}
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ t('expertise.norme.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PartnerLogo 
            v-for="(standard, index) in standards" 
            :key="index" 
            :name="standard.name"
            :description="standard.description" 
            :delay="index * 100" 
          />
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-primary to-accent">
      <div class="container-modeli text-center">
        <div v-motion :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            {{ t('expertise.last.title') }}
          </h2>
          <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {{ t('expertise.last.subtitle') }}
          </p>
          <NuxtLink to="/contact"
            class="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            {{ t('expertise.last.quote') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TimelineItem from '~/components/ui/TimelineItem.vue'
import PartnerLogo from '~/components/ui/PartnerLogo.vue'
const { t } = useI18n()
const localePath = useLocalePath()

// Méta-données
useHead({
  title: 'Notre Expertise Technologique | RLS ANALYZ',
  meta: [
    {
      name: 'description',
      content: 'Découvrez nos outils propriétaires (MODELI), notre écosystème logiciel (ARGUS, Power BI) et notre méthodologie pour l\'analyse immobilière institutionnelle.',
    },
  ],
})

// Données
const assets = [
  t('expertise.domains.assets.a1'),
  t('expertise.domains.assets.a2'),
  t('expertise.domains.assets.a3'),
  t('expertise.domains.assets.a4'),
  t('expertise.domains.assets.a5'),
]

const clients = [
  t('expertise.domains.clients.c1'),
  t('expertise.domains.clients.c2'),
  t('expertise.domains.clients.c3'),
  t('expertise.domains.clients.c4'),
  t('expertise.domains.clients.c5'),
]

const methodology = [
  {
    title: t('expertise.methodology.timeline.step1.title'),
    description: t('expertise.methodology.timeline.step1.description'),
  },
  {
    title: t('expertise.methodology.timeline.step2.title'),
    description: t('expertise.methodology.timeline.step2.description'),
  },
  {
    title: t('expertise.methodology.timeline.step3.title'),
    description: t('expertise.methodology.timeline.step3.description'),
  },
  {
    title: t('expertise.methodology.timeline.step4.title'),
    description: t('expertise.methodology.timeline.step4.description'),
  },
  {
    title: t('expertise.methodology.timeline.step5.title'),
    description: t('expertise.methodology.timeline.step5.description'),
  },
]

const standards = [
  {
    name: 'RICS',
    description: t('expertise.norme.rics'),
  },
  {
    name: 'IVS',
    description: t('expertise.norme.ivs'),
  },
  {
    name: 'OHADA',
    description: t('expertise.norme.ohada'),
  },
]
</script>

<style scoped>
/* Styles additionnels si nécessaires */
</style>