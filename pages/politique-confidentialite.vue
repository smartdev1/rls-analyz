<template>
  <div class="min-h-screen bg-neutral">
    <!-- Header -->
    <section class="bg-gradient-to-br from-primary to-secondary py-16">
      <div class="container-modeli text-center">
        <h1
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
        >
          {{ $t('privacy.title') }}
        </h1>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="text-lg text-white/90 max-w-3xl mx-auto"
        >
          {{ $t('privacy.subtitle') }}
        </p>
        <p class="text-sm text-white/70 mt-4">
          {{ $t('privacy.lastUpdated') }} : {{ lastUpdated }}
        </p>
      </div>
    </section>

    <!-- Contenu -->
    <section class="spacing-section">
      <div class="container-modeli">
        <div class="max-w-4xl mx-auto">
          <div class="card-modeli p-8 md:p-12 space-y-8">
            <!-- Introduction -->
            <div>
              <p class="text-gray-700 leading-relaxed">
                {{ $t('privacy.intro') }}
              </p>
            </div>

            <!-- Section 1 : Collecte des données -->
            <div>
              <h2 class="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 flex items-center gap-3">
                <span class="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                  1
                </span>
                {{ $t('privacy.section1.title') }}
              </h2>
              <p class="text-gray-700 leading-relaxed mb-4">
                {{ $t('privacy.section1.intro') }}
              </p>
              <ul class="space-y-3">
                <li
                  v-for="(item, index) in section1Items"
                  :key="index"
                  class="flex items-start gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-accent flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <strong class="text-primary">{{ $t(item.title) }}</strong>
                    <span class="text-gray-700"> : {{ $t(item.description) }}</span>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Section 2 : Utilisation des données -->
            <div>
              <h2 class="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 flex items-center gap-3">
                <span class="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                  2
                </span>
                {{ $t('privacy.section2.title') }}
              </h2>
              <p class="text-gray-700 leading-relaxed mb-4">
                {{ $t('privacy.section2.intro') }}
              </p>
              <ul class="space-y-2 list-disc list-inside text-gray-700">
                <li v-for="(item, index) in section2Items" :key="index">
                  {{ $t(item) }}
                </li>
              </ul>
            </div>

            <!-- Section 3 : Partage des données -->
            <div>
              <h2 class="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 flex items-center gap-3">
                <span class="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                  3
                </span>
                {{ $t('privacy.section3.title') }}
              </h2>
              <p class="text-gray-700 leading-relaxed mb-4">
                {{ $t('privacy.section3.intro') }}
              </p>
              <div class="bg-neutral p-6 rounded-xl">
                <ul class="space-y-2 text-gray-700">
                  <li v-for="(item, index) in section3Items" :key="index" class="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {{ $t(item) }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Section 4 : Cookies -->
            <div>
              <h2 class="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 flex items-center gap-3">
                <span class="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                  4
                </span>
                {{ $t('privacy.section4.title') }}
              </h2>
              <p class="text-gray-700 leading-relaxed mb-4">
                {{ $t('privacy.section4.intro') }}
              </p>
              <div class="space-y-4">
                <div
                  v-for="(cookie, index) in cookieTypes"
                  :key="index"
                  class="border-l-4 border-accent pl-4"
                >
                  <h4 class="font-semibold text-primary mb-2">{{ $t(cookie.title) }}</h4>
                  <p class="text-sm text-gray-600">{{ $t(cookie.description) }}</p>
                </div>
              </div>
            </div>

            <!-- Section 5 : Vos droits -->
            <div>
              <h2 class="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 flex items-center gap-3">
                <span class="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                  5
                </span>
                {{ $t('privacy.section5.title') }}
              </h2>
              <p class="text-gray-700 leading-relaxed mb-4">
                {{ $t('privacy.section5.intro') }}
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  v-for="(right, index) in userRights"
                  :key="index"
                  class="bg-neutral p-4 rounded-xl"
                >
                  <h4 class="font-semibold text-primary mb-2 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-accent"
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
                    {{ $t(right.title) }}
                  </h4>
                  <p class="text-sm text-gray-600">{{ $t(right.description) }}</p>
                </div>
              </div>
            </div>

            <!-- Section 6 : Sécurité -->
            <div>
              <h2 class="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 flex items-center gap-3">
                <span class="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                  6
                </span>
                {{ $t('privacy.section6.title') }}
              </h2>
              <p class="text-gray-700 leading-relaxed">
                {{ $t('privacy.section6.content') }}
              </p>
            </div>

            <!-- Section 7 : Conservation des données -->
            <div>
              <h2 class="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 flex items-center gap-3">
                <span class="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                  7
                </span>
                {{ $t('privacy.section7.title') }}
              </h2>
              <p class="text-gray-700 leading-relaxed">
                {{ $t('privacy.section7.content') }}
              </p>
            </div>

            <!-- Section 8 : Modifications -->
            <div>
              <h2 class="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 flex items-center gap-3">
                <span class="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                  8
                </span>
                {{ $t('privacy.section8.title') }}
              </h2>
              <p class="text-gray-700 leading-relaxed">
                {{ $t('privacy.section8.content') }}
              </p>
            </div>

            <!-- Contact -->
            <div class="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl">
              <h2 class="text-2xl font-heading font-bold text-primary mb-4">
                {{ $t('privacy.contact.title') }}
              </h2>
              <p class="text-gray-700 leading-relaxed mb-4">
                {{ $t('privacy.contact.intro') }}
              </p>
              <div class="space-y-2 text-gray-700">
                <p class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-accent"
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
                  <strong>Email :</strong>
                  <a href="mailto:privacy@modeli.fr" class="text-accent hover:underline">
                    privacy@modeli.fr
                  </a>
                </p>
                <p class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <strong>{{ $t('privacy.contact.phone') }} :</strong> +33 1 42 36 77 88
                </p>
                <p class="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    <strong>{{ $t('privacy.contact.address') }} :</strong><br />
                    123 Avenue des Champs-Élysées<br />
                    75008 Paris, France
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLangStore } from '@/store/useLangStore'

