import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    'pt-BR': 'Perguntas Frequentes (FAQ) - Savana Pet Shop',
    es: 'Preguntas Frecuentes (FAQ) - Savana Pet Shop',
    en: 'Frequently Asked Questions (FAQ) - Savana Pet Shop',
  },
  descriptions: {
    'pt-BR':
      'Encontre respostas para as dúvidas mais comuns sobre produtos, entregas, pagamentos e serviços da Savana Pet Shop. Suporte completo para melhor atender você e seu pet.',
    es: 'Encuentra respuestas a las preguntas más frecuentes sobre productos, envíos, pagos y servicios de Savana Pet Shop. Soporte completo para mejor atender a ti y tu mascota.',
    en: 'Find answers to common questions about products, shipping, payments, and services at Savana Pet Shop. Complete support to better serve you and your pet.',
  },
  keywords: 'FAQ pet shop, dúvidas frequentes, perguntas pet shop, ajuda pet shop, suporte pet shop',
  paths: {
    'pt-BR': '/faq',
    es: '/faq',
    'en-US': '/faq',
  },
}

export function faqSEO(locale: string) {
  return createSEO(locale, seoContent)
}
