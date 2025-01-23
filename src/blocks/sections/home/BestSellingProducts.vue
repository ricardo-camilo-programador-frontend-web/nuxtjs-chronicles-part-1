<script setup lang="ts">
const { t } = useI18n()

function returnOnlyBestSellingProducts(products: Array<Product>) {
  return products.filter(product => product.bestSelling)
}

const { getProducts } = useProductStore()

const products = computed(() => getProducts())

const translatedProducts = computed(() =>
  useTranslateProducts(returnOnlyBestSellingProducts(products.value)),
)
</script>

<template>
  <section
    v-if="translatedProducts.length > 0"
    class=""
  >
    <h2 class="mb-8 text-center text-2xl font-bold">
      {{ t('bestSellingProducts.title') }}
    </h2>

    <div
      class="grid min-h-[500px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-10 xl:grid-cols-4"
    >
      <div
        v-for="product in translatedProducts.slice(0, 8)"
        :key="product.id"
        class="h-auto w-auto min-w-[10rem] bg-blue-500"
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
