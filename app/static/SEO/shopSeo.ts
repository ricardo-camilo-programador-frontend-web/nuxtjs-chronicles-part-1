import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    pt: 'Loja Online de Produtos para Pets - Savana Pet Shop',
    en: 'Online Pet Supplies Store - Savana Pet Shop',
  },
  descriptions: {
    pt: 'Encontre uma ampla variedade de produtos para pets: rações, acessórios, brinquedos e muito mais. Qualidade e preços imbatíveis para seu animal de estimação.',
    en: 'Find a wide variety of pet supplies: food, accessories, toys, and more. Quality products and unbeatable prices for your beloved pet.',
  },
  keywords:
    'pet shop online, produtos para pets, ração para pets, acessórios para pets, brinquedos para pets, loja de animais',
  paths: {
    pt: '/shop',
    en: '/shop',
  },
  ogUrl: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/shop',
}

export function shopSEO(locale: string) {
  return createSEO(locale, seoContent)
}
