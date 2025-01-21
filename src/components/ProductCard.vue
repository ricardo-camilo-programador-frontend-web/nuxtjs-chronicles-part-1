<script setup lang="ts">
interface ProductCardProps {
  imageSrc: string
  productName: string
  productPrice: string
  isFavorite?: boolean
  altText: string
  currency: string
  formattedPrice: string
  name: string
}

defineProps<ProductCardProps>()
</script>

<template>
  <article
    class="max-w-[95vw] rounded-lg bg-gray-200 transition-shadow hover:shadow-lg md:max-w-full"
  >
    <div class="relative mb-4 aspect-square">
      <Image
        :src="imageSrc"
        :alt="altText"
        class="h-full w-full rounded-lg object-cover p-4"
        loading="lazy"
        width="100"
        height="100"
      />
    </div>

    <div
      class="flex h-full max-h-[4rem] min-h-[7rem] max-w-[95vw] flex-col space-y-2 rounded-b-lg bg-white px-4 py-2"
    >
      <div class="flex h-full w-full items-center justify-between">
        <h3 class="text-lg font-medium">
          {{ productName }}
        </h3>

        <Button
          :icon="isFavorite ? 'i-heroicons-heart-solid' : 'i-heroicons-heart'"
          :aria-label="
            isFavorite ? 'Remove from favorites' : 'Add to favorites'
          "
          class="p-2"
          icon-style="text-red-500"
        />
      </div>

      <p class="mt-auto font-bold text-gray-900">
        {{ productPrice }}
      </p>
    </div>
  </article>
</template>
