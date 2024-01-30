// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxtjs/supabase"],
  supabase: {
    redirectOptions: {
      login: "/auth",
      callback: "/confirm",
      exclude: ["/"],
      cookieRedirect: false,
    },
  },
});
