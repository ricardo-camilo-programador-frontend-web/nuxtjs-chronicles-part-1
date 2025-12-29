import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    pt: 'Savana Pet Shop - Sua Loja de Produtos para Animais',
    en: 'Savana Pet Shop - Your Pet Supply Store',
  },
  descriptions: {
    pt: 'Encontre os melhores produtos para seu pet: rações, brinquedos, acessórios e muito mais. Entrega para todo o Brasil.',
    en: 'Find the best products for your pet: food, toys, accessories and more. Shipping throughout Brazil.',
  },
  keywords:
    'pet shop, produtos para pets, ração, brinquedos para pets, acessórios para animais',
  paths: {
    pt: '',
    en: '',
  },
  includeXDefault: true,
}

export function homeSEO(locale: string) {
  return createSEO(locale, seoContent)
}
