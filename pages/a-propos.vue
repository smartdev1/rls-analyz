<template>
  <div class="min-h-screen bg-neutral">
    <!-- HERO -->
    <section class="bg-gradient-to-br from-primary via-primary/95 to-accent py-20 md:py-32 text-center text-white">
      <div class="container-modeli">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
          {{ $t('about.hero.title') }}
        </h1>
        <p class="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          {{ $t('about.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- IDENTITÉ -->
    <section class="py-16 md:py-24">
      <div class="container-modeli text-center">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
          {{ $t('about.identity.title') }}
        </h2>
        <div class="max-w-5xl mx-auto text-gray-700 text-lg space-y-6 text-left">
          <p v-html="$t('about.identity.p1')"></p>
          <p v-html="$t('about.identity.p2')"></p>
          <p v-html="$t('about.identity.p3')"></p>
        </div>
      </div>
    </section>

    <!-- MISSION -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container-modeli text-center">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
          {{ $t('about.mission.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
          {{ $t('about.mission.description') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ValueCard
            v-for="(pillar, key) in missionPillars"
            :key="key"
            :title="pillar.title"
            :description="pillar.description"
            :icon="pillar.icon"
          />
        </div>
      </div>
    </section>

    <!-- VALEURS -->
    <section class="py-16 md:py-24">
      <div class="container-modeli text-center">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          {{ $t('about.values.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
          {{ $t('about.values.subtitle') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard v-for="(value, i) in valueCards" :key="i" :title="value.title" :description="value.description" :icon="value.icon" />
        </div>
      </div>
    </section>

    <!-- VISION -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5 text-center">
      <div class="container-modeli max-w-5xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
          {{ $t('about.vision.title') }}
        </h2>
        <blockquote class="text-2xl font-heading text-gray-700 italic mb-8">
          "{{ $t('about.vision.quote') }}"
        </blockquote>
        <p class="text-lg text-gray-600 mb-12">
          {{ $t('about.vision.description') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard v-for="(pillar, i) in visionPillars" :key="i" :title="pillar.title" :description="pillar.description" :icon="pillar.icon" />
        </div>
      </div>
    </section>

    <!-- CHIFFRES CLÉS -->
    <section class="py-16 md:py-24 bg-white text-center">
      <div class="container-modeli">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          {{ $t('about.stats.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          {{ $t('about.stats.description') }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatsCounter :value="5" suffix="+" :label="$t('about.stats.years')" />
          <StatsCounter :value="50" suffix="+" :label="$t('about.stats.projects')" />
          <StatsCounter :value="100" suffix="%" :label="$t('about.stats.compliance')" />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-center text-white">
      <div class="container-modeli">
        <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4">
          {{ $t('about.cta.title') }}
        </h2>
        <p class="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          {{ $t('about.cta.subtitle') }}
        </p>
        <NuxtLink :to="localePath({ name: 'contact' })" class="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
          {{ $t('about.cta.button') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ShieldCheckIcon, LightBulbIcon, TrophyIcon, GlobeAltIcon, EyeIcon, CheckBadgeIcon, BanknotesIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const localePath = useLocalePath()

// META
useHead({
  title: t('about.meta.title'),
  meta: [{ name: 'description', content: t('about.meta.description') }]
})

// Mission pillars
const missionPillars = [
  { title: t('about.mission.pillars.p1.title'), description: t('about.mission.pillars.p1.description'), icon: TrophyIcon },
  { title: t('about.mission.pillars.p2.title'), description: t('about.mission.pillars.p2.description'), icon: LightBulbIcon },
  { title: t('about.mission.pillars.p3.title'), description: t('about.mission.pillars.p3.description'), icon: ShieldCheckIcon }
]

// Values
const valueCards = [
  { title: t('about.values.financial.title'), description: t('about.values.financial.description'), icon: TrophyIcon },
  { title: t('about.values.regulatory.title'), description: t('about.values.regulatory.description'), icon: ShieldCheckIcon },
  { title: t('about.values.innovation.title'), description: t('about.values.innovation.description'), icon: LightBulbIcon },
  { title: t('about.values.african.title'), description: t('about.values.african.description'), icon: GlobeAltIcon }
]

// Vision pillars
const visionPillars = [
  { title: t('about.vision.pillars.transparency.title'), description: t('about.vision.pillars.transparency.description'), icon: EyeIcon },
  { title: t('about.vision.pillars.professionalism.title'), description: t('about.vision.pillars.professionalism.description'), icon: CheckBadgeIcon },
  { title: t('about.vision.pillars.bankability.title'), description: t('about.vision.pillars.bankability.description'), icon: BanknotesIcon }
]
</script>
