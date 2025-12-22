import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    'pt-BR': 'Savana Pet Shop - Sua Loja de Produtos para Animais',
    es: 'Savana Pet Shop - Tu Tienda de Productos para Mascotas',
    en: 'Savana Pet Shop - Your Pet Supply Store',
  },
  descriptions: {
    'pt-BR':
      'Encontre os melhores produtos para seu pet: rações, brinquedos, acessórios e muito mais. Entrega para todo o Brasil.',
    es: 'Encuentra los mejores productos para tu mascota: alimentos, juguetes, accesorios y más. Envíos a todo Brasil.',
    en: 'Find the best products for your pet: food, toys, accessories and more. Shipping throughout Brazil.',
  },
  keywords: 'pet shop, produtos para pets, ração, brinquedos para pets, acessórios para animais',
  paths: {
    'pt-BR': '',
    es: '',
    'en-US': '',
  },
  includeXDefault: true,
}

export function homeSEO(locale: string) {
  return createSEO(locale, seoContent)
}
