<template>
  <div class="min-h-screen bg-neutral">
    <!-- HEADER -->
    <section
      class="relative bg-gradient-to-br from-[#002B5B] via-[#003d7a] to-[#002B5B] py-24 lg:py-32 overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-[#C6A15B] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2">
        </div>
        <div
          class="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2">
        </div>
      </div>
      <div class="container-modeli">
        <div v-motion :initial="{ opacity: 0, y: -30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="text-center text-white">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6" style="color: white">
            À propos de RLS ANALYZ
          </h1>
          <p class="text-[#C6A15B] text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            L'expertise financière et l'immobilier au service de la valeur
          </p>
        </div>
      </div>
    </section>

    <!-- IDENTITÉ -->
    <section class="py-16 md:py-24">
      <div class="container-modeli">
        <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Notre Identité : Un Partenaire de Référence
          </h2>
        </div>

        <div v-motion :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }" class="max-w-5xl mx-auto">
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            RLS ANALYZ est un cabinet spécialisé en <strong class="text-primary">immobilier d'entreprise</strong>, fondé
            pour accompagner les acteurs du marché immobilier d'entreprise en Afrique de l'Ouest. Basé en Côte d'Ivoire,
            nous nous positionnons comme un partenaire stratégique incontournable pour les banques, investisseurs,
            promoteurs, foncières et institutions publiques.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            Notre expertise technique, financière et stratégique de haut niveau repose sur une approche unique qui
            conjugue <strong class="text-[#C6A15B]">rigueur analytique</strong>, maîtrise des standards internationaux
            <strong>(RICS & IVS)</strong> et une compréhension approfondie du contexte local. Nous intégrons dans nos
            analyses le cadre foncier spécifique à la région, la fiscalité applicable, ainsi que la réglementation du
            BTP et de l'urbanisme en Afrique de l'Ouest.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Cette double compétence — <strong>internationale et locale</strong> — nous permet d'offrir des solutions
            d'analyse qui répondent aux exigences des investisseurs institutionnels tout en tenant compte des réalités
            opérationnelles du marché ouest-africain. Chaque projet bénéficie d'une méthodologie adaptée, rigoureuse et
            orientée vers la création de valeur mesurable.
          </p>
        </div>
      </div>
    </section>

    <!-- MISSION -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container-modeli">
        <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Notre Mission : Transformer la Donnée en Valeur Stratégique
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
            RLS ANALYZ a pour mission de transformer la donnée immobilière en valeur stratégique. Dans un environnement
            où la prise de décision doit s'appuyer sur des analyses précises et documentées, nous fournissons à nos
            clients les outils et l'expertise nécessaires pour maximiser la performance de leurs investissements
            immobiliers.
          </p>
        </div>

        <!-- Trois piliers de la mission -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-motion :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
            class="card-modeli p-8 text-center hover:shadow-card transition-all duration-300">
            <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-primary mb-3">
              Évaluer la Rentabilité
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Nous analysons en profondeur la viabilité financière de vos projets immobiliers, en calculant les
              indicateurs clés de performance et en identifiant les leviers de création de valeur.
            </p>
          </div>

          <div v-motion :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
            class="card-modeli p-8 text-center hover:shadow-card transition-all duration-300">
            <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-primary mb-3">
              Optimiser les Décisions
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Nos modélisations permettent d'éclairer vos choix d'investissement, de financement et de développement
              avec des scénarios comparatifs et des analyses de sensibilité.
            </p>
          </div>

          <div v-motion :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
            class="card-modeli p-8 text-center hover:shadow-card transition-all duration-300">
            <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold text-primary mb-3">
              Sécuriser les Opérations
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Nous appliquons les meilleures pratiques internationales pour garantir la conformité et la robustesse de
              vos montages financiers et opérationnels.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- QUATRE PILIERS D'EXCELLENCE -->
    <section class="py-16 md:py-24">
      <div class="container-modeli">
        <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Notre Valeur Ajoutée : Quatre Piliers d'Excellence
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto">
            RLS ANALYZ se distingue par une approche à la fois technique, stratégique et digitale. Notre positionnement
            unique sur le marché ouest-africain repose sur quatre piliers fondamentaux qui garantissent la qualité et la
            pertinence de nos analyses.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard title="Expertise Financière"
            description="Maîtrise des outils de modélisation et des méthodes de valorisation reconnues internationalement. Nos équipes combinent expertise technique et expérience sectorielle pour délivrer des analyses de niveau institutionnel."
            :icon="TrophyIcon" />

          <ValueCard title="Approche Réglementaire"
            description="Intégration du Code de la Construction et de l'Habitat ivoirien et du cadre OHADA dans l'analyse. Nous assurons la conformité de vos projets avec l'ensemble des réglementations locales applicables."
            :icon="ShieldCheckIcon" />

          <ValueCard title="Innovation Technologique"
            description="Développement d'outils internes tels que l'add-in MODELI, un module Excel dédié à la modélisation d'actifs immobiliers. Notre capacité d'innovation nous permet d'automatiser et d'optimiser les processus d'analyse."
            :icon="LightBulbIcon" />

          <ValueCard title="Ancrage Africain"
            description="Connaissance approfondie des réalités foncières, fiscales et institutionnelles propres à la Côte d'Ivoire et à l'espace UMOA. Notre expertise locale fait la différence dans l'interprétation des données."
            :icon="GlobeAltIcon" />
        </div>
      </div>
    </section>

    <!-- VISION -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div class="container-modeli">
        <div v-motion :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }" class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Notre Vision : Référence Régionale
          </h2>
          <blockquote class="text-2xl font-heading text-gray-700 italic mb-8">
            "RLS ANALYZ aspire à devenir la référence de la modélisation et de l'évaluation immobilière institutionnelle
            en Afrique de l'Ouest."
          </blockquote>
          <p class="text-lg text-gray-600 mb-12">
            Nous accompagnons activement la transformation du marché immobilier régional vers plus de transparence,
            professionnalisme et bancabilité. Notre ambition est claire : contribuer à l'émergence d'un écosystème
            immobilier ouest-africain mature, structuré et attractif pour les investissements institutionnels
            internationaux.
          </p>

          <!-- Trois piliers de la vision -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <div class="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 class="font-heading font-bold text-primary text-xl mb-2">Transparence</h3>
              <p class="text-gray-600 text-sm">Standardisation des pratiques d'évaluation et de reporting selon les
                normes internationales</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 class="font-heading font-bold text-primary text-xl mb-2">Professionnalisme</h3>
              <p class="text-gray-600 text-sm">Élévation des standards d'analyse et de modélisation sur le marché
                régional</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="font-heading font-bold text-primary text-xl mb-2">Bancabilité</h3>
              <p class="text-gray-600 text-sm">Structuration de projets répondant aux exigences des investisseurs
                institutionnels</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CHIFFRES CLÉS -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container-modeli">
        <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Pourquoi Choisir RLS ANALYZ ?
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Dans un marché immobilier en pleine transformation, RLS ANALYZ représente le partenaire idéal pour sécuriser
            vos investissements et optimiser la performance de vos actifs.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatsCounter :value="5" suffix="+" label="Années d'Expertise"
            description="Dans la modélisation financière immobilière en Afrique de l'Ouest" :decimals="1" />

          <StatsCounter :value="50" suffix="+" label="Projets Analysés"
            description="Études de faisabilité, valorisations et audits réalisés" :decimals="1" />

          <StatsCounter :value="100" suffix="%" label="Conformité"
            description="Respect des normes internationales et réglementations locales" :decimals="1" />
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <section class="py-16 md:py-24  from-primary/5 to-accent/5">
      <div class="container-modeli">
        <div v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Rencontrez Notre Équipe
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto">
            Derrière chaque analyse rigoureuse et chaque modélisation précise se trouve une équipe dévouée d'experts
            passionnés par l'immobilier d'entreprise et la finance.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <OurTeam name="Hermann Kouadio" role="Managing Partner"
            bio="Avec plus de 7 ans d'expérience en modélisation financière immobilière, Aristide est le cerveau derrière MODELI et un expert reconnu en immobilier d'entreprise en Afrique de l'Ouest."
            linkedin="https://www.linkedin.com/in/aristide-adouko/" image="https://zupimages.net/up/25/43/4nsq.jpg" />

          <OurTeam name="Abibata Ouattara" role="Consultante Senior"
            bio="Sophie apporte une expertise pointue en évaluation immobilière et en analyse de marché, assurant la rigueur et la précision de nos études."
            linkedin="https://www.linkedin.com/in/sophie-koffi/" image="/team/sophie-koffi.jpg" />

          <OurTeam name="Darius Tse Bi Tra" role="Consultant Senior"
            bio="Darius combine une connaissance approfondie du marché ouest-africain avec une expertise stratégique pour guider nos clients vers des décisions éclairées."
            linkedin="https://www.linkedin.com/in/darius-tse-bi-tra/" image="/team/darius-tse-bi-tra.jpg" />
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-primary to-accent">
      <div class="container-modeli text-center">
        <div v-motion :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Prêt à Transformer vos Projets Immobiliers ?
          </h2>
          <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Que vous soyez investisseur institutionnel, promoteur immobilier, établissement bancaire ou organisme
            public, RLS ANALYZ vous accompagne dans l'analyse, l'évaluation et le pilotage de vos projets immobiliers
            avec la rigueur et l'excellence que vous méritez.
          </p>
          <NuxtLink to="/contact"
            class="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            Contactez-nous
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import StatsCounter from '../components/ui/StatsCounter.vue'
import OurTeam from '../components/ui/OurTeam.vue'
import {
  ShieldCheckIcon,
  LightBulbIcon,
  TrophyIcon,
  GlobeAltIcon
} from '@heroicons/vue/24/outline'

// Méta-données de la page
useHead({
  title: 'À propos - RLS ANALYZ | Immobilier d\'Entreprise en Afrique de l\'Ouest',
  meta: [
    {
      name: 'description',
      content: 'RLS ANALYZ : cabinet spécialisé en immobilier d\'entreprise. Expertise financière, modélisation DCF, standards RICS & IVS, ancrage africain.',
    },
  ],
})
</script>

<style scoped>
/* Styles additionnels si nécessaires */
</style>