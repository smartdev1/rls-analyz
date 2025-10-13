<template>
  <div class="min-h-screen bg-neutral">
    <!-- Header de la page -->
    <section class="bg-gradient-to-br from-primary to-secondary py-16">
      <div class="container-modeli text-center">
        <h1
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
        >
          {{ $t('properties.title') }}
        </h1>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
        >
          {{ $t('properties.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Filtres et Résultats -->
    <section class="spacing-section">
      <div class="container-modeli">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Sidebar Filtres -->
          <aside class="lg:w-80 flex-shrink-0">
            <div class="card-modeli p-6 sticky top-24 space-y-6">
              <!-- Titre filtres -->
              <div class="flex items-center justify-between">
                <h2 class="text-xl font-heading font-bold text-primary">
                  {{ $t('properties.filters.title') }}
                </h2>
                <button
                  v-if="propertyStore.hasActiveFilters"
                  @click="resetFilters"
                  class="text-sm text-accent hover:text-secondary transition-colors"
                >
                  {{ $t('properties.filters.reset') }}
                </button>
              </div>

              <!-- Recherche -->
              <div>
                <label class="block text-sm font-semibold text-text mb-2">
                  {{ $t('properties.filters.search') }}
                </label>
                <InputField
                  v-model="searchQuery"
                  type="text"
                  :placeholder="$t('properties.filters.searchPlaceholder')"
                  @update:model-value="updateSearch"
                />
              </div>

              <!-- Type de bien -->
              <div>
                <label class="block text-sm font-semibold text-text mb-2">
                  {{ $t('properties.filters.type') }}
                </label>
                <select
                  v-model="selectedType"
                  @change="updateType"
                  class="input-modeli"
                >
                  <option value="">{{ $t('properties.filters.allTypes') }}</option>
                  <option
                    v-for="type in propertyStore.availableTypes"
                    :key="type"
                    :value="type"
                  >
                    {{ type }}
                  </option>
                </select>
              </div>

              <!-- Prix -->
              <div>
                <label class="block text-sm font-semibold text-text mb-2">
                  {{ $t('properties.filters.price') }}
                </label>
                <div class="grid grid-cols-2 gap-3">
                  <InputField
                    v-model="minPrice"
                    type="number"
                    :placeholder="$t('properties.filters.minPrice')"
                    @update:model-value="updatePriceRange"
                  />
                  <InputField
                    v-model="maxPrice"
                    type="number"
                    :placeholder="$t('properties.filters.maxPrice')"
                    @update:model-value="updatePriceRange"
                  />
                </div>
              </div>

              <!-- Surface -->
              <div>
                <label class="block text-sm font-semibold text-text mb-2">
                  {{ $t('properties.filters.surface') }} (m²)
                </label>
                <div class="grid grid-cols-2 gap-3">
                  <InputField
                    v-model="minSurface"
                    type="number"
                    :placeholder="$t('properties.filters.minSurface')"
                    @update:model-value="updateSurfaceRange"
                  />
                  <InputField
                    v-model="maxSurface"
                    type="number"
                    :placeholder="$t('properties.filters.maxSurface')"
                    @update:model-value="updateSurfaceRange"
                  />
                </div>
              </div>

              <!-- Localisation -->
              <div>
                <label class="block text-sm font-semibold text-text mb-2">
                  {{ $t('properties.filters.location') }}
                </label>
                <select
                  v-model="selectedLocation"
                  @change="updateLocation"
                  class="input-modeli"
                >
                  <option value="">{{ $t('properties.filters.allLocations') }}</option>
                  <option
                    v-for="location in propertyStore.availableLocations"
                    :key="location"
                    :value="location"
                  >
                    {{ location }}
                  </option>
                </select>
              </div>

              <!-- Nombre de résultats -->
              <div class="pt-4 border-t border-gray-200">
                <p class="text-sm text-gray-600">
                  <span class="font-semibold text-primary">
                    {{ propertyStore.filteredCount }}
                  </span>
                  {{ $t('properties.filters.results', { count: propertyStore.filteredCount }) }}
                </p>
              </div>
            </div>
          </aside>

          <!-- Liste des biens -->
          <main class="flex-1">
            <!-- Barre d'actions -->
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <!-- Tri -->
              <div class="flex items-center gap-3">
                <label class="text-sm font-semibold text-text">
                  {{ $t('properties.sort.label') }}
                </label>
                <select
                  v-model="sortBy"
                  @change="handleSort"
                  class="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all"
                >
                  <option value="recent">{{ $t('properties.sort.recent') }}</option>
                  <option value="price-asc">{{ $t('properties.sort.priceAsc') }}</option>
                  <option value="price-desc">{{ $t('properties.sort.priceDesc') }}</option>
                  <option value="surface-asc">{{ $t('properties.sort.surfaceAsc') }}</option>
                  <option value="surface-desc">{{ $t('properties.sort.surfaceDesc') }}</option>
                </select>
              </div>

              <!-- Vue grille/liste -->
              <div class="flex items-center gap-2">
                <button
                  @click="viewMode = 'grid'"
                  :class="[
                    'p-2 rounded-lg transition-all',
                    viewMode === 'grid'
                      ? 'bg-accent text-primary'
                      : 'bg-white text-gray-400 hover:text-text'
                  ]"
                  aria-label="Vue grille"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button
                  @click="viewMode = 'list'"
                  :class="[
                    'p-2 rounded-lg transition-all',
                    viewMode === 'list'
                      ? 'bg-accent text-primary'
                      : 'bg-white text-gray-400 hover:text-text'
                  ]"
                  aria-label="Vue liste"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Loader -->
            <div v-if="propertyStore.loading" class="flex justify-center py-20">
              <Loader variant="logo" size="xl" message="Chargement des biens..." />
            </div>

            <!-- Erreur -->
            <div v-else-if="propertyStore.error" class="text-center py-20">
              <div class="card-modeli p-8 max-w-md mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 text-red-500 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p class="text-red-600 font-semibold mb-2">{{ propertyStore.error }}</p>
                <button @click="reloadProperties" class="btn-primary mt-4">
                  {{ $t('properties.retry') }}
                </button>
              </div>
            </div>

            <!-- Aucun résultat -->
            <div v-else-if="sortedProperties.length === 0" class="text-center py-20">
              <div class="card-modeli p-8 max-w-md mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <p class="text-gray-600 mb-4">{{ $t('properties.noResults') }}</p>
                <button @click="resetFilters" class="btn-outline">
                  {{ $t('properties.filters.reset') }}
                </button>
              </div>
            </div>

            <!-- Grille des biens -->
            <div
              v-else
              :class="[
                'grid gap-8',
                viewMode === 'grid'
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1'
              ]"
            >
              <CardProperty
                v-for="property in sortedProperties"
                :key="property.id"
                :title="property.title.rendered"
                :image="property._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'"
                :location="property.acf?.location || $t('properties.noLocation')"
                :price="formatPrice(property.acf?.price)"
                @click="navigateTo(localePath({name: 'biens-slug', params: { slug: property.slug }}))"
              />
            </div>

            <!-- Pagination (si nécessaire) -->
            <div v-if="propertyStore.totalPages > 1" class="flex justify-center mt-12">
              <div class="flex items-center gap-2">
                <button
                  @click="loadPage(propertyStore.currentPage - 1)"
                  :disabled="propertyStore.currentPage === 1"
                  class="px-4 py-2 rounded-lg bg-white border-2 border-gray-200 hover:border-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {{ $t('properties.pagination.previous') }}
                </button>
                
                <span class="px-4 py-2 text-sm text-gray-600">
                  {{ $t('properties.pagination.page', { 
                    current: propertyStore.currentPage, 
                    total: propertyStore.totalPages 
                  }) }}
                </span>
                
                <button
                  @click="loadPage(propertyStore.currentPage + 1)"
                  :disabled="propertyStore.currentPage === propertyStore.totalPages"
                  class="px-4 py-2 rounded-lg bg-white border-2 border-gray-200 hover:border-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {{ $t('properties.pagination.next') }}
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { usePropertyStore } from '@/store/usePropertyStore'
import { useLangStore } from '@/store/useLangStore'
import type { Property } from '@/store/usePropertyStore'
import InputField from '@/components/ui/InputField.vue'
import CardProperty from '@/components/ui/CardProperty.vue'
import Loader from '@/components/ui/Loader.vue'

