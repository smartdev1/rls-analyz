<template>
  <div>
    <!-- Hero Section -->
    <HeroSection :title="$t('hero.title')" :subtitle="$t('hero.subtitle')" :cta-text="$t('hero.cta')"
      background-image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
      :show-arrow="true" :show-scroll-indicator="true" @cta-click="navigateTo(localePath({ name: 'biens' }))" />

    <!-- Section Nos Biens d'Exception -->
    <!-- Section Mission + Expertise -->
<section class="spacing-section bg-neutral">
  <div class="container-modeli">
    <!-- Titre principal -->
    <SectionTitle
      :title="$t('home.mission.title')"
      :subtitle="$t('home.mission.subtitle')"
    />

    <!-- Bloc Mission -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
      <!-- Texte -->
      <div v-motion :initial="{ opacity: 0, x: -40 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }">
        <h3 class="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">
          {{ $t('home.mission.heading') }}
        </h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          {{ $t('home.mission.text1') }}
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
          {{ $t('home.mission.text2') }}
        </p>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('home.mission.text3') }}
        </p>
      </div>

      <!-- Image illustrative -->
      <div v-motion :initial="{ opacity: 0, x: 40 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 150 } }">
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop&q=80"
          alt="Mission RLS ANALYZ"
          class="rounded-3xl shadow-lg"
        />
      </div>
    </div>

    <!-- Bloc Expertise -->
    <div class="mt-24">
      <h3 class="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">
        {{ $t('home.expertise.title') }}
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(item, index) in expertiseList" :key="index" v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          class="card-modeli p-8 text-center hover-lift">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
            <component :is="item.icon" class="w-8 h-8 text-accent" />
          </div>
          <h4 class="text-xl font-heading font-semibold text-primary mb-3">
            {{ $t(item.title) }}
          </h4>
          <p class="text-gray-600 leading-relaxed">
            {{ $t(item.description) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- Section Nos Services -->
    <section class="spacing-section bg-white">
      <div class="container-modeli">
        <SectionTitle :title="$t('home.services.title')" :subtitle="$t('home.services.subtitle')" />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardService v-for="service in services" :key="service.titleKey" :title="$t(service.titleKey)"
            :description="$t(service.descriptionKey)" :icon="service.icon" />
        </div>

        <!-- CTA Services -->
        <div class="text-center mt-12">
          <ButtonCTA class="bg-accent hover:bg-accent/90 text-primary"
            @click="navigateTo(localePath({ name: 'services' }))">
            {{ $t('home.services.cta') }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 inline-block" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </ButtonCTA>
        </div>
      </div>
    </section>
    


    <!-- Section Pourquoi MODELI -->
    <section class="spacing-section bg-neutral">
      <div class="container-modeli">
        <SectionTitle :title="$t('home.why.title')" :subtitle="$t('home.why.subtitle')" />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(reason, index) in whyModeli" :key="reason.titleKey" v-motion :initial="{ opacity: 0, y: 50 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 600,
                delay: index * 150,
                ease: 'easeOut'
              }
            }" class="card-modeli hover-lift p-8 text-center">
            <!-- Icône -->
            <div class="flex justify-center mb-6">
              <div class="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                <component :is="reason.icon" class="w-10 h-10 text-accent" />
              </div>
            </div>

            <!-- Titre -->
            <h3 class="text-xl font-heading font-semibold text-primary mb-4">
              {{ $t(reason.titleKey) }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 leading-relaxed">
              {{ $t(reason.descriptionKey) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Blog/Actualités -->
    <section class="spacing-section bg-white">
      <div class="container-modeli">
        <SectionTitle :title="$t('home.blog.title')" :subtitle="$t('home.blog.subtitle')" />

        <!-- Loader pour le blog -->
        <div v-if="blogStore.loading" class="flex justify-center py-12">
          <Loader variant="circle" size="lg" />
        </div>

        <!-- Grille des articles -->
        <div v-else-if="recentPosts.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardBlog v-for="post in recentPosts" :key="post.id" :title="post.title.rendered"
            :excerpt="post.excerpt.rendered"
            :image="post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'" :date="post.date"
            :category="post._embedded?.['wp:term']?.[0]?.[0]?.name" :read-time="post.acf?.read_time"
            :author="post._embedded?.author?.[0]?.name"
            :author-avatar="post._embedded?.author?.[0]?.avatar_urls?.['96']"
            @click="navigateTo(localePath({ name: 'blog-slug', params: { slug: post.slug } }))" />
        </div>

        <!-- Bouton Voir tous les articles -->
        <div class="text-center mt-12">
          <ButtonCTA class="btn-outline" @click="navigateTo(localePath({ name: 'blog' }))">
            {{ $t('home.blog.viewAll') }}
          </ButtonCTA>
        </div>
      </div>
    </section>

    <!-- Section CTA Final -->
    <section class="relative py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      <!-- Image de fond avec overlay -->
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop" alt="Contact"
          class="w-full h-full object-cover opacity-20" />
      </div>

      <!-- Contenu -->
      <div class="relative container-modeli text-center">
        <h2 v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
          {{ $t('home.cta.title') }}
        </h2>
        <p v-motion :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          {{ $t('home.cta.subtitle') }}
        </p>
        <div v-motion :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 400 } }">
          <ButtonCTA class="bg-accent hover:bg-accent/90 text-primary text-lg px-10 py-4"
            @click="navigateTo(localePath({ name: 'contact' }))">
            {{ $t('home.cta.button') }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2 inline-block" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </ButtonCTA>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { usePropertyStore } from '@/store/usePropertyStore'
import { useBlogStore } from '@/store/useBlogStore'
import { useLangStore } from '@/store/useLangStore'
import HeroSection from '@/components/ui/HeroSection.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import CardProperty from '@/components/ui/CardProperty.vue'
import CardService from '@/components/ui/CardService.vue'
import CardBlog from '@/components/ui/CardBlog.vue'
import ButtonCTA from '@/components/ui/ButtonCTA.vue'
import Loader from '@/components/ui/Loader.vue'

// Stores
const propertyStore = usePropertyStore()
const blogStore = useBlogStore()
const langStore = useLangStore()

// i18n
const { t } = useI18n()
const localePath = useLocalePath()

// SEO Meta tags
useHead({
  title: t('home.meta.title'),
  meta: [
    {
      name: 'description',
      content: t('home.meta.description')
    },
    {
      property: 'og:title',
      content: t('home.meta.title')
    },
    {
      property: 'og:description',
      content: t('home.meta.description')
    },
    {
      property: 'og:image',
      content: '/og-image.jpg'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})

// Charger les données au montage
onMounted(async () => {
  await Promise.all([
    propertyStore.fetchProperties(1),
    blogStore.fetchPosts(1)
  ])
})

// Biens à la une (6 premiers)
const featuredProperties = computed(() => {
  return propertyStore.properties.slice(0, 6)
})

// Articles récents (3 premiers)
const recentPosts = computed(() => {
  return blogStore.posts.slice(0, 3)
})

// Section Mission + Expertise
const expertiseList = [
  {
    title: 'home.expertise.items.valuation.title',
    description: 'home.expertise.items.valuation.description',
    icon: h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 8v4l3 3' })
    ])
  },
  {
    title: 'home.expertise.items.feasibility.title',
    description: 'home.expertise.items.feasibility.description',
    icon: h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4' })
    ])
  },
  {
    title: 'home.expertise.items.portfolio.title',
    description: 'home.expertise.items.portfolio.description',
    icon: h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 6h16v12H4z' })
    ])
  },
  {
    title: 'home.expertise.items.development.title',
    description: 'home.expertise.items.development.description',
    icon: h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 20h9' })
    ])
  },
  {
    title: 'home.expertise.items.norms.title',
    description: 'home.expertise.items.norms.description',
    icon: h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M6 18L18 6M6 6h12v12H6z' })
    ])
  }
]


