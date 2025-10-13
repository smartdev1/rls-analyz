<template>
  <div class="min-h-screen bg-neutral">
    <!-- Loader -->
    <div v-if="propertyStore.loadingDetail" class="flex justify-center items-center min-h-screen">
      <Loader variant="logo" size="xl" :message="$t('property.loading')" />
    </div>

    <!-- Erreur / Bien non trouvé -->
    <div v-else-if="!property" class="container-modeli spacing-section text-center">
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
          {{ $t('property.notFound.title') }}
        </h2>
        <p class="text-gray-600 mb-6">
          {{ $t('property.notFound.message') }}
        </p>
        <ButtonCTA @click="navigateTo(localePath({name: 'biens'}))">
          {{ $t('property.notFound.backToList') }}
        </ButtonCTA>
      </div>
    </div>

    <!-- Contenu du bien -->
    <div v-else>
      <!-- Galerie d'images -->
      <section class="relative h-[500px] bg-gray-900">
        <div class="absolute inset-0">
          <img
            :src="currentImage"
            :alt="property.title.rendered"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <!-- Navigation galerie -->
        <div v-if="gallery.length > 1" class="absolute inset-0 flex items-center justify-between px-4">
          <button
            @click="previousImage"
            class="p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all"
            aria-label="Image précédente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="nextImage"
            class="p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all"
            aria-label="Image suivante"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Indicateurs galerie -->
        <div v-if="gallery.length > 1" class="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          <button
            v-for="(img, index) in gallery"
            :key="index"
            @click="currentImageIndex = index"
            :class="[
              'w-2 h-2 rounded-full transition-all',
              currentImageIndex === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
            ]"
            :aria-label="`Image ${index + 1}`"
          />
        </div>

        <!-- Bouton retour -->
        <div class="absolute top-6 left-6">
          <button
            @click="navigateTo(localePath({'name': 'biens'}))"
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
            {{ $t('property.back') }}
          </button>
        </div>
      </section>

      <!-- Contenu principal -->
      <section class="container-modeli spacing-section">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Colonne principale -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Titre et prix -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
              class="card-modeli p-8"
            >
              <!-- Badge type -->
              <span v-if="property.acf?.type" class="badge-modeli mb-4">
                {{ property.acf.type }}
              </span>

              <h1 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                {{ property.title.rendered }}
              </h1>

              <!-- Localisation -->
              <div class="flex items-center text-gray-600 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="text-lg">{{ property.acf?.location }}</span>
              </div>

              <!-- Prix -->
              <div class="text-4xl font-bold text-accent mb-2">
                {{ formatPrice(property.acf?.price) }}
              </div>
              <p class="text-gray-600">{{ $t('property.priceInfo') }}</p>
            </div>

            <!-- Caractéristiques -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
              class="card-modeli p-8"
            >
              <h2 class="text-2xl font-heading font-bold text-primary mb-6">
                {{ $t('property.characteristics.title') }}
              </h2>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <!-- Surface -->
                <div class="text-center" v-if="property.acf?.surface">
                  <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </div>
                  <p class="text-2xl font-bold text-primary">{{ property.acf.surface }}</p>
                  <p class="text-sm text-gray-600">m²</p>
                </div>

                <!-- Chambres -->
                <div class="text-center" v-if="property.acf?.bedrooms">
                  <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <p class="text-2xl font-bold text-primary">{{ property.acf.bedrooms }}</p>
                  <p class="text-sm text-gray-600">{{ $t('property.characteristics.rooms') }}</p>
                </div>

                <!-- Salles de bain -->
                <div class="text-center" v-if="property.acf?.bathrooms">
                  <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>
                  </div>
                  <p class="text-2xl font-bold text-primary">{{ property.acf.bathrooms }}</p>
                  <p class="text-sm text-gray-600">{{ $t('property.characteristics.bathrooms') }}</p>
                </div>

                <!-- Parking -->
                <div class="text-center" v-if="property.acf?.parking">
                  <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p class="text-2xl font-bold text-primary">✓</p>
                  <p class="text-sm text-gray-600">{{ $t('property.characteristics.parking') }}</p>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
              class="card-modeli p-8"
            >
              <h2 class="text-2xl font-heading font-bold text-primary mb-6">
                {{ $t('property.description.title') }}
              </h2>
              <div class="prose prose-lg max-w-none" v-html="property.content.rendered"></div>
            </div>

            <!-- Équipements -->
            <div
              v-if="property.acf?.features && property.acf.features.length > 0"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
              class="card-modeli p-8"
            >
              <h2 class="text-2xl font-heading font-bold text-primary mb-6">
                {{ $t('property.features.title') }}
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  v-for="(feature, index) in property.acf.features"
                  :key="index"
                  class="flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-accent flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="card-modeli p-6 sticky top-24 space-y-6">
              <h3 class="text-xl font-heading font-bold text-primary">
                {{ $t('property.contact.title') }}
              </h3>

              <p class="text-gray-600">
                {{ $t('property.contact.message') }}
              </p>

              <!-- Formulaire de contact rapide -->
              <form @submit.prevent="handleContactSubmit" class="space-y-4">
                <InputField
                  v-model="contactForm.name"
                  :label="$t('property.contact.form.name')"
                  type="text"
                  :required="true"
                  :error="errors.name"
                />

                <InputField
                  v-model="contactForm.email"
                  :label="$t('property.contact.form.email')"
                  type="email"
                  :required="true"
                  :error="errors.email"
                />

                <InputField
                  v-model="contactForm.phone"
                  :label="$t('property.contact.form.phone')"
                  type="tel"
                  :error="errors.phone"
                />

                <InputField
                  v-model="contactForm.message"
                  :label="$t('property.contact.form.message')"
                  type="textarea"
                  :rows="4"
                  :required="true"
                  :error="errors.message"
                />

                <ButtonCTA type="submit" class="w-full" :disabled="submitting">
                  {{ submitting ? $t('property.contact.form.sending') : $t('property.contact.form.send') }}
                </ButtonCTA>
              </form>

              <!-- Divider -->
              <div class="border-t border-gray-200 my-6"></div>

              <!-- Informations supplémentaires -->
              <div class="space-y-3 text-sm text-gray-600">
                <div class="flex items-center gap-2">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+33 1 42 36 77 88</span>
                </div>
                <div class="flex items-center gap-2">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>contact@modeli.fr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { usePropertyStore } from '@/store/usePropertyStore'
