<script setup lang="ts">
interface FavoriteCardProps {
  favoriteProducts: Array<Product>
}

defineProps<FavoriteCardProps>()

const { t } = useI18n()
</script>

<template>
  <div class="h-full w-full">
    <div
      v-if="favoriteProducts.length > 0"
      class="absolute top-16 right-16 z-[99] h-full w-full"
    >
      <div
        class="absolute right-0 flex h-full w-[17rem] flex-col gap-2 overflow-hidden overflow-y-auto rounded-xl border border-gray-200 bg-white p-2"
      >
        <div
          v-for="product in favoriteProducts"
          :key="product.id"
          class="mx-auto flex w-full items-center justify-start gap-2 border-b pb-2"
        >
          <Image
            :src="product.imageSrc"
            :alt="product.altText"
            width="50"
            height="50"
          />

          <p class="line-clamp-2 text-sm">
            {{ t(product.name) }}
          </p>

          <slot :product="product" />
        </div>
      </div>
    </div>

    <div
      v-if="!favoriteProducts.length"
      class="absolute top-16 right-0 z-[99] flex h-full w-[17rem] items-center justify-center bg-black/50"
    >
      <p class="text-white">
        {{ $t('favorites.empty') }}
      </p>
    </div>
  </div>
</template>
