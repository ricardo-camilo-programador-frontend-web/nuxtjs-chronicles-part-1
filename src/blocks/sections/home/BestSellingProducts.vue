<script setup lang="ts">
const { t } = useI18n()

function returnOnlyBestSellingProducts(products: Array<Product>) {
  return products.filter(product => product.bestSelling)
}

const translatedProducts = computed(() =>
  useTranslateProducts(returnOnlyBestSellingProducts(products)),
)
</script>

<template>
  <section class="mx-auto my-8 max-w-[95vw] md:max-w-[70rem]">
    <h2 class="mb-8 text-center text-2xl font-bold">
      {{ t('bestSellingProducts.title') }}
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[unset] min-h-[500px] max-w-[95vw]"
    >
      <div
        v-for="product in translatedProducts.slice(0, 8)"
        :key="product.id"
        class="w-full min-w-[17rem] h-auto"
      >
        <ProductCard
          :image-src="product.imageSrc"
          :product-name="product.name"
          :product-price="product.formattedPrice"
          :is-favorite="product.favorite"
          :alt-text="product.altText"
          :currency="product.currency"
          :formatted-price="product.formattedPrice"
          :name="product.name"
        />
      </div>
    </div>
  </section>
</template>
