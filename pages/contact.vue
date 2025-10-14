<template>
    <div class="min-h-screen bg-neutral">
        <!-- Header de la page -->
        <section class="bg-gradient-to-br from-primary to-secondary py-16">
            <div class="container-modeli text-center">
                <h1 v-motion :initial="{ opacity: 0, y: 30 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
                    class="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                    {{ $t('contact.title') }}
                </h1>
                <p v-motion :initial="{ opacity: 0, y: 20 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
                    class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                    {{ $t('contact.subtitle') }}
                </p>
            </div>
        </section>

        <!-- Contenu principal -->
        <section class="spacing-section">
            <div class="container-modeli">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Formulaire de contact -->
                    <div class="lg:col-span-2">
                        <div v-motion :initial="{ opacity: 0, x: -50 }"
                            :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }" class="card-modeli p-8">
                            <h2 class="text-2xl font-heading font-bold text-primary mb-6">
                                {{ $t('contact.form.title') }}
                            </h2>

                            <!-- Message de succès -->
                            <div v-if="formSubmitted"
                                class="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-6 flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h3 class="font-semibold text-green-700 mb-1">
                                        {{ $t('contact.form.success.title') }}
                                    </h3>
                                    <p class="text-green-600 text-sm">
                                        {{ $t('contact.form.success.message') }}
                                    </p>
                                </div>
                            </div>

                            <!-- Formulaire -->
                            <form v-else @submit.prevent="handleSubmit" class="space-y-6">
                                <!-- Nom et Prénom -->
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField v-model="form.firstName" :label="$t('contact.form.fields.firstName')"
                                        type="text" :placeholder="$t('contact.form.placeholders.firstName')"
                                        :required="true" :error="errors.firstName" />
                                    <InputField v-model="form.lastName" :label="$t('contact.form.fields.lastName')"
                                        type="text" :placeholder="$t('contact.form.placeholders.lastName')"
                                        :required="true" :error="errors.lastName" />
                                </div>

                                <!-- Email et Téléphone -->
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField v-model="form.email" :label="$t('contact.form.fields.email')"
                                        type="email" :placeholder="$t('contact.form.placeholders.email')"
                                        :required="true" :error="errors.email" />
                                    <InputField v-model="form.phone" :label="$t('contact.form.fields.phone')" type="tel"
                                        :placeholder="$t('contact.form.placeholders.phone')" :error="errors.phone" />
                                </div>

                                <!-- Entreprise -->
                                <InputField v-model="form.company" :label="$t('contact.form.fields.company')"
                                    type="text" :placeholder="$t('contact.form.placeholders.company')"
                                    :error="errors.company" />

                                <!-- Sujet -->
                                <div>
                                    <label class="block text-sm font-semibold text-text mb-2">
                                        {{ $t('contact.form.fields.subject') }}
                                        <span class="text-accent ml-1">*</span>
                                    </label>
                                    <select v-model="form.subject" class="input-modeli"
                                        :class="{ 'border-red-400': errors.subject }">
                                        <option value="">{{ $t('contact.form.placeholders.subject') }}</option>
                                        <option value="property">{{ $t('contact.form.subjects.property') }}</option>
                                        <option value="service">{{ $t('contact.form.subjects.service') }}</option>
                                        <option value="investment">{{ $t('contact.form.subjects.investment') }}</option>
                                        <option value="partnership">{{ $t('contact.form.subjects.partnership') }}
                                        </option>
                                        <option value="other">{{ $t('contact.form.subjects.other') }}</option>
                                    </select>
                                    <p v-if="errors.subject" class="mt-2 text-sm text-red-500 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 flex-shrink-0"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {{ errors.subject }}
                                    </p>
                                </div>

                                <!-- Message -->
                                <InputField v-model="form.message" :label="$t('contact.form.fields.message')"
                                    type="textarea" :rows="6" :placeholder="$t('contact.form.placeholders.message')"
                                    :required="true" :error="errors.message" />

                                <!-- RGPD -->
                                <div class="flex items-start gap-3">
                                    <input id="rgpd" v-model="form.rgpdConsent" type="checkbox"
                                        class="mt-1 w-5 h-5 text-accent border-2 border-gray-300 rounded focus:ring-2 focus:ring-accent/50 transition-all"
                                        :class="{ 'border-red-400': errors.rgpdConsent }" />
                                    <label for="rgpd" class="text-sm text-gray-600 leading-relaxed">
                                        {{ $t('contact.form.rgpd.text') }}
                                        <NuxtLink :to="localePath({ name: 'politique-confidentialite' })"
                                            class="text-accent hover:text-secondary underline">
                                            {{ $t('contact.form.rgpd.link') }}
                                        </NuxtLink>
                                        <span class="text-accent ml-1">*</span>
                                    </label>
                                </div>
                                <p v-if="errors.rgpdConsent" class="text-sm text-red-500 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 flex-shrink-0"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {{ errors.rgpdConsent }}
                                </p>

                                <!-- Bouton submit -->
                                <div class="flex gap-4">
                                    <ButtonCTA type="submit" class="flex-1" :disabled="submitting">
                                        <span v-if="submitting" class="flex items-center justify-center gap-2">
                                            <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                    stroke-width="4"></circle>
                                                <path class="opacity-75" fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                                </path>
                                            </svg>
                                            {{ $t('contact.form.sending') }}
                                        </span>
                                        <span v-else class="flex items-center justify-center gap-2">
                                            {{ $t('contact.form.send') }}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                        </span>
                                    </ButtonCTA>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- Informations de contact -->
                    <div class="lg:col-span-1 space-y-6">
                        <!-- Coordonnées -->
                        <div v-motion :initial="{ opacity: 0, x: 50 }"
                            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
                            class="card-modeli p-6">
                            <h3 class="text-xl font-heading font-bold text-primary mb-6">
                                {{ $t('contact.info.title') }}
                            </h3>

                            <div class="space-y-5">
                                <!-- Adresse -->
                                <div class="flex items-start gap-4">
                                    <div
                                        class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-text mb-1">{{ $t('contact.info.address.title') }}
                                        </h4>
                                        <p class="text-sm text-gray-600 leading-relaxed">
                                            Abidjan<br />
                                            Côte d'Ivoire
                                        </p>
                                    </div>
                                </div>

                                <!-- Téléphone -->
                                <div class="flex items-start gap-4">
                                    <div
                                        class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-text mb-1">{{ $t('contact.info.phone.title') }}
                                        </h4>
                                        <a href="tel:+2250586028886"
                                            class="text-sm text-accent hover:text-secondary transition-colors">
                                            +225 05 86 02 88 86
                                        </a>
                                    </div>
                                </div>

                                <!-- Email -->
                                <div class="flex items-start gap-4">
                                    <div
                                        class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-text mb-1">{{ $t('contact.info.email.title') }}
                                        </h4>
                                        <a href="mailto:contact@modeli.fr"
                                            class="text-sm text-accent hover:text-secondary transition-colors">
                                            contact@rls-analy.fr
                                        </a>
                                    </div>
                                </div>

                                <!-- Horaires -->
                                <div class="flex items-start gap-4">
                                    <div
                                        class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-text mb-1">{{ $t('contact.info.hours.title') }}
                                        </h4>
                                        <p class="text-sm text-gray-600 leading-relaxed">
                                            {{ $t('contact.info.hours.weekdays') }}<br />
                                            {{ $t('contact.info.hours.weekend') }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Réseaux sociaux -->
                        <div v-motion :initial="{ opacity: 0, x: 50 }"
                            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 400 } }"
                            class="card-modeli p-6">
                            <h3 class="text-xl font-heading font-bold text-primary mb-4">
                                {{ $t('contact.social.title') }}
                            </h3>
                            <p class="text-sm text-gray-600 mb-4">
                                {{ $t('contact.social.subtitle') }}
                            </p>
                            <div class="flex gap-3">
                                <a href="https://facebook.com/rls-analy" target="_blank" rel="noopener noreferrer"
                                    class="w-12 h-12 bg-accent/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 group"
                                    aria-label="Facebook">
                                    <svg class="w-6 h-6 text-accent group-hover:text-primary transition-colors"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com/rls-analy" target="_blank" rel="noopener noreferrer"
                                    class="w-12 h-12 bg-accent/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 group"
                                    aria-label="Twitter">
                                    <svg class="w-6 h-6 text-accent group-hover:text-primary transition-colors"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a href="https://linkedin.com/company/rls-analy" target="_blank" rel="noopener noreferrer"
                                    class="w-12 h-12 bg-accent/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 group"
                                    aria-label="LinkedIn">
                                    <svg class="w-6 h-6 text-accent group-hover:text-primary transition-colors"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com/rls-analy" target="_blank" rel="noopener noreferrer"
                                    class="w-12 h-12 bg-accent/10 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 group"
                                    aria-label="Instagram">
                                    <svg class="w-6 h-6 text-accent group-hover:text-primary transition-colors"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Carte (optionnel) -->
        <section class="h-96 bg-gray-200">
            <div class="w-full h-full">
                <!-- Placeholder pour Google Maps ou Leaflet -->
                <div
                    class="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div class="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-primary/40 mx-auto mb-4"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <p class="text-gray-500">{{ $t('contact.map.placeholder') }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useUIStore } from '@/store/useUIStore'
