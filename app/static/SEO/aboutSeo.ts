import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    pt: 'Sobre a Savana Pet Shop - Nossa História e Valores',
    en: 'About Savana Pet Shop - Our History and Values',
  },
  descriptions: {
    pt: 'Conheça a história da Savana Pet Shop, nossa missão, valores e compromisso com o bem-estar dos animais. Saiba por que somos referência em produtos para pets.',
    en: 'Learn about Savana Pet Shop\'s history, our mission, values and commitment to animal welfare. Discover why we are a reference in pet supplies.',
  },
  keywords:
    'sobre savana pet shop, história savana pet shop, missão, valores, bem-estar animal, quem somos',
  paths: {
    pt: '/about',
    en: '/about',
  },
}

export function aboutSEO(locale: string) {
  return createSEO(locale, seoContent)
}
