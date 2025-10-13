// utils/motionPresets.ts

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeIn = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5 } },
}

export const slideUp = {
  initial: { opacity: 0, y: 60 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}
export const slideDown = {
  initial: { opacity: 0, y: -60 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}
export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}
export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}
export const zoomIn = {
  initial: { opacity: 0, scale: 0.8 },
  enter: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}
export const rotateIn = {
  initial: { opacity: 0, rotate: -45 },
  enter: { opacity: 1, rotate: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}
export const stagger = {
  initial: {},
  enter: { transition: { stagger: 0.1 } },
}