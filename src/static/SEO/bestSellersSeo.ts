export function bestSellersSEO(locale: string) {
  const getLocalizedContent = (key: string) => {
    switch (key) {
      case 'title':
      case 'og:title':
      case 'twitter:title':
        switch (locale) {
          case 'pt-BR':
            return 'Produtos Mais Vendidos | Savana Pet Shop'
          case 'es':
            return 'Productos Más Vendidos | Savana Pet Shop'
          default:
            return 'Best Selling Products | Savana Pet Shop'
        }

      case 'description':
      case 'og:description':
      case 'twitter:description':
        switch (locale) {
          case 'pt-BR':
            return 'Descubra os produtos para pets mais populares da Savana Pet Shop. Itens favoritos dos nossos clientes com as melhores avaliações.'
          case 'es':
            return 'Descubre los productos para mascotas más populares de Savana Pet Shop. Los artículos favoritos de nuestros clientes con las mejores valoraciones.'
          default:
            return 'Discover Savana Pet Shop\'s most popular pet products. Customer favorites with the best ratings.'
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
          'produtos mais vendidos para pets, best sellers pet shop, produtos populares para animais, melhores produtos para pets',
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
        content: 'https://www.seusite.com.br/best-sellers',
      },
      {
        property: 'og:image',
        content: 'https://www.seusite.com.br/imagem-compartilhamento.jpg',
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
        content: 'https://www.seusite.com.br/imagem-compartilhamento.jpg',
      },
      {
        rel: 'alternate',
        hreflang: 'pt-BR',
        href: 'https://www.seusite.com.br/pt/best-sellers',
      },
      {
        rel: 'alternate',
        hreflang: 'es',
        href: 'https://www.seusite.com.br/es/best-sellers',
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://www.seusite.com.br/en/best-sellers',
      },
    ],
  }
}
