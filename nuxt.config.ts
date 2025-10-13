// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Modules
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    '@vueuse/motion/nuxt',
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],

  // Configuration des fonts
  fonts: {
    families: [
      { name: 'Poppins', provider: 'google', weights: [400, 600, 700, 800] },
      { name: 'Open Sans', provider: 'google', weights: [300, 400, 600, 700] }
    ]
  },

  // Configuration Tailwind
  tailwindcss: {
    exposeConfig: false,
    viewer: true,
  },

  // Configuration i18n (bilingue FR/EN)
  i18n: {
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
        file: 'fr.json'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      }
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'modeli_lang',
      redirectOn: 'root',
    }
  },

  // Configuration Pinia
  pinia: {
    storesDirs: ['./store/**'],
  },

  // TypeScript strict mode
  typescript: {
    strict: true,
    typeCheck: true
  },

  // PostCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // App config
  app: {
    head: {
      title: 'MODELI - Immobilier d\'Entreprise',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'MODELI - Votre partenaire en immobilier d\'entreprise. Découvrez des biens d\'exception et bénéficiez de nos services de conseil.' },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph
        { property: 'og:title', content: 'MODELI - Immobilier d\'Entreprise' },
        { property: 'og:description', content: 'Votre partenaire en immobilier d\'entreprise' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.jpg' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'MODELI - Immobilier d\'Entreprise' },
        { name: 'twitter:description', content: 'Votre partenaire en immobilier d\'entreprise' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  // Optimisations
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true
  },

  // Variables d'environnement
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'https://api.modeli.fr',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://modeli.fr',
    }
  },

  // Nitro config pour le build
  nitro: {
    compressPublicAssets: true,
  },

  // ESLint
  eslint: {
    config: {
      stylistic: true
    }
  }
})