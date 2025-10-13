import { defineStore } from 'pinia'

// Types pour les langues
export type Locale = 'fr' | 'en'

export interface LocaleConfig {
  code: Locale
  name: string
  flag: string
  iso: string
}

export const AVAILABLE_LOCALES: LocaleConfig[] = [
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    iso: 'fr-FR'
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇬🇧',
    iso: 'en-US'
  }
]

export const useLangStore = defineStore('lang', {
  state: () => ({
    // Langue courante
    currentLocale: 'fr' as Locale,
    
    // Locales disponibles
    availableLocales: AVAILABLE_LOCALES,
    
    // Fallback locale
    fallbackLocale: 'fr' as Locale,
    
    // Cookie expiration (en jours)
    cookieExpiration: 365,
    
    // Préférences utilisateur
    userPreferences: {
      autoDetect: true,
      rememberChoice: true,
    },
  }),

  getters: {
    /**
     * Configuration de la locale courante
     */
    currentLocaleConfig: (state): LocaleConfig => {
      return state.availableLocales.find((l) => l.code === state.currentLocale)! || state.availableLocales[0]
    },

    /**
     * Nom de la langue courante
     */
    currentLocaleName(): string {
      return this.currentLocaleConfig.name
    },

    /**
     * Drapeau de la langue courante
     */
    currentLocaleFlag(): string {
      return this.currentLocaleConfig.flag
    },

    /**
     * Code ISO de la langue courante
     */
    currentLocaleISO(): string {
      return this.currentLocaleConfig.iso
    },

    /**
     * Vérifie si une locale est disponible
     */
    isLocaleAvailable: (state) => {
      return (locale: string): boolean => {
        return state.availableLocales.some((l) => l.code === locale)
      }
    },

    /**
     * Obtient la locale alternative (pour le switch FR/EN)
     */
    alternativeLocale: (state): LocaleConfig => {
      return state.availableLocales.find((l) => l.code !== state.currentLocale)! || state.availableLocales[0]
    },

    /**
     * Vérifie si la langue courante est le français
     */
    isFrench: (state): boolean => {
      return state.currentLocale === 'fr'
    },

    /**
     * Vérifie si la langue courante est l'anglais
     */
    isEnglish: (state): boolean => {
      return state.currentLocale === 'en'
    },
  },

  actions: {
    /**
     * Change la langue
     */
    async setLocale(locale: Locale) {
      // Vérifier si la locale est disponible
      if (!this.isLocaleAvailable(locale)) {
        console.warn(`Locale "${locale}" non disponible, utilisation du fallback`)
        locale = this.fallbackLocale
      }

      this.currentLocale = locale

      // Utiliser i18n de Nuxt si disponible
      const { $i18n } = useNuxtApp()
      if ($i18n) {
        await $i18n.setLocale(locale)
      }

      // Sauvegarder dans le cookie si l'utilisateur le souhaite
      if (this.userPreferences.rememberChoice) {
        this.saveToCookie(locale)
      }

      // Mettre à jour l'attribut lang du HTML
      if (process.client) {
        document.documentElement.lang = this.currentLocaleISO
      }

      // Émettre un événement personnalisé
      if (process.client) {
        window.dispatchEvent(new CustomEvent('locale-changed', { detail: { locale } }))
      }
    },

    /**
     * Bascule entre FR et EN
     */
    async toggleLocale() {
      const newLocale = this.currentLocale === 'fr' ? 'en' : 'fr'
      await this.setLocale(newLocale)
    },

    /**
     * Sauvegarde la locale dans un cookie
     */
    saveToCookie(locale: Locale) {
      if (process.client) {
        const expirationDate = new Date()
        expirationDate.setDate(expirationDate.getDate() + this.cookieExpiration)
        
        document.cookie = `modeli_locale=${locale}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Lax`
      }
    },

    /**
     * Récupère la locale depuis le cookie
     */
    getFromCookie(): Locale | null {
      if (process.client) {
        const match = document.cookie.match(/modeli_locale=([^;]+)/)
        if (match && match[1]) {
          const locale = match[1] as Locale
          return this.isLocaleAvailable(locale) ? locale : null
        }
      }
      return null
    },

    /**
     * Détecte la langue du navigateur
     */
    detectBrowserLocale(): Locale | null {
      if (process.client) {
        const browserLang = navigator.language || (navigator as any).userLanguage
        
        // Extraire le code de langue (fr-FR -> fr)
        const langCode = browserLang.split('-')[0].toLowerCase()
        
        // Vérifier si cette langue est disponible
        if (this.isLocaleAvailable(langCode)) {
          return langCode as Locale
        }
      }
      return null
    },

    /**
     * Initialise la locale au chargement de l'application
     */
    async initLocale() {
      let locale: Locale | null = null

      // 1. Essayer de récupérer depuis le cookie
      if (this.userPreferences.rememberChoice) {
        locale = this.getFromCookie()
      }

      // 2. Essayer de détecter la langue du navigateur
      if (!locale && this.userPreferences.autoDetect) {
        locale = this.detectBrowserLocale()
      }

      // 3. Utiliser i18n de Nuxt si disponible
      if (!locale) {
        const { $i18n } = useNuxtApp()
        if ($i18n && $i18n.locale) {
          locale = $i18n.locale.value as Locale
        }
      }

      // 4. Utiliser le fallback
      if (!locale) {
        locale = this.fallbackLocale
      }

      // Appliquer la locale
      await this.setLocale(locale)
    },

    /**
     * Met à jour les préférences utilisateur
     */
    updatePreferences(preferences: Partial<typeof this.userPreferences>) {
      this.userPreferences = { ...this.userPreferences, ...preferences }
      
      // Sauvegarder dans localStorage
      if (process.client) {
        localStorage.setItem('modeli_lang_preferences', JSON.stringify(this.userPreferences))
      }
    },

    /**
     * Charge les préférences depuis localStorage
     */
    loadPreferences() {
      if (process.client) {
        const saved = localStorage.getItem('modeli_lang_preferences')
        if (saved) {
          try {
            this.userPreferences = { ...this.userPreferences, ...JSON.parse(saved) }
          } catch (error) {
            console.error('Erreur lors du chargement des préférences de langue', error)
          }
        }
      }
    },

    /**
     * Obtient la traduction d'une clé (si i18n n'est pas utilisé)
     */
    t(key: string, params?: Record<string, any>): string {
      const { $i18n } = useNuxtApp()
      if ($i18n) {
        return $i18n.t(key, params ?? {})
      }
      
      // Fallback si i18n n'est pas disponible
      return key
    },

    /**
     * Formate une date selon la locale courante
     */
    formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
      const dateObj = typeof date === 'string' ? new Date(date) : date
      
      const defaultOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        ...options
      }
      
      return new Intl.DateTimeFormat(this.currentLocaleISO, defaultOptions).format(dateObj)
    },

    /**
     * Formate un nombre selon la locale courante
     */
    formatNumber(number: number, options?: Intl.NumberFormatOptions): string {
      return new Intl.NumberFormat(this.currentLocaleISO, options).format(number)
    },

    /**
     * Formate un prix selon la locale courante
     */
    formatPrice(amount: number, currency = 'EUR'): string {
      return this.formatNumber(amount, {
        style: 'currency',
        currency,
      })
    },

    /**
     * Réinitialise le store
     */
    reset() {
      this.currentLocale = this.fallbackLocale
      this.userPreferences = {
        autoDetect: true,
        rememberChoice: true,
      }
    },
  },
})