// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  app :{
    rootId: 'app',
    rootTag: 'body',
  },

  devtools: { enabled: true },

  googleFonts: {
    families: {
      'Inter': true,
      'JetBrains Mono': true,
    },
  },
})