// Stores
const propertyStore = usePropertyStore()
const langStore = useLangStore()

// i18n
const { t } = useI18n()
const localePath = useLocalePath()

// SEO
useHead({
  title: t('properties.meta.title'),
  meta: [
    { name: 'description', content: t('properties.meta.description') },
    { property: 'og:title', content: t('properties.meta.title') },
    { property: 'og:description', content: t('properties.meta.description') }
  ]
})

// State des filtres
const searchQuery = ref('')
const selectedType = ref('')
const minPrice = ref<number | ''>('')
const maxPrice = ref<number | ''>('')
const minSurface = ref<number | ''>('')
const maxSurface = ref<number | ''>('')
const selectedLocation = ref('')

// Vue et tri
const viewMode = ref<'grid' | 'list'>('grid')
const sortBy = ref('recent')

// Charger les biens au montage
onMounted(async () => {
  await propertyStore.fetchProperties()
})

// Mise à jour des filtres
const updateSearch = () => {
  propertyStore.updateFilters({ search: searchQuery.value || undefined })
}

const updateType = () => {
  propertyStore.updateFilters({ type: selectedType.value || undefined })
}

const updatePriceRange = () => {
  propertyStore.updateFilters({
    minPrice: minPrice.value ? Number(minPrice.value) : undefined,
    maxPrice: maxPrice.value ? Number(maxPrice.value) : undefined
  })
}

