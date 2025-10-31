<template>
  <div class="min-h-screen bg-[#F2F2F2]">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-[#002B5B] via-[#003d7a] to-[#002B5B] py-24 lg:py-32 overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-[#C6A15B] rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <!-- Content -->
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="text-center">
          <h1
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, ease: 'easeOut' } }"
            class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            style="font-family: 'Montserrat', sans-serif"
          >
            Services Immobiliers <br class="hidden sm:block" />
            <span class="text-[#C6A15B]">d'Excellence</span>
          </h1>
          
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200, ease: 'easeOut' } }"
            class="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8"
            style="font-family: 'Lato', sans-serif"
          >
            Une expertise complète en analyse financière et immobilière pour optimiser vos investissements et sécuriser vos décisions stratégiques
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 400 } }"
            class="flex flex-wrap justify-center gap-4"
          >
            <button
              @click="scrollToServices"
              class="px-8 py-4 bg-[#C6A15B] text-[#002B5B] rounded-full font-bold hover:bg-[#b89550] transition-all duration-300 shadow-xl hover:shadow-2xl text-base sm:text-lg transform hover:scale-105"
              style="font-family: 'Montserrat', sans-serif"
            >
              Découvrir nos services
            </button>
            <button
              @click="navigateTo(localePath({ name: 'contact' }))"
              class="px-8 py-4 rounded-full font-semibold text-white border-2 border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-base sm:text-lg"
              style="font-family: 'Montserrat', sans-serif"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-16 lg:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-4xl mx-auto text-center">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002B5B] mb-6"
            style="font-family: 'Montserrat', sans-serif"
          >
            5 Axes d'Expertise pour Vos Projets
          </h2>
          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
            class="text-lg lg:text-xl text-gray-700 leading-relaxed"
            style="font-family: 'Lato', sans-serif"
          >
            RLS-ANALYZ vous accompagne sur l'ensemble du cycle de vie de vos actifs immobiliers, de l'évaluation initiale à la gestion de portefeuille, en passant par les études de faisabilité et la conformité réglementaire.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services-list" class="py-16 lg:py-24 bg-[#F2F2F2]">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="space-y-20">
          <!-- Service 1: Évaluation -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 700 } }"
            class="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div class="relative h-72 lg:h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&q=80"
                  alt="Évaluation d'actifs immobiliers"
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-br from-[#002B5B]/70 via-[#002B5B]/50 to-transparent"></div>
                <div class="absolute bottom-8 left-8 right-8">
                  <div class="inline-flex items-center gap-3 px-4 py-2 bg-[#C6A15B] rounded-full">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-white font-semibold text-sm" style="font-family: 'Montserrat', sans-serif">Service #1</span>
                  </div>
                </div>
              </div>

              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <div class="mb-6">
                  <div class="inline-flex items-center justify-center w-16 h-16 bg-[#C6A15B]/10 rounded-2xl mb-4">
                    <svg class="w-8 h-8 text-[#C6A15B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  <h3 class="text-3xl lg:text-4xl font-bold text-[#002B5B] mb-4" style="font-family: 'Montserrat', sans-serif">
                    Évaluation d'Actifs Immobiliers
                  </h3>
                </div>

                <p class="text-gray-700 text-lg leading-relaxed mb-6" style="font-family: 'Lato', sans-serif">
                  Nos analyses intègrent le cadre foncier, fiscal et réglementaire local. Nous utilisons les méthodes d'évaluation reconnues (comparaison, revenu, coût) adaptées au contexte africain et aux standards internationaux.
                </p>

                <div class="space-y-4 mb-8">
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Valorisation selon normes internationales (IFRS, IVS)</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Utilisation du logiciel ARGUS Enterprise</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Prise en compte du cadre OHADA et de la fiscalité locale</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Rapports détaillés et conformes aux exigences réglementaires</p>
                  </div>
                </div>

                <button
                  @click="navigateTo(localePath({ name: 'contact', query: { service: 'evaluation' } }))"
                  class="inline-flex items-center gap-2 px-8 py-4 bg-[#002B5B] text-white rounded-full font-bold hover:bg-[#001d3f] transition-all duration-300 shadow-lg hover:shadow-xl group"
                  style="font-family: 'Montserrat', sans-serif"
                >
                  Demander une évaluation
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Service 2: Études de faisabilité -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 200 } }"
            class="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div class="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div class="mb-6">
                  <div class="inline-flex items-center justify-center w-16 h-16 bg-[#C6A15B]/10 rounded-2xl mb-4">
                    <svg class="w-8 h-8 text-[#C6A15B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <h3 class="text-3xl lg:text-4xl font-bold text-[#002B5B] mb-4" style="font-family: 'Montserrat', sans-serif">
                    Études de Faisabilité
                  </h3>
                </div>

                <p class="text-gray-700 text-lg leading-relaxed mb-6" style="font-family: 'Lato', sans-serif">
                  Modélisation financière complète de vos projets immobiliers. Notre outil propriétaire MODELI permet une simulation précise des flux de trésorerie, du TRI et de la VAN avec une granularité mensuelle.
                </p>

                <div class="space-y-4 mb-8">
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Modélisation avec notre outil propriétaire MODELI</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Analyse TRI, VAN, Cap Rate et Cash-on-Cash</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Scénarios de sensibilité et simulation de risques</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Intégration des spécificités du marché africain</p>
                  </div>
                </div>

                <button
                  @click="navigateTo(localePath({ name: 'contact', query: { service: 'faisabilite' } }))"
                  class="inline-flex items-center gap-2 px-8 py-4 bg-[#002B5B] text-white rounded-full font-bold hover:bg-[#001d3f] transition-all duration-300 shadow-lg hover:shadow-xl group"
                  style="font-family: 'Montserrat', sans-serif"
                >
                  Demander une étude
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </button>
              </div>

              <div class="relative h-72 lg:h-full min-h-[400px] order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=80"
                  alt="Études de faisabilité"
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-bl from-[#002B5B]/70 via-[#002B5B]/50 to-transparent"></div>
                <div class="absolute bottom-8 right-8 left-8 text-right lg:text-left lg:left-auto">
                  <div class="inline-flex items-center gap-3 px-4 py-2 bg-[#C6A15B] rounded-full">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                    </svg>
                    <span class="text-white font-semibold text-sm" style="font-family: 'Montserrat', sans-serif">Service #2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 3: Portfolio Management -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 400 } }"
            class="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div class="relative h-72 lg:h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80"
                  alt="Portfolio Management"
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-br from-[#002B5B]/70 via-[#002B5B]/50 to-transparent"></div>
                <div class="absolute bottom-8 left-8 right-8">
                  <div class="inline-flex items-center gap-3 px-4 py-2 bg-[#C6A15B] rounded-full">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                    <span class="text-white font-semibold text-sm" style="font-family: 'Montserrat', sans-serif">Service #3</span>
                  </div>
                </div>
              </div>

              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <div class="mb-6">
                  <div class="inline-flex items-center justify-center w-16 h-16 bg-[#C6A15B]/10 rounded-2xl mb-4">
                    <svg class="w-8 h-8 text-[#C6A15B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                    </svg>
                  </div>
                  <h3 class="text-3xl lg:text-4xl font-bold text-[#002B5B] mb-4" style="font-family: 'Montserrat', sans-serif">
                    Portfolio Management
                  </h3>
                </div>

                <p class="text-gray-700 text-lg leading-relaxed mb-6" style="font-family: 'Lato', sans-serif">
                  Gestion stratégique de votre patrimoine immobilier avec des tableaux de bord Power BI pour un pilotage en temps réel de la performance de vos actifs et l'optimisation de votre rentabilité.
                </p>

                <div class="space-y-4 mb-8">
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Dashboards Power BI personnalisés et interactifs</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Suivi de la performance financière et opérationnelle</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Optimisation de la rentabilité du portefeuille</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Analyse comparative et benchmarking sectoriel</p>
                  </div>
                </div>

                <button
                  @click="navigateTo(localePath({ name: 'contact', query: { service: 'portfolio' } }))"
                  class="inline-flex items-center gap-2 px-8 py-4 bg-[#002B5B] text-white rounded-full font-bold hover:bg-[#001d3f] transition-all duration-300 shadow-lg hover:shadow-xl group"
                  style="font-family: 'Montserrat', sans-serif"
                >
                  Optimiser mon portefeuille
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Service 4: Suivi de projets -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 600 } }"
            class="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div class="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div class="mb-6">
                  <div class="inline-flex items-center justify-center w-16 h-16 bg-[#C6A15B]/10 rounded-2xl mb-4">
                    <svg class="w-8 h-8 text-[#C6A15B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                    </svg>
                  </div>
                  <h3 class="text-3xl lg:text-4xl font-bold text-[#002B5B] mb-4" style="font-family: 'Montserrat', sans-serif">
                    Suivi de Projets Immobiliers
                  </h3>
                </div>

                <p class="text-gray-700 text-lg leading-relaxed mb-6" style="font-family: 'Lato', sans-serif">
                  Accompagnement de vos projets de développement avec un suivi rigoureux des coûts, délais et performance financière en phase de réalisation. Reporting mensuel aux investisseurs.
                </p>

                <div class="space-y-4 mb-8">
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Suivi budgétaire et contrôle rigoureux des coûts</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Reporting mensuel détaillé aux investisseurs</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Analyse des écarts et recommandations correctives</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Coordination avec toutes les parties prenantes</p>
                  </div>
                </div>

                <button
                  @click="navigateTo(localePath({ name: 'contact', query: { service: 'suivi' } }))"
                  class="inline-flex items-center gap-2 px-8 py-4 bg-[#002B5B] text-white rounded-full font-bold hover:bg-[#001d3f] transition-all duration-300 shadow-lg hover:shadow-xl group"
                  style="font-family: 'Montserrat', sans-serif"
                >
                  Faire suivre mon projet
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </button>
              </div>

              <div class="relative h-72 lg:h-full min-h-[400px] order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop&q=80"
                  alt="Suivi de projets"
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-bl from-[#002B5B]/70 via-[#002B5B]/50 to-transparent"></div>
                <div class="absolute bottom-8 right-8 left-8 text-right lg:text-left lg:left-auto">
                  <div class="inline-flex items-center gap-3 px-4 py-2 bg-[#C6A15B] rounded-full">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-white font-semibold text-sm" style="font-family: 'Montserrat', sans-serif">Service #4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 5: Conversion IFRS -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 800 } }"
            class="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div class="relative h-72 lg:h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=800&fit=crop&q=80"
                  alt="Conversion IFRS"
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-br from-[#002B5B]/70 via-[#002B5B]/50 to-transparent"></div>
                <div class="absolute bottom-8 left-8 right-8">
                  <div class="inline-flex items-center gap-3 px-4 py-2 bg-[#C6A15B] rounded-full">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-white font-semibold text-sm" style="font-family: 'Montserrat', sans-serif">Service #5</span>
                  </div>
                </div>
              </div>

              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <div class="mb-6">
                  <div class="inline-flex items-center justify-center w-16 h-16 bg-[#C6A15B]/10 rounded-2xl mb-4">
                    <svg class="w-8 h-8 text-[#C6A15B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <h3 class="text-3xl lg:text-4xl font-bold text-[#002B5B] mb-4" style="font-family: 'Montserrat', sans-serif">
                    Conversion aux Normes IFRS
                  </h3>
                </div>

                <p class="text-gray-700 text-lg leading-relaxed mb-6" style="font-family: 'Lato', sans-serif">
                  Mise en conformité de vos actifs immobiliers avec les normes IFRS 16 et IAS 40. Expertise en retraitement comptable et valorisation pour répondre aux exigences internationales et aux audits externes.
                </p>

                <div class="space-y-4 mb-8">
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Application des normes IFRS 16 et IAS 40</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Retraitement comptable des baux et actifs immobiliers</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Accompagnement et formation des équipes financières</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-[#C6A15B] rounded-full flex items-center justify-center mt-1">
                      <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="text-gray-700 text-base" style="font-family: 'Lato', sans-serif">Documentation conforme aux audits externes</p>
                  </div>
                </div>

                <button
                  @click="navigateTo(localePath({ name: 'contact', query: { service: 'ifrs' } }))"
                  class="inline-flex items-center gap-2 px-8 py-4 bg-[#002B5B] text-white rounded-full font-bold hover:bg-[#001d3f] transition-all duration-300 shadow-lg hover:shadow-xl group"
                  style="font-family: 'Montserrat', sans-serif"
                >
                  Mettre en conformité
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Méthodologie Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="text-center mb-16">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002B5B] mb-4"
            style="font-family: 'Montserrat', sans-serif"
          >
            Notre Méthodologie
          </h2>
          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
            class="text-lg text-gray-600 max-w-2xl mx-auto"
            style="font-family: 'Lato', sans-serif"
          >
            Un processus éprouvé en 4 étapes pour garantir la réussite de vos projets
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in processSteps"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :enter="{ 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 600, 
                delay: index * 150 
              } 
            }"
            class="relative"
          >
            <!-- Card -->
            <div class="bg-[#F2F2F2] rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 group">
              <!-- Number badge -->
              <div class="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                <div class="absolute inset-0 bg-[#C6A15B]/20 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                <div class="absolute inset-2 bg-[#C6A15B] rounded-full flex items-center justify-center group-hover:bg-[#002B5B] transition-colors duration-300">
                  <span class="text-2xl font-bold text-white" style="font-family: 'Montserrat', sans-serif">{{ index + 1 }}</span>
                </div>
              </div>

              <!-- Title -->
              <h4 class="text-xl font-bold text-[#002B5B] mb-3" style="font-family: 'Montserrat', sans-serif">
                {{ step.title }}
              </h4>

              <!-- Description -->
              <p class="text-gray-600 leading-relaxed" style="font-family: 'Lato', sans-serif">
                {{ step.description }}
              </p>
            </div>

            <!-- Arrow connector (desktop only) -->
            <div
              v-if="index < processSteps.length - 1"
              class="hidden lg:block absolute top-10 left-full w-8 -ml-4 z-10"
            >
              <svg class="w-full h-auto text-[#C6A15B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi RLS-ANALYZ Section -->
    <section class="py-20 bg-[#F2F2F2]">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="text-center mb-16">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002B5B] mb-4"
            style="font-family: 'Montserrat', sans-serif"
          >
            Pourquoi Choisir RLS-ANALYZ ?
          </h2>
          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
            class="text-lg text-gray-600 max-w-2xl mx-auto"
            style="font-family: 'Lato', sans-serif"
          >
            Une expertise reconnue au service de vos ambitions immobilières
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(reason, index) in whyRLS"
            :key="index"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ 
              opacity: 1, 
              scale: 1, 
              transition: { 
                duration: 600, 
                delay: index * 150 
              } 
            }"
            class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
          >
            <!-- Icon -->
            <div class="flex justify-center mb-6">
              <div class="w-20 h-20 rounded-full bg-[#C6A15B]/10 flex items-center justify-center group-hover:bg-[#C6A15B]/20 transition-colors duration-300">
                <component :is="reason.icon" class="w-10 h-10 text-[#C6A15B]" />
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-[#002B5B] mb-4" style="font-family: 'Montserrat', sans-serif">
              {{ reason.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 leading-relaxed text-sm" style="font-family: 'Lato', sans-serif">
              {{ reason.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final Section -->
    <section class="relative py-24 bg-gradient-to-br from-[#002B5B] via-[#003d7a] to-[#002B5B] overflow-hidden">
      <!-- Background image with overlay -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80"
          alt="Contact RLS-ANALYZ"
          class="w-full h-full object-cover opacity-20"
        />
        <div class="absolute inset-0 bg-gradient-to-br from-[#002B5B]/80 to-[#001d3f]/80"></div>
      </div>

      <!-- Content -->
      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          style="font-family: 'Montserrat', sans-serif"
        >
          Prêt à Optimiser Vos <br class="hidden sm:block" />
          <span class="text-[#C6A15B]">Investissements Immobiliers</span> ?
        </h2>
        
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          style="font-family: 'Lato', sans-serif"
        >
          Contactez nos experts pour une consultation personnalisée et découvrez comment nous pouvons valoriser votre patrimoine immobilier
        </p>
        
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 400 } }"
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            @click="navigateTo(localePath({ name: 'contact' }))"
            class="px-10 py-5 bg-[#C6A15B] text-[#002B5B] rounded-full font-bold hover:bg-[#b89550] transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg transform hover:scale-105"
            style="font-family: 'Montserrat', sans-serif"
          >
            Demander un devis gratuit
          </button>
          
          <button
            @click="navigateTo(localePath({ name: 'a-propos' }))"
            class="px-10 py-5 rounded-full font-semibold text-white border-2 border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-lg"
            style="font-family: 'Montserrat', sans-serif"
          >
            En savoir plus sur nous
          </button>
        </div>

        <!-- Contact info -->
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 600, delay: 600 } }"
          class="mt-12 flex flex-wrap justify-center gap-8 text-white/80"
        >
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#C6A15B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span style="font-family: 'Lato', sans-serif">contact@rls-analyz.com</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#C6A15B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span style="font-family: 'Lato', sans-serif">Abidjan, Cocody</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { useHead } from '#imports'

// Navigation et i18n
const localePath = useLocalePath()
const router = useRouter()

// ✅ SEO Meta
useHead({
  title: 'Services | RLS-ANALYZ - Conseil et Évaluation Immobilière',
  meta: [
    {
      name: 'description',
      content:
        "Découvrez les services de RLS-ANALYZ : évaluation immobilière, études de faisabilité, gestion de portefeuille, suivi de projets et conformité IFRS. Une expertise d'excellence pour vos décisions stratégiques.",
    },
    {
      property: 'og:title',
      content: "Services | RLS-ANALYZ - Expertise Immobilière et Financière",
    },
    {
      property: 'og:description',
      content:
        "Nos services couvrent toute la chaîne de valeur immobilière : analyse financière, évaluation d’actifs, modélisation, suivi de projets et accompagnement IFRS.",
    },
    {
      property: 'og:image',
      content: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200',
    },
  ],
})

// ✅ Défilement fluide vers la section des services
const scrollToServices = () => {
  const section = document.getElementById('services-list')
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

// ✅ Étapes du processus (Méthodologie)
const processSteps = [
  {
    title: 'Analyse & Diagnostic',
    description:
      "Nous commençons par comprendre votre portefeuille immobilier, vos objectifs financiers et vos contraintes pour poser un diagnostic précis.",
  },
  {
    title: 'Évaluation & Modélisation',
    description:
      "Nous modélisons la performance économique et financière à l’aide de nos outils MODELI et des standards internationaux.",
  },
  {
    title: 'Recommandations & Stratégie',
    description:
      "Nous formulons des scénarios et recommandations personnalisés pour maximiser la rentabilité et minimiser les risques.",
  },
  {
    title: 'Suivi & Reporting',
    description:
      "Nous assurons un accompagnement régulier, des rapports clairs et des tableaux de bord de performance pour vos actifs.",
  },
]

// ✅ Raisons de choisir RLS-ANALYZ
const whyRLS = [
  {
    icon: () =>
      h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        class: 'w-10 h-10',
        innerHTML:
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-3-3v6m-7 8a9 9 0 1118 0H5z"/>',
      }),
    title: 'Expertise Internationale',
    description:
      "Nos équipes sont formées aux standards internationaux (RICS, IFRS, IVS) pour des analyses fiables et reconnues.",
  },
  {
    icon: () =>
      h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        class: 'w-10 h-10',
        innerHTML:
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m9 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      }),
    title: 'Réactivité et Agilité',
    description:
      "Notre structure légère et digitale nous permet de livrer des études précises en un temps record.",
  },
  {
    icon: () =>
      h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        class: 'w-10 h-10',
        innerHTML:
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>',
      }),
    title: 'Méthodologie MODELI',
    description:
      "Nous utilisons notre propre modèle financier MODELI, développé en interne pour des projections robustes et intuitives.",
  },
  {
    icon: () =>
      h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        class: 'w-10 h-10',
        innerHTML:
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 20h9M3 20h9m0-16H3m0 0v16m18-16v16"/>',
      }),
    title: 'Transparence Totale',
    description:
      "Chaque mission est documentée et partagée en toute transparence avec nos clients et partenaires.",
  },
]
</script>
