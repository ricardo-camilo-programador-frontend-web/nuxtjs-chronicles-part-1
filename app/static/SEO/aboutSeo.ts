export function aboutSEO(locale: string) {
  const getLocalizedContent = (key: string) => {
    switch (key) {
      case 'title':
      case 'og:title':
      case 'twitter:title':
        switch (locale) {
          case 'pt-BR':
            return 'Sobre a Savana Pet Shop - Nossa História e Valores'
          case 'es':
            return 'Sobre Savana Pet Shop - Nuestra Historia y Valores'
          default:
            return 'About Savana Pet Shop - Our History and Values'
        }

      case 'description':
      case 'og:description':
      case 'twitter:description':
        switch (locale) {
          case 'pt-BR':
            return 'Conheça a história da Savana Pet Shop, nossa missão, valores e compromisso com o bem-estar dos animais. Saiba por que somos referência em produtos para pets.'
          case 'es':
            return 'Conoce la historia de Savana Pet Shop, nuestra misión, valores y compromiso con el bienestar animal. Descubre por qué somos referencia en productos para mascotas.'
          default:
            return "Learn about Savana Pet Shop's history, our mission, values and commitment to animal welfare. Discover why we are a reference in pet supplies."
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
          'sobre savana pet shop, história savana pet shop, missão, valores, bem-estar animal, quem somos',
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
        content: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/imagem-compartilhamento.jpg',
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
        content: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/imagem-compartilhamento.jpg',
      },
      {
        rel: 'alternate',
        hreflang: 'pt-BR',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/pt-BR/about',
      },
      {
        rel: 'alternate',
        hreflang: 'es',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/es/about',
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/en-US/about',
      },
    ],
  }
}
