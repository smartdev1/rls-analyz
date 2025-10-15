<template>
  <div class="min-h-screen bg-neutral">
    <!-- Header de la page -->
    <section class="bg-gradient-to-br from-primary to-secondary py-16">
      <div class="container-modeli text-center">
        <h1 v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          {{ $t('blog.title') }}
        </h1>
        <p v-motion :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
          {{ $t('blog.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Contenu principal -->
    <section class="spacing-section">
      <div class="container-modeli">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Articles principaux -->
          <main class="flex-1">
            <!-- Articles à la une -->

            <!-- Barre de recherche et filtres -->
            <div class="flex flex-col sm:flex-row gap-4 mb-8">
              <!-- Recherche -->
              <div class="flex-1">
                <InputField v-model="searchQuery" type="text" :placeholder="$t('blog.search.placeholder')"
                  @update:model-value="handleSearch" />
              </div>

              <!-- Tri -->
              <select v-model="sortBy" @change="handleSort"
                class="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all">
                <option value="recent">{{ $t('blog.sort.recent') }}</option>
                <option value="oldest">{{ $t('blog.sort.oldest') }}</option>
                <option value="popular">{{ $t('blog.sort.popular') }}</option>
              </select>
            </div>

            <!-- Loader -->
            <div v-if="blogStore.loading" class="flex justify-center py-20">
              <Loader variant="circle" size="lg" :message="$t('blog.loading')" />
            </div>

            <!-- Erreur -->
            <div v-else-if="blogStore.error" class="text-center py-20">
              <div class="card-modeli p-8 max-w-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-red-500 mx-auto mb-4" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-red-600 font-semibold mb-2">{{ blogStore.error }}</p>
                <button @click="reloadPosts" class="btn-primary mt-4">
                  {{ $t('blog.retry') }}
                </button>
              </div>
            </div>

            <!-- Aucun résultat -->
            <div v-else-if="displayedPosts.length === 0" class="text-center py-20">
              <div class="card-modeli p-8 max-w-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p class="text-gray-600 mb-4">{{ $t('blog.noResults') }}</p>
                <button @click="resetSearch" class="btn-outline">
                  {{ $t('blog.resetSearch') }}
                </button>
              </div>
            </div>

            <!-- Grille des articles -->
            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CardBlog v-for="post in displayedPosts" :key="post.id" :title="post.title.rendered"
                :excerpt="post.excerpt.rendered"
                :image="post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'" :date="post.date"
                :category="post._embedded?.['wp:term']?.[0]?.[0]?.name" :read-time="post.acf?.read_time"
                :author="post._embedded?.author?.[0]?.name"
                :author-avatar="post._embedded?.author?.[0]?.avatar_urls?.['96']"
                @click="navigateTo(localePath({ name: 'blog-slug', params: { slug: post.slug } }))" />
            </div>

            <!-- Pagination -->
            <div v-if="blogStore.totalPages > 1" class="flex justify-center mt-12">
              <div class="flex items-center gap-2">
                <button @click="loadPage(blogStore.currentPage - 1)" :disabled="blogStore.currentPage === 1"
                  class="px-4 py-2 rounded-lg bg-white border-2 border-gray-200 hover:border-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {{ $t('blog.pagination.previous') }}
                </button>

                <span class="px-4 py-2 text-sm text-gray-600">
                  {{ $t('blog.pagination.page', {
                    current: blogStore.currentPage,
                    total: blogStore.totalPages
                  }) }}
                </span>

                <button @click="loadPage(blogStore.currentPage + 1)"
                  :disabled="blogStore.currentPage === blogStore.totalPages"
                  class="px-4 py-2 rounded-lg bg-white border-2 border-gray-200 hover:border-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {{ $t('blog.pagination.next') }}
                </button>
              </div>
            </div>

            <!-- Articles en vedette -->
            <br/>
            <div v-if="blogStore.featuredPosts.length > 0" class="mb-12">
              <h2 class="text-2xl font-heading font-bold text-primary mb-6">
                {{ $t('blog.featured.title') }}
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CardBlog v-for="post in blogStore.featuredPosts" :key="post.id" :title="post.title.rendered"
                  :excerpt="post.excerpt.rendered"
                  :image="post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'" :date="post.date"
                  :category="post._embedded?.['wp:term']?.[0]?.[0]?.name" :read-time="post.acf?.read_time"
                  :author="post._embedded?.author?.[0]?.name"
                  :author-avatar="post._embedded?.author?.[0]?.avatar_urls?.['96']"
                  @click="navigateTo(localePath({ name: 'blog-slug', params: { slug: post.slug } }))" />
              </div>
            </div>
          </main>

          <!-- Sidebar -->
          <aside class="lg:w-80 flex-shrink-0 space-y-6">
            <!-- Catégories -->
            <div v-motion :initial="{ opacity: 0, x: 50 }" :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
              class="card-modeli p-6 sticky top-24">
              <h3 class="text-xl font-heading font-bold text-primary mb-4">
                {{ $t('blog.categories.title') }}
              </h3>

              <!-- Loader catégories -->
              <div v-if="blogStore.loadingCategories" class="flex justify-center py-4">
                <Loader variant="spinner" size="sm" />
              </div>

              <!-- Liste des catégories -->
              <ul v-else class="space-y-3">
                <li>
                  <button @click="selectCategory(undefined)" :class="[
                    'w-full text-left px-4 py-2 rounded-lg transition-all',
                    !selectedCategory
                      ? 'bg-accent text-primary font-semibold'
                      : 'hover:bg-neutral text-gray-700'
                  ]">
                    <span>{{ $t('blog.categories.all') }}</span>
                    <span class="float-right text-gray-400">({{ blogStore.posts.length }})</span>
                  </button>
                </li>
                <li v-for="category in blogStore.categories" :key="category.id">
                  <button @click="selectCategory(category.id)" :class="[
                    'w-full text-left px-4 py-2 rounded-lg transition-all',
                    selectedCategory === category.id
                      ? 'bg-accent text-primary font-semibold'
                      : 'hover:bg-neutral text-gray-700'
                  ]">
                    <span>{{ category.name }}</span>
                    <span class="float-right text-gray-400">({{ category.count }})</span>
                  </button>
                </li>
              </ul>
            </div>

            <!-- Articles récents -->
            <div v-motion :initial="{ opacity: 0, x: 50 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }" class="card-modeli p-6">
              <h3 class="text-xl font-heading font-bold text-primary mb-4">
                {{ $t('blog.recent.title') }}
              </h3>
              <ul class="space-y-4">
                <li v-for="post in blogStore.recentPosts.slice(0, 5)" :key="post.id">
                  <NuxtLink :to="localePath({ name: 'blog-slug', params: { slug: post.slug } })" class="block group">
                    <h4
                      class="font-semibold text-sm text-primary group-hover:text-accent transition-colors line-clamp-2 mb-1">
                      {{ post.title.rendered }}
                    </h4>
                    <time class="text-xs text-gray-500">
                      {{ formatDate(post.date) }}
                    </time>
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Newsletter -->
            <div v-motion :initial="{ opacity: 0, x: 50 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 400 } }"
              class="card-modeli p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 class="text-xl font-heading font-bold text-primary mb-3">
                {{ $t('blog.newsletter.title') }}
              </h3>
              <p class="text-sm text-gray-600 mb-4">
                {{ $t('blog.newsletter.description') }}
              </p>
              <form @submit.prevent="handleNewsletterSubmit" class="space-y-3">
                <InputField v-model="newsletterEmail" type="email" :placeholder="$t('blog.newsletter.placeholder')"
                  :required="true" />
                <ButtonCTA type="submit" class="w-full" :disabled="subscribing">
                  {{ subscribing ? $t('blog.newsletter.subscribing') : $t('blog.newsletter.subscribe') }}
                </ButtonCTA>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useBlogStore } from '@/store/useBlogStore'
