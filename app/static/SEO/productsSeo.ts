import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    'pt-BR': 'Produtos para Pets - Savana Pet Shop',
    es: 'Productos para Mascotas - Savana Pet Shop',
    en: 'Pet Products - Savana Pet Shop',
  },
  descriptions: {
    'pt-BR':
      'Encontre os melhores produtos para seu pet: rações, acessórios, brinquedos e muito mais. Qualidade e variedade para cães e gatos na Savana Pet Shop.',
    es: 'Encuentra los mejores productos para tu mascota: alimentos, accesorios, juguetes y mucho más. Calidad y variedad para perros y gatos en Savana Pet Shop.',
    en: 'Find the best products for your pet: food, accessories, toys and more. Quality and variety for dogs and cats at Savana Pet Shop.',
  },
  keywords:
    'produtos para pets, ração para cachorro, ração para gato, acessórios pet, brinquedos pet, pet shop online',
  paths: {
    'pt-BR': '/produtos',
    es: '/productos',
    'en-US': '/products',
  },
}

export function productsSEO(locale: string) {
  return createSEO(locale, seoContent)
}
