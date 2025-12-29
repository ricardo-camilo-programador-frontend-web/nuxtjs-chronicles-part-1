import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    pt: 'Política de Privacidade - Savana Pet Shop',
    en: 'Privacy Policy - Savana Pet Shop',
  },
  descriptions: {
    pt: 'Conheça nossa política de privacidade e saiba como a Savana Pet Shop protege seus dados pessoais. Transparência e segurança em primeiro lugar.',
    en: 'Learn about our privacy policy and how Savana Pet Shop protects your personal data. Transparency and security come first.',
  },
  keywords:
    'política de privacidade pet shop, proteção de dados, privacidade, dados pessoais, segurança de dados',
  paths: {
    pt: '/privacy-policy',
    en: '/privacy-policy',
  },
}

export function privacyPolicySEO(locale: string) {
  return createSEO(locale, seoContent)
}
