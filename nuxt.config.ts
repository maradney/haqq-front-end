// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/test-utils",
    "@pinia/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
