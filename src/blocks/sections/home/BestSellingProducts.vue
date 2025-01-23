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

    <div class="mx-auto grid w-full min-w-[17rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <FeatureCard
        v-for="product in translatedProducts.slice(0, 8)"
        :key="product.id"
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
  </section>
</template>
