<script setup lang="ts">
import catsSilhouette from "@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp";
import backgroundGradientOrange from "@/assets/images/background-gradient-orange.webp";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <section
    class="py-8 max-w-[95vw] mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between md:gap-24"
    aria-labelledby="info-block-heading"
  >
    <div
      class="relative z-10 my-auto flex flex-col justify-center items-center h-[600px] w-full "
    >
      <Image
        :src="backgroundGradientOrange"
        alt=""
        class="absolute inset-0 h-[600px] min-w-[17rem] w-[120rem] rounded-full opacity-90 z-[1] object-cover -ml6"
        width="600"
        height="600"
        :aria-hidden="true"
      />

      <Image
        :src="catsSilhouette"
        alt="Cat silhouettes"
        class="w-full max-w-[18.75rem] mx-auto z-[2] object-cover"
        width="300"
        height="300"
      />
    </div>

    <div class="mx-auto px-4 w-full flex flex-col justify-center items-center">
      <div
        class="flex flex-col lg:flex-row justify-between w-full gap-8 items-center"
      >
        <div class="relative z-10 max-w-xl">
          <span class="inline-block mb-3 text-base font-medium text-orange-500">
            {{ t('infoBlock.category') }}
          </span>

          <h2
            id="info-block-heading"
            class="mb-4 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
          >
            {{ t('infoBlock.title') }}
          </h2>

          <p class="mb-6 text-lg text-gray-600">
            {{ t('infoBlock.description') }}
          </p>

          <Button
            class="px-8 py-3 text-base font-medium text-white bg-black rounded-md hover:bg-orange-500 transition-colors"
            :label="t('infoBlock.buttonLabel')"
            id="info-block-button"
          />
        </div>
      </div>
    </div>
  </section>
</template>
