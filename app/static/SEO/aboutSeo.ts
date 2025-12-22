import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    'pt-BR': 'Sobre a Savana Pet Shop - Nossa História e Valores',
    es: 'Sobre Savana Pet Shop - Nuestra Historia y Valores',
    en: 'About Savana Pet Shop - Our History and Values',
  },
  descriptions: {
    'pt-BR':
      'Conheça a história da Savana Pet Shop, nossa missão, valores e compromisso com o bem-estar dos animais. Saiba por que somos referência em produtos para pets.',
    es: 'Conoce la historia de Savana Pet Shop, nuestra misión, valores y compromiso con el bienestar animal. Descubre por qué somos referencia en productos para mascotas.',
    en: "Learn about Savana Pet Shop's history, our mission, values and commitment to animal welfare. Discover why we are a reference in pet supplies.",
  },
  keywords: 'sobre savana pet shop, história savana pet shop, missão, valores, bem-estar animal, quem somos',
  paths: {
    'pt-BR': '/about',
    es: '/about',
    'en-US': '/about',
  },
}

export function aboutSEO(locale: string) {
  return createSEO(locale, seoContent)
}
