import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    'pt-BR': 'Política de Privacidade - Savana Pet Shop',
    es: 'Política de Privacidad - Savana Pet Shop',
    en: 'Privacy Policy - Savana Pet Shop',
  },
  descriptions: {
    'pt-BR':
      'Conheça nossa política de privacidade e saiba como a Savana Pet Shop protege seus dados pessoais. Transparência e segurança em primeiro lugar.',
    es: 'Conoce nuestra política de privacidad y cómo Savana Pet Shop protege tus datos personales. Transparencia y seguridad ante todo.',
    en: 'Learn about our privacy policy and how Savana Pet Shop protects your personal data. Transparency and security come first.',
  },
  keywords:
    'política de privacidade pet shop, proteção de dados, privacidade, dados pessoais, segurança de dados',
  paths: {
    'pt-BR': '/privacy-policy',
    es: '/privacy-policy',
    'en-US': '/privacy-policy',
  },
}

export function privacyPolicySEO(locale: string) {
  return createSEO(locale, seoContent)
}
