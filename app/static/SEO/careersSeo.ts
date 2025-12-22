import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    'pt-BR': 'Carreiras na Savana Pet Shop - Junte-se à Nossa Equipe',
    es: 'Carreras en Savana Pet Shop - Únete a Nuestro Equipo',
    en: 'Careers at Savana Pet Shop - Join Our Team',
  },
  descriptions: {
    'pt-BR':
      'Descubra oportunidades de carreira na Savana Pet Shop. Faça parte de uma equipe apaixonada por pets e inovação.',
    es: 'Descubre oportunidades de carrera en Savana Pet Shop. Únete a un equipo apasionado por las mascotas y la innovación.',
    en: 'Discover career opportunities at Savana Pet Shop. Join a team passionate about pets and innovation.',
  },
  keywords: 'carreiras, empregos, vagas, oportunidades, trabalhe conosco, pet shop, savana',
  paths: {
    'pt-BR': '/careers',
    es: '/careers',
    'en-US': '/careers',
  },
  ogUrl: 'https://savana-nuxtjs-chronicles-part-1.netlify.app/careers',
}

export function careersSEO(locale: string) {
  return createSEO(locale, seoContent)
}
