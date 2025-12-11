import { en } from '~/locales/en-US'
import { pt } from '~/locales/pt-BR'

if (process.dev) {
  // Ajuda a confirmar se o arquivo é realmente carregado pelo módulo i18n em tempo de desenvolvimento
  // eslint-disable-next-line no-console
  console.info('[i18n] Configuração carregada com mensagens:', Object.keys({ pt, en }))
}

export default defineI18nConfig(() => ({
  __debugLoaded: process.dev,
  legacy: false,
  locale: 'pt-BR',
  fallbackLocale: {
    pt: ['pt-BR'],
    'pt-BR': ['en-US'],
    'en-US': ['pt-BR'],
    default: ['pt-BR', 'en-US'],
  },
  messages: {
    pt,
    'en-US': en,
    'pt-BR': pt,
  },
}))
