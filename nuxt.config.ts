// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  srcDir: 'src',

  modules: ['nuxt-headlessui', '@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'pt', language: 'pt-BR' }
    ],
    strategy: 'prefix',
    defaultLocale: 'en',
    vueI18n: './src/configs/i18n.config.ts'
  },

  imports: {
    autoImport: true,
    dirs: [
      'blocks',
      'components',
      'store',
      'plugins',
      'configs',
      'utils',
      'composables',
      'static',
      'types',
    ],
  },

  runtimeConfig: {
    public: {
      FIGMA_USERNAME: process.env.NUXT_PUBLIC_FIGMA_USERNAME,
      FIGMA_ORIGINAL_DESIGN: process.env.NUXT_PUBLIC_FIGMA_ORIGINAL_DESIGN,
      PROJECT_TITLE: process.env.NUXT_PUBLIC_PROJECT_TITLE,
      BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
      COUNTER_API_KEY: process.env.COUNTER_API_KEY,
      TREFLE_API_KEY: process.env.TREFLE_API_KEY,
      FACEBOOK_ID: process.env.NUXT_PUBLIC_FACEBOOK_ID,
      YOUTUBE_USERNAME: process.env.NUXT_PUBLIC_YOUTUBE_USERNAME,
      LIVE_DEMO_VIDEO_URL: process.env.NUXT_PUBLIC_LIVE_DEMO_VIDEO_URL,
      ADSENSE_ID: process.env.NUXT_PUBLIC_ADSENSE_ID,
      EMAIL: process.env.NUXT_PUBLIC_EMAIL,
      GTM_ID: process.env.NUXT_PUBLIC_GTM_ID,
      INSTAGRAM_USERNAME: process.env.NUXT_PUBLIC_INSTAGRAM_USERNAME,
      SITE_URL: process.env.NUXT_PUBLIC_SITE_URL || 'https://savana-nuxtjs-chronicles-part-1.netlify.app',
      ANALYZE: process.env.ANALYZE,
      GITHUB_USERNAME: process.env.NUXT_PUBLIC_GITHUB_USERNAME,
      LINKEDIN_USERNAME: process.env.NUXT_PUBLIC_LINKEDIN_USERNAME,
      X_USERNAME: process.env.NUXT_PUBLIC_X_USERNAME,
      WORKANA_USERNAME: process.env.NUXT_PUBLIC_WORKANA_USERNAME,
      TWITTER_USERNAME: process.env.NUXT_PUBLIC_TWITTER_USERNAME,
      GOOGLE_SITE_VERIFICATION: process.env.NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
})