import InputField from '@/components/ui/InputField.vue'
import ButtonCTA from '@/components/ui/ButtonCTA.vue'

// Store
const uiStore = useUIStore()

// i18n
const { t } = useI18n()
const localePath = useLocalePath()

// SEO
useHead({
    title: t('contact.meta.title'),
    meta: [
        { name: 'description', content: t('contact.meta.description') },
        { property: 'og:title', content: t('contact.meta.title') },
        { property: 'og:description', content: t('contact.meta.description') }
    ]
})

// État du formulaire
const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    rgpdConsent: false
})

const errors = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    rgpdConsent: ''
})

const submitting = ref(false)
const formSubmitted = ref(false)

// Validation
const validateForm = () => {
    let isValid = true

    // Reset errors
    for (const key in errors) {
        if (Object.prototype.hasOwnProperty.call(errors, key)) {
            errors[key as keyof typeof errors] = ''
        }
    }

    // Prénom
    if (!form.firstName.trim()) {
        errors.firstName = t('contact.form.errors.firstName')
        isValid = false
    }

    // Nom
    if (!form.lastName.trim()) {
        errors.lastName = t('contact.form.errors.lastName')
        isValid = false
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim()) {
        errors.email = t('contact.form.errors.email')
        isValid = false
    } else if (!emailRegex.test(form.email)) {
        errors.email = t('contact.form.errors.emailInvalid')
        isValid = false
    }

    // Sujet
    if (!form.subject) {
        errors.subject = t('contact.form.errors.subject')
        isValid = false
    }

    // Message
    if (!form.message.trim()) {
        errors.message = t('contact.form.errors.message')
        isValid = false
    } else if (form.message.trim().length < 10) {
        errors.message = t('contact.form.errors.messageTooShort')
        isValid = false
    }

    // RGPD
    if (!form.rgpdConsent) {
        errors.rgpdConsent = t('contact.form.errors.rgpd')
        isValid = false
    }

    return isValid
}

