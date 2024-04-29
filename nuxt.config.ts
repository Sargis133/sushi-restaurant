// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [['@nuxtjs/google-fonts', {
    families: {
      "Forum": true,
      "Playfair Display": true,
      "Jost": true,
    }
  }]],
  app: {
    baseURL: "/sushi-restaurant",
    buildAssetsDir: "assets"
  }
})
