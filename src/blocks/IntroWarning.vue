<script setup lang="ts">
import { useDevCounter } from '@/composables/useDevCounter'
import { useGTM } from '@/composables/useGTM'
import { Dialog, DialogPanel, DialogTitle, Switch, TransitionChild, TransitionRoot } from '@headlessui/vue'

const storageAnalyticsName = 'analytics-enabled'
const showIntroWarning = 'show-intro-warning-modal'
const lastVisit = 'last-visit'
const isOpen = ref(true)
const analyticsEnabled = ref(true)
const storage = useLocalStorage()
const localePath = useLocalePath()
const { t } = useI18n()
const { enableGTM, disableGTM } = useGTM()
const { enableCounter } = useDevCounter()
const { $env } = useNuxtApp()

function handleClose() {
  isOpen.value = false
  storage.setItem(lastVisit, new Date().toISOString())
  storage.setItem(showIntroWarning, 'false')
  storage.setItem(storageAnalyticsName, analyticsEnabled.value.toString())
}

onMounted(() => {
  enableCounter()

  const lastVisitTime = storage.getItem(lastVisit)
  const tenMinutesInMs = 10 * 60 * 1000

  const shouldShowModal = !lastVisitTime
    || (new Date().getTime() - new Date(lastVisitTime).getTime()) > tenMinutesInMs

  if (!storage.getItem(storageAnalyticsName)) {
    storage.setItem(storageAnalyticsName, 'true')
  }

  analyticsEnabled.value = storage.getItem(storageAnalyticsName) === 'true'
  isOpen.value = shouldShowModal

  if (analyticsEnabled.value) {
    enableGTM()
  }
})

watch(analyticsEnabled, (newValue) => {
  storage.setItem(storageAnalyticsName, newValue.toString())
  if (newValue) {
    enableGTM()
  }
  else {
    disableGTM()
  }
})
</script>

<template>
  <div v-if="isOpen">
    <TransitionRoot
      :show="isOpen"
      as="template"
      class="z-[99]"
      appear
    >
      <Dialog
        as="div"
        class="relative z-50"
        @close="handleClose"
      >
        <TransitionChild
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex items-center justify-center min-h-full p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-2xl p-6 overflow-hidden transition-all transform bg-white shadow-xl rounded-2xl">
                <button
                  type="button"
                  class="absolute text-gray-400 top-4 right-4 hover:text-gray-500"
                  @click="handleClose"
                >
                  <span class="sr-only">{{ t('close') }}</span>
                  <Icon
                    name="mdi:close"
                    class="w-6 h-6"
                    aria-hidden="true"
                  />
                </button>

                <DialogTitle class="mb-6 text-2xl font-bold text-center">
                  {{ $env.PROJECT_TITLE }}
                </DialogTitle>

                <div class="space-y-6">
                  <div class="bg-gradient-to-r from-yellow-600 to-orange-500 p-6 rounded-xl shadow-lg">
                    <p class="text-xl font-medium text-center text-white">
                      {{ t('introWarning.welcome') }}
                    </p>
                  </div>

                  <div class="p-6 bg-gray-50 rounded-xl">
                    <p class="leading-relaxed text-center text-gray-700">
                      {{ t('introWarning.description') }}
                    </p>
                  </div>

                  <div class="space-y-4">
                    <NuxtLink
                      :to="$env.PORTFOLIO_URL"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center gap-2 p-3 transition-colors rounded-lg bg-gray-50 hover:bg-gray-100 relative  mx-auto"
                    >
                      <img
                        src="@/assets/images/ricardo-camilo-frontend-developer-frontend-engineer-software-engineer-web-developer-vuejs-vue-reactjs-react-javascript-typescript-component-architecture.webp"
                        alt="Heart circle"
                        class="w-8 h-8 mr-2"
                      />
                      <span class="font-medium text-gray-700">
                        {{ t('introWarning.checkOutPortfolio') }}
                      </span>
                    </NuxtLink>

                    <NuxtLink
                      :to="`https://www.linkedin.com/in/${$env.LINKEDIN_USERNAME}`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center gap-3 p-4 transition-colors bg-blue-50 hover:bg-blue-100 rounded-xl group"
                    >
                      <Icon
                        name="mdi:linkedin"
                        class="w-6 h-6 text-blue-600"
                      />
                      <span class="font-medium text-blue-600 group-hover:underline">
                        {{ t('introWarning.connectLinkedIn') }}
                      </span>
                    </NuxtLink>

                    <NuxtLink
                      :to="`https://github.com/${$env.GITHUB_USERNAME}`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center gap-3 p-4 transition-colors bg-gray-50 hover:bg-gray-100 rounded-xl group"
                    >
                      <Icon
                        name="mdi:github"
                        class="w-6 h-6 text-gray-700"
                      />
                      <span class="font-medium text-gray-700 group-hover:underline">
                        {{ t('introWarning.checkGitHub') }}
                      </span>
                    </NuxtLink>
                  </div>

                  <div class="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-xl">
                    <div class="flex items-center gap-3">
                      <span class="text-gray-700">{{ t('introWarning.allowAnalytics') }}</span>
                      <Switch
                        v-model="analyticsEnabled"
                        :class="[analyticsEnabled ? 'bg-green-600' : 'bg-gray-200']"
                        class="relative inline-flex items-center h-6 rounded-full w-11"
                      >
                        <span
                          :class="[analyticsEnabled ? 'translate-x-6' : 'translate-x-1']"
                          class="inline-block w-4 h-4 transition transform bg-white rounded-full"
                        />
                      </Switch>
                    </div>

                    <NuxtLink
                      :to="localePath({ path: '/privacy-policy' })"
                      target="_blank"
                      class="text-blue-500 hover:text-blue-600 hover:underline"
                    >
                      {{ t('introWarning.privacyPolicy') }}
                    </NuxtLink>
                  </div>

                  <div class="pt-4 space-y-2 border-t">
                    <p class="text-sm text-center text-gray-500">
                      {{ t('introWarning.designCredits') }}
                      <NuxtLink
                        :to="`https://www.figma.com/${$env.FIGMA_USERNAME}`"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-green-600 hover:text-green-700 hover:underline"
                      >
                        {{ $env.FIGMA_USERNAME }}
                      </NuxtLink>
                    </p>
                    <p class="text-sm text-center text-gray-500">
                      <NuxtLink
                        :to="`https://www.figma.com/community/file/${$env.FIGMA_ORIGINAL_DESIGN}`"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-green-600 hover:text-green-700 hover:underline"
                      >
                        {{ t('introWarning.viewOriginalDesign') }}
                      </NuxtLink>
                    </p>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <div />
  </div>
</template>
