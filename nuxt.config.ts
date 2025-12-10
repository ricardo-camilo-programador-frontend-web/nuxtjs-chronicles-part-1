// https://nuxt.com/docs/api/configuration/nuxt-config

import process from 'node:process'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  srcDir: './src/',

  app: {
    head: {
      script: [
        {
          src: 'https://cdn.counter.dev/script.js',
          type: 'text/javascript',
          defer: true,
          'data-id': process.env.COUNTER_API_KEY,
          'data-utcoffset': '-3',
          async: true,
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  modules: ['@nuxt/icon', 'nuxt-headlessui', '@nuxtjs/i18n', '@pinia/nuxt', '@nuxt/ui'],

  i18n: {
    locales: [
      { code: 'en-US', language: 'en-US', name: 'English', iso: 'en-US' },
      { code: 'pt-BR', language: 'pt-BR', name: 'Português', iso: 'pt-BR' },
    ],
    strategy: 'prefix',
    defaultLocale: 'en-US',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
      fallbackLocale: 'en-US',
    },
    vueI18n: './src/configs/i18n.config.ts',
  },

  icon: {
    serverBundle: {
      collections: ['mdi', 'circle-flags', 'ph', 'simple-icons', 'cib'],
    },
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
      'mocks',
      'composables',
      'static',
      'types',
      'layouts',
      'pages',
    ],
  },

  nitro: {
    preset: 'netlify',
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: [
        '/en-US',
        '/pt-BR',
        '/en-US/about',
        '/pt-BR/about',
        '/en-US/blog',
        '/pt-BR/blog',
        '/en-US/best-sellers',
        '/pt-BR/best-sellers',
        '/en-US/careers',
        '/pt-BR/careers',
        '/en-US/contact',
        '/pt-BR/contact',
        '/en-US/discount',
        '/pt-BR/discount',
        '/en-US/faq',
        '/pt-BR/faq',
        '/en-US/privacy-policy',
        '/pt-BR/privacy-policy',
        '/en-US/gift-cards',
        '/pt-BR/gift-cards',
        '/en-US/shop',
        '/pt-BR/shop',
        '/en-US/products',
        '/pt-BR/products',
      ],
    },
  },

  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
      {
        path: '~/blocks',
        pathPrefix: false,
      },
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
      SITE_URL:
        process.env.NUXT_PUBLIC_SITE_URL || 'https://savana-nuxtjs-chronicles-part-1.netlify.app',
      GITHUB_USERNAME: process.env.NUXT_PUBLIC_GITHUB_USERNAME,
      LINKEDIN_USERNAME: process.env.NUXT_PUBLIC_LINKEDIN_USERNAME,
      X_USERNAME: process.env.NUXT_PUBLIC_X_USERNAME,
      WORKANA_USERNAME: process.env.NUXT_PUBLIC_WORKANA_USERNAME,
      TWITTER_USERNAME: process.env.NUXT_PUBLIC_TWITTER_USERNAME,
      GOOGLE_SITE_VERIFICATION: process.env.NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      PORTFOLIO_URL: process.env.NUXT_PUBLIC_PORTFOLIO_URL,
      BUYMEACOFFEE_USERNAME: process.env.NUXT_PUBLIC_BUYMEACOFFEE_USERNAME,
    },
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
    prerender: {
      failOnError: false,
    },
  },
})
