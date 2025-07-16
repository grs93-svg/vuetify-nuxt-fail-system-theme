export default defineNuxtConfig({
  modules: ["vuetify-nuxt-module"],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: "system",
      },
    },
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
    cloudflare: {
      deployConfig: false,
    },
  },

  compatibilityDate: "2026-01-01",
});
