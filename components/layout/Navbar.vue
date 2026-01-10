<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      uiStore.isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md' 
        : 'bg-white/80 backdrop-blur-sm'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 group"
          @click="uiStore.closeMobileMenu()"
        >
          <div class="relative">
            <div class="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          </div>
          <span class="text-2xl font-heading font-bold text-primary">
            <img src="https://zupimages.net/up/25/42/wc63.png" alt="RLS ANALYZ" class="h-10"/>
          </span>
        </NuxtLink>

        <!-- Navigation Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="localePath({ path: link.path })"
            class="text-text font-medium hover:text-primary transition-colors duration-300 relative group"
            active-class="text-primary"
          >
            {{ $t(link.label) }}
            <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
        </div>

        <!-- Actions Desktop -->
        <div class="hidden md:flex items-center space-x-4">
          <!-- Sélecteur de langue -->
          <div class="relative">
            <button
              @click="toggleLangMenu"
              class="flex items-center space-x-2 px-3 py-2 rounded-xl hover:bg-neutral transition-colors duration-300"
              aria-label="Menu langue"
            >
              <span class="text-lg">{{ langStore.currentLocaleFlag }}</span>
              <span class="text-sm font-semibold text-text">
                {{ langStore.currentLocale.toUpperCase() }}
              </span>
              <svg
                class="w-4 h-4 text-text transition-transform duration-300"
                :class="{ 'rotate-180': showLangMenu }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Menu déroulant langue -->
            <transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 scale-95 -translate-y-2"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 -translate-y-2"
            >
              <div
                v-if="showLangMenu"
                ref="langMenuRef"
                class="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-elevation overflow-hidden z-50"
              >
                <button
                  v-for="locale in langStore.availableLocales"
                  :key="locale.code"
                  @click="changeLang(locale.code)"
                  class="w-full px-4 py-3 text-left text-sm hover:bg-neutral transition-colors flex items-center space-x-3"
                  :class="{ 
                    'bg-neutral text-primary font-semibold': langStore.currentLocale === locale.code 
                  }"
                >
                  <span class="text-lg">{{ locale.flag }}</span>
                  <span>{{ locale.name }}</span>
                </button>
              </div>
            </transition>
          </div>

          <!-- Bouton CTA -->
          <ButtonCTA @click="navigateTo(localePath({ path: '/contact' }))">
            {{ $t('nav.contact') }}
          </ButtonCTA>
        </div>

        <!-- Burger Menu Mobile -->
        <button
          @click="uiStore.toggleMobileMenu()"
          class="md:hidden p-2 rounded-lg hover:bg-neutral transition-colors"
          aria-label="Menu"
        >
          <svg
            class="w-6 h-6 text-text transition-transform duration-300"
            :class="{ 'rotate-90': uiStore.mobileMenuOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!uiStore.mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu Mobile -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-screen"
      leave-active-class="transition-all duration-250 ease-in"
      leave-from-class="opacity-100 max-h-screen"
      leave-to-class="opacity-0 max-h-0"
    >
      <div
        v-if="uiStore.mobileMenuOpen"
        class="md:hidden bg-white border-t border-gray-100 overflow-hidden"
      >
        <div class="px-4 py-6 space-y-4">
          <!-- Navigation Links -->
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="localePath({ path: link.path })"
            class="block py-3 px-4 text-text font-medium hover:bg-neutral rounded-xl transition-all"
            active-class="bg-neutral text-primary font-semibold"
            @click="uiStore.closeMobileMenu()"
          >
            {{ $t(link.label) }}
          </NuxtLink>

          <!-- Divider -->
          <div class="border-t border-gray-100 my-4"></div>

          <!-- Langues -->
          <div class="space-y-2">
            <p class="text-sm text-gray-500 px-4 mb-2">
              {{ $t('nav.language') }}
            </p>
            <button
              v-for="locale in langStore.availableLocales"
              :key="locale.code"
              @click="changeLang(locale.code)"
              class="w-full py-3 px-4 text-left rounded-xl transition-all flex items-center space-x-3"
              :class="{ 
                'bg-neutral text-primary font-semibold': langStore.currentLocale === locale.code 
              }"
            >
              <span class="text-lg">{{ locale.flag }}</span>
              <span>{{ locale.name }}</span>
            </button>
          </div>

          <!-- CTA Mobile -->
          <ButtonCTA 
            class="w-full mt-4"
            @click="navigateAndClose(localePath({ path: '/contact' }))"
          >
            {{ $t('nav.contact') }}
          </ButtonCTA>
        </div>
      </div>
    </transition>
  </nav>

  <!-- Spacer pour éviter que le contenu soit caché sous la navbar -->
  <div class="h-20"></div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useUIStore } from '../../store/useUIStore'
import { useLangStore } from '../../store/useLangStore'
import type { Locale } from '../../store/useLangStore'
import ButtonCTA from '../../components/ui/ButtonCTA.vue'

// Composable click outside
const useClickOutside = (callback: () => void) => {
  const target = ref<HTMLElement | null>(null)

  const onClick = (event: Event) => {
    if (target.value && !target.value.contains(event.target as Node)) {
      callback()
    }
  }

  onMounted(() => {
    // Timeout pour éviter le déclenchement immédiat
    setTimeout(() => {
      document.addEventListener('click', onClick)
    }, 0)
  })

  onUnmounted(() => {
    document.removeEventListener('click', onClick)
  })

  return target
}

// Stores
const uiStore = useUIStore()
const langStore = useLangStore()

// i18n
const { locale } = useI18n()
const localePath = useLocalePath()

// Navigation links avec clés i18n - PROPOSITION 2
const navLinks = [
  { label: "nav.home", path: "/" },
  { label: "nav.about", path: "/a-propos" },
  { label: "nav.services", path: "/services" },
  { label: "nav.blog", path: "/blog" },
  { label: "nav.contact", path: "/contact" }
]

// State pour le menu langue
const showLangMenu = ref(false)
const langMenuRef = useClickOutside(() => {
  if (showLangMenu.value) {
    closeLangMenu()
  }
})

// Toggle language menu
const toggleLangMenu = (event: Event) => {
  event.stopPropagation() // Empêche la propagation vers le document
  showLangMenu.value = !showLangMenu.value
}

const closeLangMenu = () => {
  showLangMenu.value = false
}

// Change language
const changeLang = async (langCode: Locale) => {
  try {
    await langStore.setLocale(langCode)
    closeLangMenu()
    uiStore.closeMobileMenu()
    
    // Notification optionnelle
    uiStore.notifySuccess(
      langCode === 'fr' ? 'Langue changée en Français' : 'Language changed to English'
    )
  } catch (error) {
    console.error('Erreur lors du changement de langue:', error)
    uiStore.notifyError('Erreur lors du changement de langue')
  }
}

// Navigation avec fermeture du menu mobile
const navigateAndClose = (path: string) => {
  navigateTo(path)
  uiStore.closeMobileMenu()
}
</script>

<style scoped>
/* Animation des liens actifs */
.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: var(--color-accent);
  border-radius: 2px;
}

/* Amélioration de l'animation du burger */
button[aria-label="Menu"] svg {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Amélioration de la visibilité du menu langue */
.shadow-elevation {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>