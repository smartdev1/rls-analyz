<template>
  <div class="min-h-screen bg-neutral">
    <!-- Loader -->
    <div v-if="blogStore.loadingDetail" class="flex justify-center items-center min-h-screen">
      <Loader variant="logo" size="xl" :message="$t('blogPost.loading')" />
    </div>

    <!-- Erreur / Article non trouvé -->
    <div v-else-if="!post" class="container-modeli spacing-section text-center">
      <div class="card-modeli p-12 max-w-lg mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-20 w-20 text-gray-400 mx-auto mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 class="text-2xl font-heading font-bold text-primary mb-4">
          {{ $t('blogPost.notFound.title') }}
        </h2>
        <p class="text-gray-600 mb-6">
          {{ $t('blogPost.notFound.message') }}
        </p>
        <ButtonCTA @click="navigateTo(localePath({name: 'blog'}))">
          {{ $t('blogPost.notFound.backToList') }}
        </ButtonCTA>
      </div>
    </div>

    <!-- Contenu de l'article -->
    <div v-else>
      <!-- Image à la une -->
      <section
        v-if="post._embedded?.['wp:featuredmedia']?.[0]"
        class="relative h-[500px] bg-gray-900"
      >
        <img
          :src="post._embedded['wp:featuredmedia'][0].source_url"
          :alt="post.title.rendered"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <!-- Bouton retour -->
        <div class="absolute top-6 left-6">
          <button
            @click="navigateTo(localePath({name: 'blog'}))"
            class="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-xl transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {{ $t('blogPost.back') }}
          </button>
        </div>
      </section>

      <!-- Contenu principal -->
      <section class="container-modeli spacing-section">
        <div class="max-w-4xl mx-auto">
          <!-- Header de l'article -->
          <header
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
            class="mb-10"
          >
            <!-- Catégories -->
            <div v-if="post._embedded?.['wp:term']?.[0]" class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="category in post._embedded['wp:term'][0]"
                :key="category.id"
                class="badge-modeli"
              >
                {{ category.name }}
              </span>
            </div>

            <!-- Titre -->
            <h1 class="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              {{ post.title.rendered }}
            </h1>

            <!-- Métadonnées -->
            <div class="flex flex-wrap items-center gap-6 text-gray-600">
              <!-- Auteur -->
              <div v-if="post._embedded?.author?.[0]" class="flex items-center gap-3">
                <img
                  v-if="post._embedded.author[0].avatar_urls?.['96']"
                  :src="post._embedded.author[0].avatar_urls['96']"
                  :alt="post._embedded.author[0].name"
                  class="w-12 h-12 rounded-full"
                />
                <div v-else class="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center font-bold text-primary">
                  {{ post._embedded.author[0].name.charAt(0) }}
                </div>
                <div>
                  <p class="font-semibold text-primary">{{ post._embedded.author[0].name }}</p>
                  <time class="text-sm text-gray-500">{{ formatDate(post.date) }}</time>
                </div>
              </div>

              <!-- Temps de lecture -->
              <div v-if="post.acf?.read_time" class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{{ post.acf.read_time }} {{ $t('blogPost.minRead') }}</span>
              </div>

              <!-- Partage -->
              <div class="flex items-center gap-2 ml-auto">
                <span class="text-sm">{{ $t('blogPost.share') }}</span>
                <button
                  @click="shareOnTwitter"
                  class="w-10 h-10 bg-neutral hover:bg-accent/20 rounded-full flex items-center justify-center transition-all"
                  aria-label="Twitter"
                >
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button
                  @click="shareOnLinkedIn"
                  class="w-10 h-10 bg-neutral hover:bg-accent/20 rounded-full flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
                <button
                  @click="copyLink"
                  class="w-10 h-10 bg-neutral hover:bg-accent/20 rounded-full flex items-center justify-center transition-all"
                  aria-label="Copier le lien"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </header>

          <!-- Contenu de l'article -->
          <article
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
            class="prose prose-lg max-w-none mb-12"
            v-html="post.content.rendered"
          ></article>

          <!-- Tags -->
          <div v-if="post._embedded?.['wp:term']?.[1]" class="flex flex-wrap gap-2 pt-8 border-t border-gray-200">
            <span class="text-sm font-semibold text-gray-600">{{ $t('blogPost.tags') }}:</span>
            <span
              v-for="tag in post._embedded['wp:term'][1]"
              :key="tag.id"
              class="px-3 py-1 bg-neutral text-primary text-sm rounded-full hover:bg-accent/20 transition-colors cursor-pointer"
            >
              #{{ tag.name }}
            </span>
          </div>
        </div>
      </section>

      <!-- Articles liés -->
      <section v-if="relatedPosts.length > 0" class="spacing-section bg-white">
        <div class="container-modeli">
          <SectionTitle :title="$t('blogPost.related.title')" />
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CardBlog
              v-for="related in relatedPosts"
              :key="related.id"
              :title="related.title.rendered"
              :excerpt="related.excerpt.rendered"
              :image="related._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg'"
              :date="related.date"
              :category="related._embedded?.['wp:term']?.[0]?.[0]?.name"
              :read-time="related.acf?.read_time"
              @click="navigateTo(localePath({name: 'blog-slug', params: { slug: related.slug }}))"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useBlogStore } from '@/store/useBlogStore'
