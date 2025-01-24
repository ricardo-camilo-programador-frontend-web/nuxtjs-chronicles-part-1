<script setup lang="ts">
import { defineProps } from 'vue'

interface FeatureCardProps {
  imageSrc: string
  productName: string
  productPrice: string
}

defineProps<FeatureCardProps>()

const { t } = useI18n()
</script>

<template>
  <div
    class="flex h-[31rem] w-full max-w-[20rem] min-w-[17rem] flex-col items-center overflow-visible rounded-lg border border-gray-100 bg-gray-200 shadow-md transition-all duration-300 ease-in-out hover:bg-orange-500 hover:shadow-lg"
  >
    <div class="h-full w-full overflow-visible p-24">
      <Image
        :src="imageSrc"
        alt="Product Image"
        class="h-full w-full overflow-visible object-cover"
        width="100"
        height="100"
      />
    </div>

    <div
      class="flex min-h-24 w-full items-center justify-between rounded-b-lg bg-white px-4 py-2"
    >
      <div class="flex h-full w-full flex-col items-start justify-start">
        <h3 class="mt-2 max-w-[17rem] text-lg font-semibold">
          {{ t(productName) }}
        </h3>
        <p class="mt-auto text-gray-600">
          {{ t(productPrice) }}
        </p>
      </div>

      <div class="flex h-full w-auto items-start justify-center pt-1">
        <slot />
      </div>
    </div>
  </div>
</template>
