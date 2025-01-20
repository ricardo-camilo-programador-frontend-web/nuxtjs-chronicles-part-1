<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
</script>

<template>
  <footer class="w-full py-12 overflow-hidden bg-gray-100 border-t min-w-screen grud">
    <div class="container w-full px-4 max-w-[17rem] md:max-w-7xl mx-auto">
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
              class="group"
              target="_blank"
            >
              <Icon
                :name="link.icon"
                :aria-label="link.ariaLabel"
                class="w-10 h-10 text-gray-800 transition-all duration-200 ease-in-out rounded-full cursor-pointer group-hover:text-orange-500"
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
                class="text-gray-600 group-hover:text-orange-500 transition-all duration-200 ease-in-out"
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
                class="text-gray-600 group-hover:text-orange-500 transition-all duration-200 ease-in-out"
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
            <li class="text-gray-600 hover:text-orange-500 transition-all duration-200 ease-in-out">
              {{ t('footer.storeInfo.address1') }}
            </li>

            <li class="text-gray-600 hover:text-orange-500 transition-all duration-200 ease-in-out">
              {{ t('footer.storeInfo.address2') }}
            </li>

            <li class="text-gray-600 hover:text-orange-500 transition-all duration-200 ease-in-out">
              {{ t('footer.storeInfo.phone') }}
            </li>

            <li class="text-gray-600 hover:text-orange-500 transition-all duration-200 ease-in-out">
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

      <div class="flex flex-col md:flex-row items-center justify-between pt-8 border-t gap-6">
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
