import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      // Polices personnalisées MODELI
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      // Couleurs MODELI
      colors: {
        primary: '#0A3D62',
        secondary: '#3C6382',
        accent: '#F8C291',
        neutral: '#F5F6FA',
        text: '#2D3436',
      },
      // Ombres personnalisées
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(10, 61, 98, 0.08), 0 2px 4px -1px rgba(10, 61, 98, 0.04)',
        'card': '0 10px 25px -5px rgba(10, 61, 98, 0.15), 0 8px 10px -6px rgba(10, 61, 98, 0.08)',
        'elevation': '0 20px 40px -10px rgba(10, 61, 98, 0.2), 0 15px 20px -10px rgba(10, 61, 98, 0.12)',
      },
      // Transitions personnalisées
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      // Animations personnalisées
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config