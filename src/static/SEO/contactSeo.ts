export function contactSEO(locale: string) {
  const getLocalizedContent = (key: string) => {
    switch (key) {
      case 'title':
      case 'og:title':
      case 'twitter:title':
        switch (locale) {
          case 'pt-BR':
            return 'Contato - Savana Pet Shop'
          case 'es':
            return 'Contacto - Savana Pet Shop'
          default:
            return 'Contact - Savana Pet Shop'
        }

      case 'description':
      case 'og:description':
      case 'twitter:description':
        switch (locale) {
          case 'pt-BR':
            return 'Entre em contato com a Savana Pet Shop. Estamos aqui para ajudar com todas as suas necessidades para pets.'
          case 'es':
            return 'Contacta con Savana Pet Shop. Estamos aquí para ayudarte con todas tus necesidades para mascotas.'
          default:
            return 'Contact Savana Pet Shop. We are here to help with all your pet needs.'
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
        content: 'contato pet shop, atendimento, suporte, fale conosco, savana pet shop',
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
        content: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//contato',
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
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//pt-BR/contato',
      },
      {
        rel: 'alternate',
        hreflang: 'es',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//es/contact',
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//en-US/contact',
      },
    ],
  }
}