// Soumission du formulaire
const handleSubmit = async () => {
    if (!validateForm()) {
        uiStore.notifyWarning(t('contact.form.errors.validation'))
        return
    }

    submitting.value = true

    try {
        // Simuler l'envoi (remplacer par votre endpoint)
        await new Promise(resolve => setTimeout(resolve, 2000))

        // OU avec une vraie API :
        // await $fetch('/api/contact', {
        //   method: 'POST',
        //   body: form
        // })

        // Succès
        formSubmitted.value = true
        uiStore.notifySuccess(t('contact.form.success.notification'))

        // Scroll vers le haut pour voir le message de succès
        window.scrollTo({ top: 0, behavior: 'smooth' })

        // Réinitialiser le formulaire après 5 secondes
        setTimeout(() => {
            formSubmitted.value = false
            resetForm()
        }, 5000)
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error)
        uiStore.notifyError(t('contact.form.error'))
    } finally {
        submitting.value = false
    }
}

// Réinitialiser le formulaire
const resetForm = () => {
    form.firstName = ''
    form.lastName = ''
    form.email = ''
    form.phone = ''
    form.company = ''
    form.subject = ''
    form.message = ''
    form.rgpdConsent = false

     Object.keys(errors).forEach(key => {
        errors[key as keyof typeof errors] = ''
    })
}
</script>