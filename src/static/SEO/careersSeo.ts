export function careersSEO(locale: string) {
  const getLocalizedContent = (key: string) => {
    switch (key) {
      case 'title':
      case 'og:title':
      case 'twitter:title':
        switch (locale) {
          case 'pt-BR':
            return 'Carreiras na Savana Pet Shop - Junte-se à Nossa Equipe'
          case 'es':
            return 'Carreras en Savana Pet Shop - Únete a Nuestro Equipo'
          default:
            return 'Careers at Savana Pet Shop - Join Our Team'
        }

      case 'description':
      case 'og:description':
      case 'twitter:description':
        switch (locale) {
          case 'pt-BR':
            return 'Descubra oportunidades de carreira na Savana Pet Shop. Faça parte de uma equipe apaixonada por pets e inovação.'
          case 'es':
            return 'Descubre oportunidades de carrera en Savana Pet Shop. Únete a un equipo apasionado por las mascotas y la innovación.'
          default:
            return 'Discover career opportunities at Savana Pet Shop. Join a team passionate about pets and innovation.'
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
          'carreiras, empregos, vagas, oportunidades, trabalhe conosco, pet shop, savana',
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
        content: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//careers',
      },
      {
        property: 'og:image',
        content:
          'https://savana-nuxtjs-chronicles-part-1.netlify.app//imagem-compartilhamento.jpg',
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
        content:
          'https://savana-nuxtjs-chronicles-part-1.netlify.app//imagem-compartilhamento.jpg',
      },
      {
        rel: 'alternate',
        hreflang: 'pt-BR',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//pt/careers',
      },
      {
        rel: 'alternate',
        hreflang: 'es',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//es/careers',
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app//en/careers',
      },
    ],
  }
}
