export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: {
    en: ['en'],
    pt: ['pt'],
    default: ['pt', 'en'],
  },
}))
