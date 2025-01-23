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
      { property: 'og:url', content: 'https://www.seusite.com.br' },
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
        href: 'https://www.seusite.com.br/pt/faq',
      },
      {
        rel: 'alternate',
        hreflang: 'es',
        href: 'https://www.seusite.com.br/es/faq',
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://www.seusite.com.br/en/faq',
      },
    ],
  }
}

export function giftCardsSEO(locale: string) {
  const getLocalizedContent = (key: string) => {
    switch (key) {
      case 'title':
      case 'og:title':
      case 'twitter:title':
        switch (locale) {
          case 'pt-BR':
            return 'Vale Presente - Cartão Presente Digital - Savana Pet Shop'
          case 'es':
            return 'Tarjeta de Regalo Digital - Savana Pet Shop'
          default:
            return 'Digital Gift Cards - Savana Pet Shop'
        }

      case 'description':
      case 'og:description':
      case 'twitter:description':
        switch (locale) {
          case 'pt-BR':
            return 'Presenteie com um Vale Presente digital da Savana Pet Shop. O presente ideal para quem ama pets. Válido para toda a loja, entrega instantânea por email.'
          case 'es':
            return 'Regala una Tarjeta de Regalo digital de Savana Pet Shop. El regalo perfecto para amantes de mascotas. Válido en toda la tienda, entrega instantánea por email.'
          default:
            return 'Give a Savana Pet Shop digital Gift Card. The perfect gift for pet lovers. Valid throughout the store, instant email delivery.'
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
          'gift card pet shop, vale presente pet shop, cartão presente pet shop, presente digital, gift card for pets',
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
      { property: 'og:url', content: 'https://www.seusite.com.br' },
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
        href: 'https://www.seusite.com.br/pt/gift-cards',
      },
      {
        rel: 'alternate',
        hreflang: 'es',
        href: 'https://www.seusite.com.br/es/gift-cards',
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://www.seusite.com.br/en/gift-cards',
      },
    ],
  }
}