// Services avec icônes
const services = [
  {
    titleKey: 'home.services.market.title',
    descriptionKey: 'home.services.market.description',
    icon: h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'w-8 h-8',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
      })
    ])
  },
  {
    titleKey: 'home.services.analysis.title',
    descriptionKey: 'home.services.analysis.description',
    icon: h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'w-8 h-8',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
      })
    ])
  },
  {
    titleKey: 'home.services.investment.title',
    descriptionKey: 'home.services.investment.description',
    icon: h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'w-8 h-8',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      })
    ])
  }
]

// Pourquoi MODELI avec icônes
const whyModeli = [
  {
    titleKey: 'home.why.expertise.title',
    descriptionKey: 'home.why.expertise.description',
    icon: h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'w-10 h-10',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
      })
    ])
  },
  {
    titleKey: 'home.why.trust.title',
    descriptionKey: 'home.why.trust.description',
    icon: h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'w-10 h-10',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
      })
    ])
  },
  {
    titleKey: 'home.why.results.title',
    descriptionKey: 'home.why.results.description',
    icon: h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'w-10 h-10',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
      })
    ])
  }
]

// Helper pour formater le prix
const formatPrice = (price?: number) => {
  if (!price) return t('home.properties.priceOnRequest')
  return langStore.formatPrice(price)
}
</script>

<style scoped>
/* Styles personnalisés pour la page d'accueil */
</style>