<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <Navbar />

    <!-- Contenu principal des pages -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Loader global -->
    <Loader
      v-if="uiStore.globalLoading"
      :message="uiStore.loadingMessage"
      variant="logo"
      size="xl"
      fullscreen
    />

    <!-- Notifications Toast -->
    <div class="fixed top-4 right-4 z-50 space-y-3 max-w-sm">
      <TransitionGroup name="slide-fade">
        <div
          v-for="notification in uiStore.notifications"
          :key="notification.id"
          :class="[
            'p-4 rounded-lg shadow-elevation backdrop-blur-sm',
            'transform transition-all duration-300',
            {
              'bg-green-500 text-white': notification.type === 'success',
              'bg-red-500 text-white': notification.type === 'error',
              'bg-yellow-500 text-white': notification.type === 'warning',
              'bg-blue-500 text-white': notification.type === 'info',
            }
          ]"
        >
          <div class="flex items-start justify-between gap-3">
            <!-- Icône -->
            <div class="flex-shrink-0 pt-0.5">
              <svg
                v-if="notification.type === 'success'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-else-if="notification.type === 'error'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-else-if="notification.type === 'warning'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <!-- Message -->
            <p class="flex-1 text-sm font-medium leading-relaxed">
              {{ notification.message }}
            </p>

            <!-- Bouton fermer -->
            <button
              v-if="notification.closable"
              @click="uiStore.removeNotification(notification.id)"
              class="flex-shrink-0 hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <!-- Bouton Scroll to Top -->
    <Transition name="fade">
      <button
        v-if="uiStore.isScrolled"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-40 p-4 bg-accent hover:bg-accent/90 text-primary rounded-full shadow-elevation hover:shadow-card transition-all duration-300 hover:-translate-y-1"
        aria-label="Retour en haut"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useUIStore } from '@/store/useUIStore'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import Loader from '@/components/ui/Loader.vue'

const uiStore = useUIStore()

// Tracker le scroll
onMounted(() => {
  if (process.client) {
    const handleScroll = () => {
      uiStore.updateScrollPosition(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  }
})

// Fonction scroll to top
const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

// Fermer le menu mobile lors du changement de route
const route = useRoute()
watch(() => route.path, () => {
  uiStore.closeMobileMenu()
})
</script>

<style scoped>
/* Animations pour les notifications */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-move {
  transition: transform 0.3s ease-out;
}

/* Animation pour le bouton scroll to top */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>