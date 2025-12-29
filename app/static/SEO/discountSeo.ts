import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    pt: 'Descontos e Ofertas Especiais - Savana Pet Shop',
    en: 'Discounts and Special Offers - Savana Pet Shop',
  },
  descriptions: {
    pt: 'Aproveite os melhores descontos em produtos para pets na Savana Pet Shop. Ofertas especiais em rações, acessórios e muito mais para seu animal de estimação.',
    en: 'Get the best discounts on pet supplies at Savana Pet Shop. Special offers on pet food, accessories and much more for your beloved pet.',
  },
  keywords:
    'descontos pet shop, ofertas pet shop, promoções produtos pet, desconto ração, ofertas acessórios pets',
  paths: {
    pt: '/discount',
    en: '/discount',
  },
}

export function discountSEO(locale: string) {
  return createSEO(locale, seoContent)
}
