export function discountSEO(locale: string) {
  const getLocalizedContent = (key: string) => {
    switch (key) {
      case 'title':
      case 'og:title':
      case 'twitter:title':
        switch (locale) {
          case 'pt-BR':
            return 'Descontos e Ofertas Especiais - Savana Pet Shop'
          case 'es':
            return 'Descuentos y Ofertas Especiales - Savana Pet Shop'
          default:
            return 'Discounts and Special Offers - Savana Pet Shop'
        }

      case 'description':
      case 'og:description':
      case 'twitter:description':
        switch (locale) {
          case 'pt-BR':
            return 'Aproveite os melhores descontos em produtos para pets na Savana Pet Shop. Ofertas especiais em rações, acessórios e muito mais para seu animal de estimação.'
          case 'es':
            return 'Aprovecha los mejores descuentos en productos para mascotas en Savana Pet Shop. Ofertas especiales en alimentos, accesorios y mucho más para tu mascota.'
          default:
            return 'Get the best discounts on pet supplies at Savana Pet Shop. Special offers on pet food, accessories and much more for your beloved pet.'
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
          'descontos pet shop, ofertas pet shop, promoções produtos pet, desconto ração, ofertas acessórios pets',
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
      {
        property: 'og:url',
        content: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/',
      },
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
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//pt-BR/discount',
      },
      {
        rel: 'alternate',
        hreflang: 'es',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//es/discount',
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//en-US/discount',
      },
    ],
  }
}