// Store
const langStore = useLangStore()

// i18n
const { t } = useI18n()

// SEO
useHead({
  title: t('privacy.meta.title'),
  meta: [
    { name: 'description', content: t('privacy.meta.description') },
    { name: 'robots', content: 'index, follow' }
  ]
})

// Date de dernière mise à jour
const lastUpdated = langStore.formatDate(new Date('2025-01-15'), { dateStyle: 'long' })

// Données structurées
const section1Items = [
  {
    title: 'privacy.section1.items.identity.title',
    description: 'privacy.section1.items.identity.description'
  },
  {
    title: 'privacy.section1.items.contact.title',
    description: 'privacy.section1.items.contact.description'
  },
  {
    title: 'privacy.section1.items.navigation.title',
    description: 'privacy.section1.items.navigation.description'
  },
  {
    title: 'privacy.section1.items.technical.title',
    description: 'privacy.section1.items.technical.description'
  }
]

const section2Items = [
  'privacy.section2.items.respond',
  'privacy.section2.items.improve',
  'privacy.section2.items.inform',
  'privacy.section2.items.analyze',
  'privacy.section2.items.comply'
]

const section3Items = [
  'privacy.section3.items.providers',
  'privacy.section3.items.legal',
  'privacy.section3.items.consent'
]

const cookieTypes = [
  {
    title: 'privacy.section4.types.essential.title',
    description: 'privacy.section4.types.essential.description'
  },
  {
    title: 'privacy.section4.types.analytics.title',
    description: 'privacy.section4.types.analytics.description'
  },
  {
    title: 'privacy.section4.types.preferences.title',
    description: 'privacy.section4.types.preferences.description'
  }
]

const userRights = [
  {
    title: 'privacy.section5.rights.access.title',
    description: 'privacy.section5.rights.access.description'
  },
  {
    title: 'privacy.section5.rights.rectification.title',
    description: 'privacy.section5.rights.rectification.description'
  },
  {
    title: 'privacy.section5.rights.deletion.title',
    description: 'privacy.section5.rights.deletion.description'
  },
  {
    title: 'privacy.section5.rights.portability.title',
    description: 'privacy.section5.rights.portability.description'
  },
  {
    title: 'privacy.section5.rights.opposition.title',
    description: 'privacy.section5.rights.opposition.description'
  },
  {
    title: 'privacy.section5.rights.limitation.title',
    description: 'privacy.section5.rights.limitation.description'
  }
]
</script>

<style scoped>
/* Styles additionnels si nécessaires */
</style>