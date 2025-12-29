import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    pt: 'Contato - Savana Pet Shop',
    en: 'Contact - Savana Pet Shop',
  },
  descriptions: {
    pt: 'Entre em contato com a Savana Pet Shop. Estamos aqui para ajudar com todas as suas necessidades para pets.',
    en: 'Contact Savana Pet Shop. We are here to help with all your pet needs.',
  },
  keywords:
    'contato pet shop, atendimento, suporte, fale conosco, savana pet shop',
  paths: {
    pt: '/contato',
    en: '/contact',
  },
  ogUrl: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/contato',
}

export function contactSEO(locale: string) {
  return createSEO(locale, seoContent)
}
