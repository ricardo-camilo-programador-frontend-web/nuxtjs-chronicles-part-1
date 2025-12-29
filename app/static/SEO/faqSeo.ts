import { createSEO } from '~/utils/seoFactory'

const seoContent = {
  titles: {
    pt: 'Perguntas Frequentes (FAQ) - Savana Pet Shop',
    en: 'Frequently Asked Questions (FAQ) - Savana Pet Shop',
  },
  descriptions: {
    pt: 'Encontre respostas para as dúvidas mais comuns sobre produtos, entregas, pagamentos e serviços da Savana Pet Shop. Suporte completo para melhor atender você e seu pet.',
    en: 'Find answers to common questions about products, shipping, payments, and services at Savana Pet Shop. Complete support to better serve you and your pet.',
  },
  keywords:
    'FAQ pet shop, dúvidas frequentes, perguntas pet shop, ajuda pet shop, suporte pet shop',
  paths: {
    pt: '/faq',
    en: '/faq',
  },
}

export function faqSEO(locale: string) {
  return createSEO(locale, seoContent)
}
