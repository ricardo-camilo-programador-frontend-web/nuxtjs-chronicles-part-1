<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
const { $env } = useNuxtApp()

interface FooterLink {
  path: string
  translationKey: string
}

const companyLinks: Array<FooterLink> = [
  { path: '/about', translationKey: 'footer.links.about' },
  { path: '/blog', translationKey: 'footer.links.blog' },
  { path: '/gift-cards', translationKey: 'footer.links.giftCards' },
  { path: '/careers', translationKey: 'footer.links.careers' },
]

const usefulLinks: Array<FooterLink> = [
  { path: '/products', translationKey: 'footer.useful.newProducts' },
  { path: '/best-sellers', translationKey: 'footer.useful.bestSellers' },
  { path: '/discount', translationKey: 'footer.useful.discount' },
  { path: '/faq', translationKey: 'footer.useful.faq' },
]

interface SocialLink {
  platform: string
  icon: string
  url: string
  ariaLabel: string
}

interface PaymentMethod {
  icon: string
  ariaLabel: string
}

const socialLinks: Array<SocialLink> = [
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

const paymentMethods: Array<PaymentMethod> = [
  { icon: 'simple-icons:visa', ariaLabel: 'Visa' },
  { icon: 'cib:american-express', ariaLabel: 'American Express' },
  { icon: 'simple-icons:mastercard', ariaLabel: 'Mastercard' },
  { icon: 'mdi:paypal', ariaLabel: 'PayPal' },
]
</script>

<template>
  <footer class="w-full py-12 overflow-hidden bg-gray-100 border-t min-w-screen grud">
    <div class="container w-full px-4  max-w-7xl mx-auto">
      <div class="grid grid-cols-1 gap-8 mb-12 md:grid-cols-4">
        <div class="space-y-4">
          <div
            class="w-32 h-12 overflow-visible rounded-md"
            aria-label="Logo placeholder"
          >
            <Logo />
          </div>

          <p class="max-w-xs text-gray-600">
            {{ t('footer.description') }}
          </p>

          <div class="grid grid-cols-4 gap-4">
            <NuxtLink
              v-for="link in socialLinks"
              :key="link.platform"
              :to="link.url"
              target="_blank"
            >
              <Icon
                :name="link.icon"
                :aria-label="link.ariaLabel"
                class="w-10 h-10 text-gray-800 transition-all duration-200 ease-in-out rounded-full cursor-pointer hover:text-orange-500"
              />
            </NuxtLink>
          </div>
        </div>

        <div>
          <h3 class="mb-4 font-semibold text-gray-900">
            {{ t('footer.company') }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="link in companyLinks"
              :key="link.path"
            >
              <NuxtLink
                :to="localePath(link.path)"
                class="text-gray-600 hover:text-gray-900"
              >
                {{ t(link.translationKey) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 font-semibold text-gray-900">
            {{ t('footer.usefulLinks') }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="link in usefulLinks"
              :key="link.path"
            >
              <NuxtLink
                :to="localePath(link.path)"
                class="text-gray-600 hover:text-gray-900"
              >
                {{ t(link.translationKey) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 font-semibold text-gray-900">
            {{ t('footer.store') }}
          </h3>
          <ul class="space-y-3">
            <li class="text-gray-600">
              {{ t('footer.storeInfo.address1') }}
            </li>

            <li class="text-gray-600">
              {{ t('footer.storeInfo.address2') }}
            </li>

            <li class="text-gray-600">
              {{ t('footer.storeInfo.phone') }}
            </li>

            <li class="text-gray-600">
              {{ $env.EMAIL }}
            </li>
          </ul>
        </div>
      </div>

      <div class="flex items-center justify-between pt-8 border-t">
        <p class="text-sm text-gray-600">
          {{
            t('footer.copyright', {
              year: new Date().getFullYear(),
              designer: $env.FIGMA_USERNAME,
            })
          }}
        </p>

        <div class="flex space-x-4">
          <Icon
            v-for="method in paymentMethods"
            :key="method.ariaLabel"
            :name="method.icon"
            :aria-label="method.ariaLabel"
            class="w-12 h-8 text-gray-800 transition-all duration-200 ease-in-out rounded cursor-pointer hover:text-orange-500"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
