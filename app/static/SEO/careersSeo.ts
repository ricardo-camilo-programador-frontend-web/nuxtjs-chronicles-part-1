import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    pt: 'Carreiras na Savana Pet Shop - Junte-se à Nossa Equipe',
    en: 'Careers at Savana Pet Shop - Join Our Team',
  },
  descriptions: {
    pt: 'Descubra oportunidades de carreira na Savana Pet Shop. Faça parte de uma equipe apaixonada por pets e inovação.',
    en: 'Discover career opportunities at Savana Pet Shop. Join a team passionate about pets and innovation.',
  },
  keywords:
    'carreiras, empregos, vagas, oportunidades, trabalhe conosco, pet shop, savana',
  paths: {
    pt: '/careers',
    en: '/careers',
  },
  ogUrl: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/careers',
}

export function careersSEO(locale: string) {
  return createSEO(locale, seoContent)
}
