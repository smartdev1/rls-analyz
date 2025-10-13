import { defineStore } from 'pinia'

// Types pour les articles de blog
export interface BlogPost {
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
  date: string
  modified: string
  author: number
  featured_media?: number
  categories: number[]
  tags: number[]
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
    author?: Array<{
      id: number
      name: string
      avatar_urls?: {
        '96': string
      }
    }>
    'wp:term'?: Array<Array<{
      id: number
      name: string
      slug: string
    }>>
  }
  acf?: {
    read_time?: number
    featured?: boolean
  }
}

export interface BlogCategory {
  id: number
  name: string
  slug: string
  count: number
}

export interface BlogFilters {
  category?: number
  search?: string
  author?: number
  year?: number
  month?: number
}

export const useBlogStore = defineStore('blog', {
  state: () => ({
    // Liste de tous les articles
    posts: [] as BlogPost[],
    
    // Article actuellement consulté
    currentPost: null as BlogPost | null,
    
    // Articles à la une
    featuredPosts: [] as BlogPost[],
    
    // Catégories disponibles
    categories: [] as BlogCategory[],
    
    // Filtres actifs
    filters: {
      category: undefined,
      search: undefined,
      author: undefined,
      year: undefined,
      month: undefined,
    } as BlogFilters,
    
    // États de chargement
    loading: false,
    loadingDetail: false,
    loadingCategories: false,
    
    // Erreurs
    error: null as string | null,
    
    // Pagination
    currentPage: 1,
    perPage: 9,
    totalPages: 1,
    totalPosts: 0,
  }),

  getters: {
    /**
     * Articles filtrés selon les critères actifs
     */
    filteredPosts: (state) => {
      let filtered = [...state.posts]

      // Filtre par catégorie
      if (state.filters.category) {
        filtered = filtered.filter((post) =>
          post.categories.includes(state.filters.category!)
        )
      }

      // Filtre par recherche textuelle
      if (state.filters.search) {
        const searchLower = state.filters.search.toLowerCase()
        filtered = filtered.filter(
          (post) =>
            post.title.rendered.toLowerCase().includes(searchLower) ||
            post.excerpt.rendered.toLowerCase().includes(searchLower) ||
            post.content.rendered.toLowerCase().includes(searchLower)
        )
      }

      // Filtre par auteur
      if (state.filters.author) {
        filtered = filtered.filter((post) => post.author === state.filters.author)
      }

      // Filtre par année
      if (state.filters.year) {
        filtered = filtered.filter((post) => {
          const postYear = new Date(post.date).getFullYear()
          return postYear === state.filters.year
        })
      }

      // Filtre par mois
      if (state.filters.month) {
        filtered = filtered.filter((post) => {
          const postMonth = new Date(post.date).getMonth() + 1
          return postMonth === state.filters.month
        })
      }

      return filtered
    },

    /**
     * Nombre d'articles filtrés
     */
    filteredCount: (state) => {
      let filtered = [...state.posts]

      if (state.filters.category) {
        filtered = filtered.filter((post) =>
          post.categories.includes(state.filters.category!)
        )
      }

      if (state.filters.search) {
        const searchLower = state.filters.search.toLowerCase()
        filtered = filtered.filter(
          (post) =>
            post.title.rendered.toLowerCase().includes(searchLower) ||
            post.excerpt.rendered.toLowerCase().includes(searchLower) ||
            post.content.rendered.toLowerCase().includes(searchLower)
        )
      }

      if (state.filters.author) {
        filtered = filtered.filter((post) => post.author === state.filters.author)
      }

      if (state.filters.year) {
        filtered = filtered.filter((post) => {
          const postYear = new Date(post.date).getFullYear()
          return postYear === state.filters.year
        })
      }

      if (state.filters.month) {
        filtered = filtered.filter((post) => {
          const postMonth = new Date(post.date).getMonth() + 1
          return postMonth === state.filters.month
        })
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
     * Articles récents (5 derniers)
     */
    recentPosts: (state) => {
      return [...state.posts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5)
    },

    /**
     * Articles populaires (si vous avez un champ views dans ACF)
     */
    popularPosts: (state) => {
      return [...state.posts]
        .filter((post) => post.acf?.featured)
        .slice(0, 5)
    },

    /**
     * Articles par catégorie
     */
    postsByCategory: (state) => {
      return (categoryId: number) => {
        return state.posts.filter((post) => post.categories.includes(categoryId))
      }
    },

    /**
     * Obtenir une catégorie par slug
     */
    getCategoryBySlug: (state) => {
      return (slug: string) => {
        return state.categories.find((cat) => cat.slug === slug)
      }
    },
  },

  actions: {
    /**
     * Récupère tous les articles depuis l'API WordPress
     */
    async fetchPosts(page = 1) {
      this.loading = true
      this.error = null
      this.currentPage = page

      try {
        const config = useRuntimeConfig()
        const apiUrl = config.public.apiUrl

        const response = await $fetch<BlogPost[]>(
          `${apiUrl}/wp-json/wp/v2/posts`,
          {
            params: {
              page,
              per_page: this.perPage,
              _embed: true, // Inclure les médias et auteurs
              orderby: 'date',
              order: 'desc',
            },
          }
        )

        this.posts = response
        
      } catch (err: any) {
        this.error = err.message || 'Erreur lors du chargement des articles'
        console.error('Erreur fetchPosts:', err)
      } finally {
        this.loading = false
      }
    },

    /**
     * Récupère un article par son slug
     */
    async fetchPostBySlug(slug: string) {
      this.loadingDetail = true
      this.error = null

      try {
        const config = useRuntimeConfig()
        const apiUrl = config.public.apiUrl

        const response = await $fetch<BlogPost[]>(
          `${apiUrl}/wp-json/wp/v2/posts`,
          {
            params: {
              slug,
              _embed: true,
            },
          }
        )

        if (response && response.length > 0) {
          this.currentPost = response[0] ?? null
          return response[0] ?? null
        } else {
          throw new Error('Article non trouvé')
        }
      } catch (err: any) {
        this.error = err.message || 'Erreur lors du chargement de l\'article'
        console.error('Erreur fetchPostBySlug:', err)
        return null
      } finally {
        this.loadingDetail = false
      }
    },

    /**
     * Récupère les articles à la une
     */
    async fetchFeaturedPosts() {
      try {
        const config = useRuntimeConfig()
        const apiUrl = config.public.apiUrl

        const response = await $fetch<BlogPost[]>(
          `${apiUrl}/wp-json/wp/v2/posts`,
          {
            params: {
              per_page: 3,
              _embed: true,
              orderby: 'date',
              order: 'desc',
              // Vous pouvez ajouter un filtre meta_key si vous avez un champ ACF 'featured'
            },
          }
        )

        this.featuredPosts = response
      } catch (err: any) {
        console.error('Erreur fetchFeaturedPosts:', err)
      }
    },

    /**
     * Récupère toutes les catégories
     */
    async fetchCategories() {
      this.loadingCategories = true

      try {
        const config = useRuntimeConfig()
        const apiUrl = config.public.apiUrl

        const response = await $fetch<BlogCategory[]>(
          `${apiUrl}/wp-json/wp/v2/categories`,
          {
            params: {
              per_page: 100, // Récupérer toutes les catégories
              orderby: 'count',
              order: 'desc',
            },
          }
        )

        this.categories = response
      } catch (err: any) {
        console.error('Erreur fetchCategories:', err)
      } finally {
        this.loadingCategories = false
      }
    },

    /**
     * Récupère les articles d'une catégorie spécifique
     */
    async fetchPostsByCategory(categoryId: number, page = 1) {
      this.loading = true
      this.error = null
      this.currentPage = page

      try {
        const config = useRuntimeConfig()
        const apiUrl = config.public.apiUrl

        const response = await $fetch<BlogPost[]>(
          `${apiUrl}/wp-json/wp/v2/posts`,
          {
            params: {
              categories: categoryId,
              page,
              per_page: this.perPage,
              _embed: true,
              orderby: 'date',
              order: 'desc',
            },
          }
        )

        this.posts = response
      } catch (err: any) {
        this.error = err.message || 'Erreur lors du chargement des articles'
        console.error('Erreur fetchPostsByCategory:', err)
      } finally {
        this.loading = false
      }
    },

    /**
     * Recherche d'articles
     */
    async searchPosts(query: string) {
      this.loading = true
      this.error = null

      try {
        const config = useRuntimeConfig()
        const apiUrl = config.public.apiUrl

        const response = await $fetch<BlogPost[]>(
          `${apiUrl}/wp-json/wp/v2/posts`,
          {
            params: {
              search: query,
              per_page: this.perPage,
              _embed: true,
            },
          }
        )

        this.posts = response
      } catch (err: any) {
        this.error = err.message || 'Erreur lors de la recherche'
        console.error('Erreur searchPosts:', err)
      } finally {
        this.loading = false
      }
    },

    /**
     * Met à jour les filtres
     */
    updateFilters(newFilters: Partial<BlogFilters>) {
      this.filters = { ...this.filters, ...newFilters }
    },

    /**
     * Réinitialise les filtres
     */
    resetFilters() {
      this.filters = {
        category: undefined,
        search: undefined,
        author: undefined,
        year: undefined,
        month: undefined,
      }
    },

    /**
     * Réinitialise le store complet
     */
    reset() {
      this.posts = []
      this.currentPost = null
      this.featuredPosts = []
      this.categories = []
      this.resetFilters()
      this.loading = false
      this.loadingDetail = false
      this.loadingCategories = false
      this.error = null
      this.currentPage = 1
      this.totalPages = 1
      this.totalPosts = 0
    },
  },
})