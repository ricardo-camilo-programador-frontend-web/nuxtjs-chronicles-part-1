<script setup lang="ts">
import { companyLinks, getSocialLinks, paymentMethods, usefulLinks } from '~/static/footer'

const localePath = useLocalePath()
const { t } = useI18n()
const socialLinks = getSocialLinks()
</script>

<template>
  <footer
    class="grud w-full min-w-screen overflow-hidden border-t bg-gray-100 py-12"
  >
    <div class="container mx-auto w-full max-w-[95vw] px-4 md:max-w-7xl">
      <div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div class="space-y-4">
          <div
            class="h-12 w-32 overflow-visible rounded-md"
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
              class="group"
              target="_blank"
            >
              <Icon
                :name="link.icon"
                :aria-label="link.ariaLabel"
                class="h-10 w-10 cursor-pointer rounded-full text-gray-800 transition-all duration-200 ease-in-out group-hover:text-orange-500"
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
              class="group"
            >
              <NuxtLink
                :to="localePath(link.path)"
                class="text-gray-600 transition-all duration-200 ease-in-out group-hover:text-orange-500"
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
              class="group"
            >
              <NuxtLink
                :to="localePath(link.path)"
                class="text-gray-600 transition-all duration-200 ease-in-out group-hover:text-orange-500"
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
            <li
              class="text-gray-600 transition-all duration-200 ease-in-out hover:text-orange-500"
            >
              {{ t('footer.storeInfo.address1') }}
            </li>

            <li
              class="text-gray-600 transition-all duration-200 ease-in-out hover:text-orange-500"
            >
              {{ t('footer.storeInfo.address2') }}
            </li>

            <li
              class="text-gray-600 transition-all duration-200 ease-in-out hover:text-orange-500"
            >
              {{ t('footer.storeInfo.phone') }}
            </li>

            <li
              class="text-gray-600 transition-all duration-200 ease-in-out hover:text-orange-500"
            >
              {{ $env.EMAIL }}
            </li>

            <BuyMeCoffee
              :username="$env.BUYMEACOFFEE_USERNAME"
              :message="t('footer.buyMeACoffee')"
              theme="colored"
            />
          </ul>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row"
      >
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
            class="h-8 w-12 cursor-pointer rounded text-gray-800 transition-all duration-200 ease-in-out hover:text-orange-500"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
