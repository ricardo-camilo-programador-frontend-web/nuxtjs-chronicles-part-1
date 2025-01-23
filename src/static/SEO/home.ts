export function homeSEO(locale: string) {
  const getLocalizedContent = (key: string) => {
    switch (key) {
      case 'title':
      case 'og:title':
      case 'twitter:title':
        switch (locale) {
          case 'pt-BR':
            return 'Savana Pet Shop - Sua Loja de Produtos para Animais'
          case 'es':
            return 'Savana Pet Shop - Tu Tienda de Productos para Mascotas'
          default:
            return 'Savana Pet Shop - Your Pet Supply Store'
        }

      case 'description':
      case 'og:description':
      case 'twitter:description':
        switch (locale) {
          case 'pt-BR':
            return 'Encontre os melhores produtos para seu pet: rações, brinquedos, acessórios e muito mais. Entrega para todo o Brasil.'
          case 'es':
            return 'Encuentra los mejores productos para tu mascota: alimentos, juguetes, accesorios y más. Envíos a todo Brasil.'
          default:
            return 'Find the best products for your pet: food, toys, accessories and more. Shipping throughout Brazil.'
        }
    }
  }

  return {
    title: getLocalizedContent('title'),
    meta: [
      {
        name: 'description',
        content: getLocalizedContent('description'),
      },
      {
        name: 'keywords',
        content:
          'pet shop, produtos para pets, ração, brinquedos para pets, acessórios para animais',
      },
      {
        property: 'og:title',
        content: getLocalizedContent('og:title'),
      },
      {
        property: 'og:description',
        content: getLocalizedContent('og:description'),
      },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:url', content: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/' },
      {
        property: 'og:image',
        content: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//imagem-compartilhamento.jpg',
      },
      { property: 'og:locale', content: locale },
      {
        property: 'og:locale:alternate',
        content: ['pt-BR', 'es', 'en'].filter(lang => lang !== locale),
      },
      { name: 'author', content: 'Savana Pet Shop' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'language', content: locale },
      { name: 'revisit-after', content: '7 days' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: getLocalizedContent('twitter:title'),
      },
      {
        name: 'twitter:description',
        content: getLocalizedContent('twitter:description'),
      },
      {
        name: 'twitter:image',
        content: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//imagem-compartilhamento.jpg',
      },
      {
        rel: 'alternate',
        hreflang: 'pt-BR',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//pt-BR',
      },
      {
        rel: 'alternate',
        hreflang: 'es',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//es',
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//en',
      },
      {
        rel: 'alternate',
        hreflang: 'x-default',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/',
      },
    ],
  }
}
