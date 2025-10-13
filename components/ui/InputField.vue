<template>
  <div class="w-full">
    <!-- Label -->
    <label
      v-if="label"
      :for="inputId"
      class="block text-sm font-semibold text-text mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-accent ml-1">*</span>
    </label>

    <!-- Input ou Textarea -->
    <component
      :is="type === 'textarea' ? 'textarea' : 'input'"
      :id="inputId"
      :type="type !== 'textarea' ? type : undefined"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :rows="rows"
      :class="[
        'w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-smooth font-body',
        'focus:outline-none focus:ring-2 focus:ring-accent/50',
        'placeholder:text-gray-400',
        disabled ? 'bg-gray-100 cursor-not-allowed text-gray-500' : 'bg-white',
        error ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-accent',
        type === 'textarea' ? 'resize-none' : ''
      ]"
      @input="handleInput"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
    />

    <!-- Message d'erreur -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <p
        v-if="error"
        class="mt-2 text-sm text-red-500 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mr-1 flex-shrink-0"
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
        {{ error }}
      </p>
    </transition>

    <!-- Message d'aide -->
    <p
      v-if="hint && !error"
      class="mt-2 text-sm text-gray-500"
    >
      {{ hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  modelValue: string | number
  label?: string
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'url' | 'textarea'
  placeholder?: string
  required?: boolean
  disabled?: boolean
  error?: string
  hint?: string
  rows?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  'blur': []
  'focus': []
}>()

// Génération d'un ID unique pour l'accessibilité
const inputId = computed(() => {
  return `input-${Math.random().toString(36).substring(2, 9)}`
})

// Gestion de l'input
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped>
/* Animation personnalisée pour le focus */
input:focus,
textarea:focus {
  box-shadow: 0 0 0 4px rgba(248, 194, 145, 0.1);
}

/* Style pour les inputs disabled */
input:disabled,
textarea:disabled {
  opacity: 0.6;
}

/* Animation du placeholder */
input::placeholder,
textarea::placeholder {
  transition: opacity 0.3s ease;
}

input:focus::placeholder,
textarea:focus::placeholder {
  opacity: 0.5;
}
</style>