import { useLangStore } from '@/store/useLangStore'
import { useUIStore } from '@/store/useUIStore'
import ButtonCTA from '@/components/ui/ButtonCTA.vue'
import InputField from '@/components/ui/InputField.vue'
import Loader from '@/components/ui/Loader.vue'

// Stores
const propertyStore = usePropertyStore()
const langStore = useLangStore()
const uiStore = useUIStore()

// Route et i18n
const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()
const slug = (route.params as { slug: string }).slug

// Charger le bien
const property = ref(propertyStore.currentProperty)

onMounted(async () => {
  //const slug = route.params.slug as string
  const result = await propertyStore.fetchPropertyBySlug(slug)
  if (result) {
    property.value = result
  }
})

// SEO dynamique
watchEffect(() => {
  if (property.value) {
    useHead({
      title: `${property.value.title.rendered} | MODELI`,
      meta: [
        {
          name: 'description',
          content: property.value.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160)
        },
        { property: 'og:title', content: property.value.title.rendered },
        { property: 'og:image', content: property.value._embedded?.['wp:featuredmedia']?.[0]?.source_url }
      ]
    })
  }
})

// Galerie d'images
const currentImageIndex = ref(0)

const gallery = computed(() => {
  const images = []
  
  // Image principale
  if (property.value?._embedded?.['wp:featuredmedia']?.[0]) {
    images.push(property.value._embedded['wp:featuredmedia'][0].source_url)
  }
  
  // Galerie ACF
  if (property.value?.acf?.gallery) {
    images.push(...property.value.acf.gallery)
  }
  
  return images.length > 0 ? images : ['/placeholder.jpg']
})

const currentImage = computed(() => gallery.value[currentImageIndex.value])

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % gallery.value.length
}

const previousImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + gallery.value.length) % gallery.value.length
}

// Formulaire de contact
const contactForm = reactive({
  name: '',
  email: '',
  phone: '',
  message: `Bonjour, je suis intéressé par le bien "${property.value?.title.rendered}". Pourriez-vous me contacter ?`
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitting = ref(false)

const validateForm = () => {
  errors.name = contactForm.name ? '' : t('property.contact.form.errors.name')
  errors.email = contactForm.email ? '' : t('property.contact.form.errors.email')
  errors.message = contactForm.message ? '' : t('property.contact.form.errors.message')
  
  return !errors.name && !errors.email && !errors.message
}

const handleContactSubmit = async () => {
  if (!validateForm()) return
  
  submitting.value = true
  
  try {
    // Simuler l'envoi (à remplacer par votre API)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    uiStore.notifySuccess(t('property.contact.form.success'))
    
    // Réinitialiser le formulaire
    contactForm.name = ''
    contactForm.email = ''
    contactForm.phone = ''
    contactForm.message = ''
  } catch (error) {
    uiStore.notifyError(t('property.contact.form.error'))
  } finally {
    submitting.value = false
  }
}

// Helper pour formater le prix
const formatPrice = (price?: number) => {
  if (!price) return t('property.priceOnRequest')
  return langStore.formatPrice(price)
}
</script>

<style scoped>
/* Styles pour le contenu WordPress */
.prose :deep(img) {
  @apply rounded-2xl my-6;
}

.prose :deep(h2) {
  @apply text-2xl font-heading text-primary mt-8 mb-4;
}

.prose :deep(h3) {
  @apply text-xl font-heading text-primary mt-6 mb-3;
}

.prose :deep(p) {
  @apply text-gray-700 leading-relaxed mb-4;
}

.prose :deep(ul) {
  @apply list-disc list-inside mb-4;
}

.prose :deep(a) {
  @apply text-accent hover:text-secondary transition-colors;
}
</style>