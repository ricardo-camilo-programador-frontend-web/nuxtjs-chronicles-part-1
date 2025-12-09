import { en } from '~/messages/en-US'
import { pt } from '~/messages/pt-BR'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en-US',
  fallbackLocale: {
    'pt': ['pt-BR', 'en-US'],
    'pt-BR': ['en-US'],
    'en': ['en-US'],
    'default': ['en-US'],
  },
  messages: {
    'en-US': en,
    'pt-BR': pt,
    'en': en,
    'pt': pt,
  },
}))
