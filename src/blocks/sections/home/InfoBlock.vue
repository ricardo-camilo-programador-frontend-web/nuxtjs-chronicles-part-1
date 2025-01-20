<script setup lang="ts">
import backgroundGradientOrange from '@/assets/images/background-gradient-orange.webp'
import catsSilhouette from '@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section
    class="mx-auto flex max-w-[99vw] flex-col items-center justify-center py-8 md:flex-row md:justify-between md:gap-24"
    aria-labelledby="info-block-heading"
  >
    <div
      class="relative z-10 my-auto flex h-[600px] w-full flex-col items-center justify-center"
    >
      <Image
        :src="backgroundGradientOrange"
        :aria-hidden="true"
        alt=""
        class="min-w-screen absolute inset-0 z-[1] -ml-1 h-[600px] w-[120rem] rounded-full object-cover opacity-90 md:-ml-6 md:min-w-[17rem]"
        width="600"
        height="600"
      />

      <Image
        :src="catsSilhouette"
        alt="Cat silhouettes"
        class="z-[2] mx-auto w-full max-w-[18.75rem] object-cover"
        width="300"
        height="300"
      />
    </div>

    <div class="mx-auto flex w-full flex-col items-center justify-center px-4">
      <div
        class="flex w-full flex-col items-center justify-between gap-8 lg:flex-row"
      >
        <div class="relative z-10 max-w-xl">
          <span class="mb-3 inline-block text-base font-medium text-orange-500">
            {{ t('infoBlock.category') }}
          </span>

          <h2
            id="info-block-heading"
            class="mb-4 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl"
          >
            {{ t('infoBlock.title') }}
          </h2>

          <p class="mb-6 text-lg text-gray-600">
            {{ t('infoBlock.description') }}
          </p>

          <Button
            :label="t('infoBlock.buttonLabel')"
            class="flex w-full items-center justify-center rounded-md bg-black px-6 py-4 text-center text-sm font-medium text-white transition-colors hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 md:w-max md:px-8 md:py-3 md:text-base"
            id="info-block-button"
          />
        </div>
      </div>
    </div>
  </section>
</template>
