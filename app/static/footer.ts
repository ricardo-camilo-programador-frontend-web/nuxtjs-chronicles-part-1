import type { FooterLink } from '~/types/footerLink'
import type { SocialLink } from '~/types/socialLink'
import type { PaymentMethod } from '~/types/paymentMethod'

export const companyLinks: Array<FooterLink> = [
  { path: '/about', translationKey: 'footer.links.about' },
  { path: '/blog', translationKey: 'footer.links.blog' },
  { path: '/gift-cards', translationKey: 'footer.links.giftCards' },
  { path: '/careers', translationKey: 'footer.links.careers' },
]

export const usefulLinks: Array<FooterLink> = [
  { path: '/products', translationKey: 'footer.useful.newProducts' },
  { path: '/best-sellers', translationKey: 'footer.useful.bestSellers' },
  { path: '/discount', translationKey: 'footer.useful.discount' },
  { path: '/faq', translationKey: 'footer.useful.faq' },
]

export function getSocialLinks(): Array<SocialLink> {
  const { $env } = useNuxtApp()

  return [
    {
      platform: 'facebook',
      icon: 'mdi:facebook',
      url: `https://www.facebook.com/profile.php?id=${$env.FACEBOOK_ID}`,
      ariaLabel: 'Facebook icon',
    },
    {
      platform: 'instagram',
      icon: 'mdi:instagram',
      url: `https://www.instagram.com/${$env.INSTAGRAM_USERNAME}`,
      ariaLabel: 'Instagram icon',
    },
    {
      platform: 'twitter',
      icon: 'mdi:twitter',
      url: `https://x.com/${$env.X_USERNAME}`,
      ariaLabel: 'Twitter icon',
    },
    {
      platform: 'youtube',
      icon: 'mdi:youtube',
      url: `https://www.youtube.com/${$env.YOUTUBE_USERNAME}`,
      ariaLabel: 'YouTube icon',
    },
    {
      platform: 'linkedin',
      icon: 'mdi:linkedin',
      url: `https://www.linkedin.com/in/${$env.LINKEDIN_USERNAME}`,
      ariaLabel: 'LinkedIn icon',
    },
  ]
}

export const paymentMethods: Array<PaymentMethod> = [
  { icon: 'simple-icons:visa', ariaLabel: 'Visa' },
  { icon: 'cib:american-express', ariaLabel: 'American Express' },
  { icon: 'simple-icons:mastercard', ariaLabel: 'Mastercard' },
  { icon: 'mdi:paypal', ariaLabel: 'PayPal' },
]
