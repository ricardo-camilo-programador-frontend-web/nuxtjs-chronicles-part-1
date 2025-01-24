<script setup lang="ts">
const { t } = useI18n()
const bestSellingProducts = ref<Array<Product>>([])

const productStore = useProductStore()

function setBestSellingProducts() {
  bestSellingProducts.value = productStore.getBestSellingProducts
}

onMounted(() => {
  setBestSellingProducts()
})

watch(productStore, () => {
  setBestSellingProducts()
})
</script>

<template>
  <section
    v-if="bestSellingProducts.length > 0"
    class="mx-auto max-w-[95vw]"
  >
    <h2 class="mb-8 text-center text-2xl font-bold">
      {{ t('bestSellingProducts.title') }}
    </h2>

    <div
      class="mx-auto grid w-full min-w-[17rem] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
    >
      <FeatureCard
        v-for="product in bestSellingProducts.slice(0, 8)"
        :key="product.id"
        :image-src="product.imageSrc"
        :product-name="product.name"
        :product-price="product.price.toString()"
        :is-favorite="product.favorite"
        :alt-text="product.altText"
        :currency="product.currency"
        :name="product.name"
      >
        <FavoriteShortcut
          v-if="product.featured"
          :product="product"
          @favorite-updated="setBestSellingProducts"
        />
      </FeatureCard>
    </div>
  </section>
</template>
