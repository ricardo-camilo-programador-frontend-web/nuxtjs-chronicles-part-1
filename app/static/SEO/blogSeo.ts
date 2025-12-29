import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: 'Blog | Pet Care Tips and Articles',
  descriptions:
    'Discover helpful articles and tips about pet care, animal health, and more.',
  keywords: 'blog, artigos, pets, dicas para pets, cuidados com animais',
  paths: {
    pt: '/blog',
    en: '/blog',
  },
  includeAuthor: false,
  ogImage: 'URL_TO_DEFAULT_BLOG_IMAGE',
}

export function blogSEO(locale: string) {
  const ogUrl = `https://savana-nuxtjs-chronicles-part-1.netlify.app/${locale}/blog`
  return createSEO(locale, { ...seoContent, ogUrl })
}
