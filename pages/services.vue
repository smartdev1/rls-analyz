<template>
  <div class="min-h-screen bg-neutral">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary via-primary/95 to-secondary py-20 overflow-hidden">
      <!-- Motif décoratif -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 right-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div class="relative container-modeli text-center">
        <h1
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
        >
          {{ $t('services.hero.title') }}
        </h1>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
        >
          {{ $t('services.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Services principaux -->
    <section class="spacing-section">
      <div class="container-modeli">
        <SectionTitle
          :title="$t('services.main.title')"
          :subtitle="$t('services.main.subtitle')"
        />

        <div class="space-y-16">
          <!-- Service 1 : Étude de marché -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
            class="card-modeli overflow-hidden"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <!-- Image -->
              <div class="relative h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="Étude de marché"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>

              <!-- Contenu -->
              <div class="p-8 lg:p-12">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-3xl font-heading font-bold text-primary">
                    {{ $t('services.market.title') }}
                  </h3>
                </div>

                <p class="text-gray-700 leading-relaxed mb-6">
                  {{ $t('services.market.description') }}
                </p>

                <!-- Points clés -->
                <ul class="space-y-3 mb-8">
                  <li
                    v-for="(point, index) in marketStudyPoints"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span class="text-gray-700">{{ $t(point) }}</span>
                  </li>
                </ul>

                <ButtonCTA @click="openContactModal('market')">
                  {{ $t('services.market.cta') }}
                </ButtonCTA>
              </div>
            </div>
          </div>

          <!-- Service 2 : Analyse sectorielle -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
            class="card-modeli overflow-hidden"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <!-- Contenu (à gauche sur desktop) -->
              <div class="p-8 lg:p-12 order-2 lg:order-1">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 class="text-3xl font-heading font-bold text-primary">
                    {{ $t('services.analysis.title') }}
                  </h3>
                </div>

                <p class="text-gray-700 leading-relaxed mb-6">
                  {{ $t('services.analysis.description') }}
                </p>

                <!-- Points clés -->
                <ul class="space-y-3 mb-8">
                  <li
                    v-for="(point, index) in sectorAnalysisPoints"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span class="text-gray-700">{{ $t(point) }}</span>
                  </li>
                </ul>

                <ButtonCTA @click="openContactModal('analysis')">
                  {{ $t('services.analysis.cta') }}
                </ButtonCTA>
              </div>

              <!-- Image (à droite sur desktop) -->
              <div class="relative h-64 lg:h-auto order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                  alt="Analyse sectorielle"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-l from-primary/50 to-transparent"></div>
              </div>
            </div>
          </div>

          <!-- Service 3 : Conseil en investissement -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
            class="card-modeli overflow-hidden"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <!-- Image -->
              <div class="relative h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                  alt="Conseil en investissement"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>

              <!-- Contenu -->
              <div class="p-8 lg:p-12">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-accent"
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
                  </div>
                  <h3 class="text-3xl font-heading font-bold text-primary">
                    {{ $t('services.investment.title') }}
                  </h3>
                </div>

                <p class="text-gray-700 leading-relaxed mb-6">
                  {{ $t('services.investment.description') }}
                </p>

                <!-- Points clés -->
                <ul class="space-y-3 mb-8">
                  <li
                    v-for="(point, index) in investmentPoints"
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span class="text-gray-700">{{ $t(point) }}</span>
                  </li>
                </ul>

                <ButtonCTA @click="openContactModal('investment')">
                  {{ $t('services.investment.cta') }}
                </ButtonCTA>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Processus de travail -->
    <section class="spacing-section bg-white">
      <div class="container-modeli">
        <SectionTitle
          :title="$t('services.process.title')"
          :subtitle="$t('services.process.subtitle')"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in processSteps"
            :key="index"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ 
              opacity: 1, 
              scale: 1, 
              transition: { 
                duration: 500, 
                delay: index * 100,
                ease: 'easeOut' 
              } 
            }"
            class="relative text-center"
          >
            <!-- Numéro -->
            <div class="relative inline-flex items-center justify-center w-20 h-20 mb-6">
              <div class="absolute inset-0 bg-accent/20 rounded-full"></div>
              <div class="absolute inset-2 bg-accent rounded-full flex items-center justify-center">
                <span class="text-2xl font-bold text-primary">{{ index + 1 }}</span>
              </div>
            </div>

            <!-- Titre -->
            <h4 class="text-xl font-heading font-bold text-primary mb-3">
              {{ $t(step.title) }}
            </h4>

            <!-- Description -->
            <p class="text-gray-600 leading-relaxed">
              {{ $t(step.description) }}
            </p>

            <!-- Flèche de connexion (sauf pour le dernier) -->
            <div
              v-if="index < processSteps.length - 1"
              class="hidden lg:block absolute top-10 left-full w-full"
            >
              <svg
                class="w-full h-auto text-accent/30"
                viewBox="0 0 100 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10 L90 10 L85 5 M90 10 L85 15"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Témoignages -->
    <section class="spacing-section bg-neutral">
      <div class="container-modeli">
        <SectionTitle
          :title="$t('services.testimonials.title')"
          :subtitle="$t('services.testimonials.subtitle')"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 600, 
                delay: index * 150 
              } 
            }"
            class="card-modeli p-8 relative"
          >
            <!-- Quote icon -->
            <svg
              class="w-12 h-12 text-accent/20 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <!-- Texte -->
            <p class="text-gray-700 leading-relaxed mb-6 italic">
              "{{ $t(testimonial.text) }}"
            </p>

            <!-- Auteur -->
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center font-bold text-primary">
                {{ testimonial.initials }}
              </div>
              <div>
                <p class="font-semibold text-primary">{{ testimonial.name }}</p>
                <p class="text-sm text-gray-600">{{ $t(testimonial.position) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="relative py-20 bg-gradient-to-br from-primary to-secondary overflow-hidden">
      <!-- Image de fond -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&h=600&fit=crop"
          alt="Contact"
          class="w-full h-full object-cover opacity-20"
        />
      </div>

      <div class="relative container-modeli text-center">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-3xl md:text-4xl font-heading font-bold text-white mb-6"
        >
          {{ $t('services.cta.title') }}
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="text-lg text-white/90 mb-10 max-w-2xl mx-auto"
        >
          {{ $t('services.cta.subtitle') }}
        </p>
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 400 } }"
          class="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <ButtonCTA
            class="bg-accent hover:bg-accent/90 text-primary text-lg px-8 py-4"
            @click="navigateTo(localePath({name: 'contact'}))"
          >
            {{ $t('services.cta.contact') }}
          </ButtonCTA>
          <button
            @click="navigateTo(localePath({name: 'biens'}))"
            class="px-8 py-4 rounded-2xl font-semibold text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-500"
          >
            {{ $t('services.cta.properties') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ButtonCTA from '@/components/ui/ButtonCTA.vue'
import { useUIStore } from '@/store/useUIStore'

// Store
const uiStore = useUIStore()

// i18n
const { t } = useI18n()
const localePath = useLocalePath()

// SEO
useHead({
  title: t('services.meta.title'),
  meta: [
    { name: 'description', content: t('services.meta.description') },
    { property: 'og:title', content: t('services.meta.title') },
    { property: 'og:description', content: t('services.meta.description') }
  ]
})

// Points clés des services
const marketStudyPoints = [
  'services.market.points.market',
  'services.market.points.trends',
  'services.market.points.opportunities',
  'services.market.points.report'
]

const sectorAnalysisPoints = [
  'services.analysis.points.sector',
  'services.analysis.points.competition',
  'services.analysis.points.positioning',
  'services.analysis.points.strategy'
]

const investmentPoints = [
  'services.investment.points.assessment',
  'services.investment.points.opportunities',
  'services.investment.points.financing',
  'services.investment.points.monitoring'
]

// Étapes du processus
const processSteps = [
  {
    title: 'services.process.steps.contact.title',
    description: 'services.process.steps.contact.description'
  },
  {
    title: 'services.process.steps.analysis.title',
    description: 'services.process.steps.analysis.description'
  },
  {
    title: 'services.process.steps.proposal.title',
    description: 'services.process.steps.proposal.description'
  },
  {
    title: 'services.process.steps.support.title',
    description: 'services.process.steps.support.description'
  }
]

// Témoignages
const testimonials = [
  {
    text: 'services.testimonials.items.first.text',
    name: 'Marie Dubois',
    position: 'services.testimonials.items.first.position',
    initials: 'MD'
  },
  {
    text: 'services.testimonials.items.second.text',
    name: 'Pierre Martin',
    position: 'services.testimonials.items.second.position',
    initials: 'PM'
  },
  {
    text: 'services.testimonials.items.third.text',
    name: 'Sophie Laurent',
    position: 'services.testimonials.items.third.position',
    initials: 'SL'
  }
]

// Ouvrir le modal de contact avec un sujet pré-rempli
const openContactModal = (service: string) => {
  // Rediriger vers la page contact avec le sujet pré-rempli
  navigateTo({
    path: localePath({name: 'contact'}),
    query: { subject: service }
  })
}
</script>

<style scoped>
/* Styles additionnels si nécessaires */
</style>