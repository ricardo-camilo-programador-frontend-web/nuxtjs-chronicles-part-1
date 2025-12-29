import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    pt: 'Vale Presente - Cartão Presente Digital - Savana Pet Shop',
    en: 'Digital Gift Cards - Savana Pet Shop',
  },
  descriptions: {
    pt: 'Presenteie com um Vale Presente digital da Savana Pet Shop. O presente ideal para quem ama pets. Válido para toda a loja, entrega instantânea por email.',
    en: 'Give a Savana Pet Shop digital Gift Card. The perfect gift for pet lovers. Valid throughout the store, instant email delivery.',
  },
  keywords:
    'gift card pet shop, vale presente pet shop, cartão presente pet shop, presente digital, gift card for pets',
  paths: {
    pt: '/gift-cards',
    en: '/gift-cards',
  },
}

export function giftCardsSEO(locale: string) {
  return createSEO(locale, seoContent)
}
