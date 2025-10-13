import { defineStore } from 'pinia'

// Types pour les biens immobiliers
export interface Property {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  slug: string
  featured_media?: number
  acf?: {
    price?: number
    surface?: number
    location?: string
    type?: string
    bedrooms?: number
    bathrooms?: number
    parking?: boolean
    year_built?: number
    features?: string[]
    gallery?: string[]
  }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
  }
}

export interface PropertyFilters {
  type?: string
  minPrice?: number
  maxPrice?: number
  minSurface?: number
  maxSurface?: number
  location?: string
  search?: string
}

export const usePropertyStore = defineStore('property', {
  state: () => ({
    // Liste de tous les biens
    properties: [] as Property[],
    
    // Bien actuellement sélectionné
    currentProperty: null as Property | null,
    
    // Filtres actifs
    filters: {
      type: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      minSurface: undefined,
      maxSurface: undefined,
      location: undefined,
      search: undefined,
    } as PropertyFilters,
    
    // États de chargement
    loading: false,
    loadingDetail: false,
    
    // Erreurs
    error: null as string | null,
    
    // Pagination
    currentPage: 1,
    perPage: 12,
    totalPages: 1,
    totalProperties: 0,
  }),

  getters: {
    /**
     * Biens filtrés selon les critères actifs
     */
    filteredProperties: (state) => {
      let filtered = [...state.properties]

      // Filtre par type
      if (state.filters.type) {
        filtered = filtered.filter(
          (p) => p.acf?.type?.toLowerCase() === state.filters.type?.toLowerCase()
        )
      }

      // Filtre par prix
      if (state.filters.minPrice) {
        filtered = filtered.filter((p) => (p.acf?.price || 0) >= state.filters.minPrice!)
      }
      if (state.filters.maxPrice) {
        filtered = filtered.filter((p) => (p.acf?.price || 0) <= state.filters.maxPrice!)
      }

      // Filtre par surface
      if (state.filters.minSurface) {
        filtered = filtered.filter((p) => (p.acf?.surface || 0) >= state.filters.minSurface!)
      }
      if (state.filters.maxSurface) {
        filtered = filtered.filter((p) => (p.acf?.surface || 0) <= state.filters.maxSurface!)
      }

      // Filtre par localisation
      if (state.filters.location) {
        filtered = filtered.filter((p) =>
          p.acf?.location?.toLowerCase().includes(state.filters.location!.toLowerCase())
        )
      }

      // Filtre par recherche textuelle
      if (state.filters.search) {
        const searchLower = state.filters.search.toLowerCase()
        filtered = filtered.filter(
          (p) =>
            p.title.rendered.toLowerCase().includes(searchLower) ||
            p.acf?.location?.toLowerCase().includes(searchLower) ||
            p.excerpt.rendered.toLowerCase().includes(searchLower)
        )
      }

      return filtered
    },

    /**
     * Nombre de biens filtrés
     */
    filteredCount: (state) => {
      let filtered = [...state.properties]

      if (state.filters.type) {
        filtered = filtered.filter(
          (p) => p.acf?.type?.toLowerCase() === state.filters.type?.toLowerCase()
        )
      }
      if (state.filters.minPrice) {
        filtered = filtered.filter((p) => (p.acf?.price || 0) >= state.filters.minPrice!)
      }
      if (state.filters.maxPrice) {
        filtered = filtered.filter((p) => (p.acf?.price || 0) <= state.filters.maxPrice!)
      }
      if (state.filters.minSurface) {
        filtered = filtered.filter((p) => (p.acf?.surface || 0) >= state.filters.minSurface!)
      }
      if (state.filters.maxSurface) {
        filtered = filtered.filter((p) => (p.acf?.surface || 0) <= state.filters.maxSurface!)
      }
      if (state.filters.location) {
        filtered = filtered.filter((p) =>
          p.acf?.location?.toLowerCase().includes(state.filters.location!.toLowerCase())
        )
      }
      if (state.filters.search) {
        const searchLower = state.filters.search.toLowerCase()
        filtered = filtered.filter(
          (p) =>
            p.title.rendered.toLowerCase().includes(searchLower) ||
            p.acf?.location?.toLowerCase().includes(searchLower) ||
            p.excerpt.rendered.toLowerCase().includes(searchLower)
        )
      }

      return filtered.length
    },

    /**
     * Vérifie si des filtres sont actifs
     */
    hasActiveFilters: (state) => {
      return Object.values(state.filters).some((value) => value !== undefined)
    },

    /**
     * Types de biens disponibles (pour le filtre)
     */
    availableTypes: (state) => {
      const types = state.properties
        .map((p) => p.acf?.type)
        .filter((type): type is string => !!type)
      return [...new Set(types)]
    },

    /**
     * Localisations disponibles (pour le filtre)
     */
    availableLocations: (state) => {
      const locations = state.properties
        .map((p) => p.acf?.location)
        .filter((loc): loc is string => !!loc)
      return [...new Set(locations)]
    },
  },

  actions: {
    /**
     * Récupère tous les biens depuis l'API WordPress
     */
    async fetchProperties(page = 1) {
      this.loading = true
      this.error = null
      this.currentPage = page

      try {
        const config = useRuntimeConfig()
        const apiUrl = config.public.apiUrl

        const response = await $fetch<Property[]>(
          `${apiUrl}/wp-json/wp/v2/properties`,
          {
            params: {
              page,
              per_page: this.perPage,
              _embed: true, // Inclure les médias
            },
          }
        )

        this.properties = response
        
        // Récupérer les headers de pagination (si disponibles)
        // Note: $fetch ne retourne pas les headers directement, 
        // vous pouvez utiliser useFetch pour avoir accès aux headers
        
      } catch (err: any) {
        this.error = err.message || 'Erreur lors du chargement des biens'
        console.error('Erreur fetchProperties:', err)
      } finally {
        this.loading = false
      }
    },

    /**
     * Récupère un bien par son slug
     */
    async fetchPropertyBySlug(slug: string) {
      this.loadingDetail = true
      this.error = null

      try {
        const config = useRuntimeConfig()
        const apiUrl = config.public.apiUrl

        const response = await $fetch<Property[]>(
          `${apiUrl}/wp-json/wp/v2/properties`,
          {
            params: {
              slug,
              _embed: true,
            },
          }
        )

        if (response && response.length > 0) {
          if (response[0] !== undefined) {
            this.currentProperty = response[0]
            return response[0]
          } else {
            this.currentProperty = null
            return null
          }
        } else {
          throw new Error('Bien non trouvé')
        }
      } catch (err: any) {
        this.error = err.message || 'Erreur lors du chargement du bien'
        console.error('Erreur fetchPropertyBySlug:', err)
        return null
      } finally {
        this.loadingDetail = false
      }
    },

    /**
     * Met à jour les filtres
     */
    updateFilters(newFilters: Partial<PropertyFilters>) {
      this.filters = { ...this.filters, ...newFilters }
    },

    /**
     * Réinitialise les filtres
     */
    resetFilters() {
      this.filters = {
        type: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        minSurface: undefined,
        maxSurface: undefined,
        location: undefined,
        search: undefined,
      }
    },

    /**
     * Réinitialise le store complet
     */
    reset() {
      this.properties = []
      this.currentProperty = null
      this.resetFilters()
      this.loading = false
      this.loadingDetail = false
      this.error = null
      this.currentPage = 1
      this.totalPages = 1
      this.totalProperties = 0
    },
  },
})