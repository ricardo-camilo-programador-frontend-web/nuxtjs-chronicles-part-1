export function faqSEO(locale: string) {
  const getLocalizedContent = (key: string) => {
    switch (key) {
      case 'title':
      case 'og:title':
      case 'twitter:title':
        switch (locale) {
          case 'pt-BR':
            return 'Perguntas Frequentes (FAQ) - Savana Pet Shop'
          case 'es':
            return 'Preguntas Frecuentes (FAQ) - Savana Pet Shop'
          default:
            return 'Frequently Asked Questions (FAQ) - Savana Pet Shop'
        }

      case 'description':
      case 'og:description':
      case 'twitter:description':
        switch (locale) {
          case 'pt-BR':
            return 'Encontre respostas para as dúvidas mais comuns sobre produtos, entregas, pagamentos e serviços da Savana Pet Shop. Suporte completo para melhor atender você e seu pet.'
          case 'es':
            return 'Encuentra respuestas a las preguntas más frecuentes sobre productos, envíos, pagos y servicios de Savana Pet Shop. Soporte completo para mejor atender a ti y tu mascota.'
          default:
            return 'Find answers to common questions about products, shipping, payments, and services at Savana Pet Shop. Complete support to better serve you and your pet.'
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
          'FAQ pet shop, dúvidas frequentes, perguntas pet shop, ajuda pet shop, suporte pet shop',
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
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/pt-BR/faq',
      },
      {
        rel: 'alternate',
        hreflang: 'es',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/es/faq',
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/en-US/faq',
      },
    ],
  }
}

export function privacyPolicySEO(locale: string) {
  const getLocalizedContent = (key: string) => {
    switch (key) {
      case 'title':
      case 'og:title':
      case 'twitter:title':
        switch (locale) {
          case 'pt-BR':
            return 'Política de Privacidade - Savana Pet Shop'
          case 'es':
            return 'Política de Privacidad - Savana Pet Shop'
          default:
            return 'Privacy Policy - Savana Pet Shop'
        }

      case 'description':
      case 'og:description':
      case 'twitter:description':
        switch (locale) {
          case 'pt-BR':
            return 'Conheça nossa política de privacidade e saiba como a Savana Pet Shop protege seus dados pessoais. Transparência e segurança em primeiro lugar.'
          case 'es':
            return 'Conoce nuestra política de privacidad y cómo Savana Pet Shop protege tus datos personales. Transparencia y seguridad ante todo.'
          default:
            return 'Learn about our privacy policy and how Savana Pet Shop protects your personal data. Transparency and security come first.'
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
          'política de privacidade pet shop, proteção de dados, privacidade, dados pessoais, segurança de dados',
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
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/pt-BR/privacy-policy',
      },
      {
        rel: 'alternate',
        hreflang: 'es',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/es/privacy-policy',
      },
      {
        rel: 'alternate',
        hreflang: 'en-US',
        href: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/en-US/privacy-policy',
      },
    ],
  }
}
