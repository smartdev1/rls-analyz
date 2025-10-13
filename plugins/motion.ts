import { MotionPlugin } from "@vueuse/motion";
import type { MotionPluginOptions } from "@vueuse/motion";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MotionPlugin);
});