import { useLangStore } from '@/store/useLangStore'
import { useUIStore } from '@/store/useUIStore'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import CardBlog from '@/components/ui/CardBlog.vue'
import ButtonCTA from '@/components/ui/ButtonCTA.vue'
import Loader from '@/components/ui/Loader.vue'



// Stores
const blogStore = useBlogStore()
const langStore = useLangStore()
const uiStore = useUIStore()

// Route et i18n
const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()
const slug = (route.params as { slug: string }).slug


// Charger l'article
const post = ref(blogStore.currentPost)

onMounted(async () => {
 // const slug = route.params.slug as string
  const result = await blogStore.fetchPostBySlug(slug)
  if (result) {
    post.value = result
  }
  
  // Charger tous les articles pour les articles liés
  if (blogStore.posts.length === 0) {
    await blogStore.fetchPosts()
  }
})

// SEO dynamique
watchEffect(() => {
  if (post.value) {
    useHead({
      title: `${post.value.title.rendered} | Blog MODELI`,
      meta: [
        {
          name: 'description',
          content: post.value.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160)
        },
        { property: 'og:title', content: post.value.title.rendered },
        { property: 'og:description', content: post.value.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160) },
        { property: 'og:image', content: post.value._embedded?.['wp:featuredmedia']?.[0]?.source_url },
        { property: 'og:type', content: 'article' },
        { property: 'article:published_time', content: post.value.date },
        { property: 'article:modified_time', content: post.value.modified }
      ]
    })
  }
})

// Articles liés (même catégorie)
const relatedPosts = computed(() => {
  if (!post.value || !post.value.categories || post.value.categories.length === 0) {
    return []
  }
  
  return blogStore.posts
    .filter(p => 
      p.id !== post.value?.id && 
      p.categories.some(cat => post.value?.categories.includes(cat))
    )
    .slice(0, 3)
})

// Formatage de date
const formatDate = (date: string) => {
  return langStore.formatDate(new Date(date), { dateStyle: 'long' })
}

// Fonctions de partage
const shareOnTwitter = () => {
  const url = window.location.href
  const text = post.value?.title.rendered || ''
  window.open(
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    '_blank',
    'width=550,height=420'
  )
}

const shareOnLinkedIn = () => {
  const url = window.location.href
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    '_blank',
    'width=550,height=420'
  )
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    uiStore.notifySuccess(t('blogPost.linkCopied'))
  } catch (error) {
    uiStore.notifyError(t('blogPost.linkCopyError'))
  }
}
</script>

<style scoped>
/* Styles pour le contenu WordPress */
.prose :deep(img) {
  @apply rounded-2xl my-8 shadow-md;
}

.prose :deep(h2) {
  @apply text-3xl font-heading text-primary mt-12 mb-6 font-bold;
}

.prose :deep(h3) {
  @apply text-2xl font-heading text-primary mt-10 mb-4 font-semibold;
}

.prose :deep(h4) {
  @apply text-xl font-heading text-primary mt-8 mb-3 font-semibold;
}

.prose :deep(p) {
  @apply text-gray-700 leading-relaxed mb-6;
}

.prose :deep(ul) {
  @apply list-disc list-inside mb-6 space-y-2;
}

.prose :deep(ol) {
  @apply list-decimal list-inside mb-6 space-y-2;
}

.prose :deep(li) {
  @apply text-gray-700;
}

.prose :deep(a) {
  @apply text-accent hover:text-secondary underline transition-colors;
}

.prose :deep(blockquote) {
  @apply border-l-4 border-accent pl-6 italic text-gray-600 my-8 bg-neutral p-6 rounded-r-xl;
}

.prose :deep(code) {
  @apply bg-neutral px-2 py-1 rounded text-sm font-mono text-primary;
}

.prose :deep(pre) {
  @apply bg-gray-900 text-white p-6 rounded-xl overflow-x-auto my-8;
}

.prose :deep(pre code) {
  @apply bg-transparent text-white;
}

.prose :deep(table) {
  @apply w-full border-collapse my-8;
}

.prose :deep(th) {
  @apply bg-primary text-white font-semibold p-3 text-left;
}

.prose :deep(td) {
  @apply border border-gray-200 p-3;
}

.prose :deep(hr) {
  @apply my-12 border-gray-200;
}

.prose :deep(strong) {
  @apply font-bold text-primary;
}

.prose :deep(em) {
  @apply italic;
}
</style>