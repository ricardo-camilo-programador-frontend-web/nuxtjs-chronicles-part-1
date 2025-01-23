export interface BlogArticle {
  title: string
  description: string
  image: string
  url: string
  publishDate: string
  author: string
}

export function blogArticleSEO(locale: string, article: BlogArticle) {
  const getLocalizedContent = (key: string) => {
    switch (key) {
      case 'title':
      case 'og:title':
      case 'twitter:title':
        return article.title

      case 'description':
      case 'og:description':
      case 'twitter:description':
        return article.description
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
        content: 'blog, artigos, pets, dicas para pets, cuidados com animais',
      },
      {
        property: 'og:title',
        content: getLocalizedContent('og:title'),
      },
      {
        property: 'og:description',
        content: getLocalizedContent('og:description'),
      },
      { property: 'og:type', content: 'article' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:url', content: article.url },
      {
        property: 'og:image',
        content: article.image,
      },
      { property: 'og:locale', content: locale },
      {
        property: 'og:locale:alternate',
        content: ['pt-BR', 'es', 'en'].filter(lang => lang !== locale),
      },
      { name: 'author', content: article.author },
      { property: 'article:published_time', content: article.publishDate },
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
        content: article.image,
      },
      {
        rel: 'alternate',
        hreflang: 'pt-BR',
        href: 'https://www.seusite.com.br/pt/blog',
      },
      {
        rel: 'alternate',
        hreflang: 'es',
        href: 'https://www.seusite.com.br/es/blog',
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://www.seusite.com.br/en/blog',
      },
    ],
  }
}