const updateSurfaceRange = () => {
  propertyStore.updateFilters({
    minSurface: minSurface.value ? Number(minSurface.value) : undefined,
    maxSurface: maxSurface.value ? Number(maxSurface.value) : undefined
  })
}

const updateLocation = () => {
  propertyStore.updateFilters({ location: selectedLocation.value || undefined })
}

// Réinitialiser les filtres
const resetFilters = () => {
  searchQuery.value = ''
  selectedType.value = ''
  minPrice.value = ''
  maxPrice.value = ''
  minSurface.value = ''
  maxSurface.value = ''
  selectedLocation.value = ''
  propertyStore.resetFilters()
}

// Tri des biens
const sortedProperties = computed(() => {
  let sorted = [...propertyStore.filteredProperties]

  switch (sortBy.value) {
    case 'price-asc':
      sorted.sort((a, b) => (a.acf?.price || 0) - (b.acf?.price || 0))
      break
    case 'price-desc':
      sorted.sort((a, b) => (b.acf?.price || 0) - (a.acf?.price || 0))
      break
    case 'surface-asc':
      sorted.sort((a, b) => (a.acf?.surface || 0) - (b.acf?.surface || 0))
      break
    case 'surface-desc':
      sorted.sort((a, b) => (b.acf?.surface || 0) - (a.acf?.surface || 0))
      break
    default:
      // 'recent' - déjà trié par date
      break
  }

  return sorted
})

const handleSort = () => {
  // Le tri est géré par le computed sortedProperties
}

// Pagination
const loadPage = async (page: number) => {
  await propertyStore.fetchProperties(page)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Recharger les biens en cas d'erreur
const reloadProperties = async () => {
  await propertyStore.fetchProperties()
}

// Helper pour formater le prix
const formatPrice = (price?: number) => {
  if (!price) return t('properties.priceOnRequest')
  return langStore.formatPrice(price)
}
</script>

<style scoped>
/* Sticky sidebar avec offset pour la navbar */
.sticky {
  position: sticky;
}
</style>