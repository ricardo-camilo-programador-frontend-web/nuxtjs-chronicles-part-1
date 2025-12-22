interface LocalizedContent {
  'pt-BR': string
  es: string
  en: string
}

interface SEOContent {
  titles: LocalizedContent | string
  descriptions: LocalizedContent | string
  keywords: string
  paths: {
    'pt-BR': string
    es: string
    'en-US': string
  }
  ogUrl?: string
  ogImage?: string
  includeXDefault?: boolean
  includeAuthor?: boolean
}

const BASE_URL = 'https://savana-nuxtjs-chronicles-part-1.netlify.app'
const DEFAULT_OG_IMAGE = `${BASE_URL}/imagem-compartilhamento.jpg`
const SUPPORTED_LOCALES = ['pt-BR', 'es', 'en'] as const

function getLocalizedValue(content: LocalizedContent | string, locale: string): string {
  if (typeof content === 'string') {
    return content
  }
  if (locale === 'pt-BR' || locale === 'es') {
    return content[locale]
  }
  return content.en
}

function generateAlternateLinks(paths: SEOContent['paths'], includeXDefault = false) {
  const links = [
    {
      rel: 'alternate',
      hreflang: 'pt-BR',
      href: `${BASE_URL}/pt-BR${paths['pt-BR']}`,
    },
    {
      rel: 'alternate',
      hreflang: 'es',
      href: `${BASE_URL}/es${paths.es}`,
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: `${BASE_URL}/en-US${paths['en-US']}`,
    },
  ]

  if (includeXDefault) {
    links.push({
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${BASE_URL}/`,
    })
  }

  return links
}

export function createSEO(locale: string, content: SEOContent) {
  const title = getLocalizedValue(content.titles, locale)
  const description = getLocalizedValue(content.descriptions, locale)
  const ogUrl = content.ogUrl || BASE_URL
  const ogImage = content.ogImage || DEFAULT_OG_IMAGE
  const alternateLocales = SUPPORTED_LOCALES.filter(lang => lang !== locale)
  const includeAuthor = content.includeAuthor !== false

  const meta = [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content: content.keywords,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    { property: 'og:type', content: 'website' },
    { name: 'robots', content: 'index, follow' },
    {
      property: 'og:url',
      content: ogUrl,
    },
    {
      property: 'og:image',
      content: ogImage,
    },
    { property: 'og:locale', content: locale },
    {
      property: 'og:locale:alternate',
      content: alternateLocales,
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'language', content: locale },
    { name: 'revisit-after', content: '7 days' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: ogImage,
    },
    ...generateAlternateLinks(content.paths, content.includeXDefault),
  ]

  if (includeAuthor) {
    meta.splice(meta.findIndex(m => m.property === 'og:locale:alternate') + 1, 0, {
      name: 'author',
      content: 'Savana Pet Shop',
    })
  }

  return {
    title,
    meta,
  }
}

