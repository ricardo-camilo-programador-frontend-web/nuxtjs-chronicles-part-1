import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    'pt-BR': 'Descontos e Ofertas Especiais - Savana Pet Shop',
    es: 'Descuentos y Ofertas Especiales - Savana Pet Shop',
    en: 'Discounts and Special Offers - Savana Pet Shop',
  },
  descriptions: {
    'pt-BR':
      'Aproveite os melhores descontos em produtos para pets na Savana Pet Shop. Ofertas especiais em rações, acessórios e muito mais para seu animal de estimação.',
    es: 'Aprovecha los mejores descuentos en productos para mascotas en Savana Pet Shop. Ofertas especiales en alimentos, accesorios y mucho más para tu mascota.',
    en: 'Get the best discounts on pet supplies at Savana Pet Shop. Special offers on pet food, accessories and much more for your beloved pet.',
  },
  keywords:
    'descontos pet shop, ofertas pet shop, promoções produtos pet, desconto ração, ofertas acessórios pets',
  paths: {
    'pt-BR': '/discount',
    es: '/discount',
    'en-US': '/discount',
  },
}

export function discountSEO(locale: string) {
  return createSEO(locale, seoContent)
}
