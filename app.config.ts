import { defineAppConfig } from '#imports'

export default defineAppConfig({
  modules: ['@nuxt/icon'],
  icon: {
    mode: 'css',
    cssLayer: 'base',
  },
  serverBundle: {
    collections: ['mdi', 'circle-flags', 'ph', 'simple-icons', 'cib'],
  },
})
