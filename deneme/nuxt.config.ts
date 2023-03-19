// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/content"],

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Aysegul",
      meta: [{ name: "description", content: "Aysegul Karadan" }],
      link: [
        {
          rel: "stylesheet",
          href: "https:/fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },

  css: ["~/assets/css/tailwind.css"],
});