import { useLangStore } from '@/store/useLangStore'
import { useUIStore } from '@/store/useUIStore'
import CardBlog from '@/components/ui/CardBlog.vue'
import InputField from '@/components/ui/InputField.vue'
import ButtonCTA from '@/components/ui/ButtonCTA.vue'
import Loader from '@/components/ui/Loader.vue'

// Stores
const blogStore = useBlogStore()
const langStore = useLangStore()
const uiStore = useUIStore()

// i18n
const { t } = useI18n()
const localePath = useLocalePath()

// SEO
useHead({
  title: t('blog.meta.title'),
  meta: [
    { name: 'description', content: t('blog.meta.description') },
    { property: 'og:title', content: t('blog.meta.title') },
    { property: 'og:description', content: t('blog.meta.description') }
  ]
})

// État
const searchQuery = ref('')
const selectedCategory = ref<number | undefined>(undefined)
const sortBy = ref('recent')
const newsletterEmail = ref('')
const subscribing = ref(false)

// Charger les données au montage
onMounted(async () => {
  await Promise.all([
    blogStore.fetchPosts(),
    blogStore.fetchCategories(),
    blogStore.fetchFeaturedPosts()
  ])
})

// Articles affichés après filtres et tri
const displayedPosts = computed(() => {
  let posts = [...blogStore.filteredPosts]

  // Tri
  switch (sortBy.value) {
    case 'oldest':
      posts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      break
    case 'popular':
      posts.sort((a, b) => (b.acf?.featured ? 1 : 0) - (a.acf?.featured ? 1 : 0))
      break
    default: // 'recent'
      posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  return posts
})

// Gestion de la recherche
const handleSearch = () => {
  blogStore.updateFilters({ search: searchQuery.value || undefined })
}

const resetSearch = () => {
  searchQuery.value = ''
  selectedCategory.value = undefined
  blogStore.resetFilters()
}

// Gestion du tri
const handleSort = () => {
  // Le tri est géré par le computed displayedPosts
}

// Sélection de catégorie
const selectCategory = (categoryId: number | undefined) => {
  selectedCategory.value = categoryId
  blogStore.updateFilters({ category: categoryId })
}

// Pagination
const loadPage = async (page: number) => {
  await blogStore.fetchPosts(page)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Recharger en cas d'erreur
const reloadPosts = async () => {
  await blogStore.fetchPosts()
}

// Formatage de date
const formatDate = (date: string) => {
  return langStore.formatDate(new Date(date), { dateStyle: 'medium' })
}

// Newsletter
const handleNewsletterSubmit = async () => {
  if (!newsletterEmail.value) return

  subscribing.value = true

  try {
    // Simuler l'inscription (remplacer par votre API)
    await new Promise(resolve => setTimeout(resolve, 1500))

    uiStore.notifySuccess(t('blog.newsletter.success'))
    newsletterEmail.value = ''
  } catch (error) {
    uiStore.notifyError(t('blog.newsletter.error'))
  } finally {
    subscribing.value = false
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>