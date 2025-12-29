import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    pt: 'Produtos Mais Vendidos | Savana Pet Shop',
    en: 'Best Selling Products | Savana Pet Shop',
  },
  descriptions: {
    pt: 'Descubra os produtos para pets mais populares da Savana Pet Shop. Itens favoritos dos nossos clientes com as melhores avaliações.',
    en: 'Discover Savana Pet Shop\'s most popular pet products. Customer favorites with the best ratings.',
  },
  keywords:
    'produtos mais vendidos para pets, best sellers pet shop, produtos populares para animais, melhores produtos para pets',
  paths: {
    pt: '/best-sellers',
    en: '/best-sellers',
  },
  ogUrl: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/best-sellers',
}

export function bestSellersSEO(locale: string) {
  return createSEO(locale, seoContent)
}
