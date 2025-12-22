import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    'pt-BR': 'Loja Online de Produtos para Pets - Savana Pet Shop',
    es: 'Tienda Online de Productos para Mascotas - Savana Pet Shop',
    en: 'Online Pet Supplies Store - Savana Pet Shop',
  },
  descriptions: {
    'pt-BR':
      'Encontre uma ampla variedade de produtos para pets: rações, acessórios, brinquedos e muito mais. Qualidade e preços imbatíveis para seu animal de estimação.',
    es: 'Encuentra una amplia variedad de productos para mascotas: alimentos, accesorios, juguetes y mucho más. Calidad y precios inmejorables para tu mascota.',
    en: 'Find a wide variety of pet supplies: food, accessories, toys, and more. Quality products and unbeatable prices for your beloved pet.',
  },
  keywords:
    'pet shop online, produtos para pets, ração para pets, acessórios para pets, brinquedos para pets, loja de animais',
  paths: {
    'pt-BR': '/shop',
    es: '/shop',
    'en-US': '/shop',
  },
  ogUrl: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/shop',
}

export function shopSEO(locale: string) {
  return createSEO(locale, seoContent)
}
