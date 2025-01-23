<script setup lang="ts">
import { useTranslateProducts } from '@/composables/useTranslateProduct'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function returnOnlyFeaturedProducts(products: Array<Product>) {
  return products.filter(product => product.featured)
}

const { getProducts } = useProductStore()

const products = computed(() => getProducts())

const translatedProducts = computed(() =>
  useTranslateProducts(returnOnlyFeaturedProducts(products.value)),
)
</script>

<template>
  <section
    v-if="translatedProducts.length > 0"
    aria-labelledby="featured-products-title"
    class="mx-auto flex flex-col items-center justify-center py-8 md:flex-row md:justify-between md:gap-24"
  >
    <div class="mx-auto w-full">
      <header
        class="mb-8 flex w-full flex-wrap items-center justify-center gap-4 md:mb-1 md:justify-between"
      >
        <h2
          id="featured-products-title"
          class="mr-auto w-full text-center text-2xl font-bold md:mb-6 md:w-auto"
        >
          {{ t('products.featuredTitle') }}
        </h2>

        <div
          class="ml-auto flex w-full justify-center md:w-auto md:justify-end"
        >
          <Button
            :label="t('products.seeAll')"
            :aria-label="t('products.seeAllAriaLabel')"
            id="featured-products-button"
          />
        </div>
      </header>

      <Carousel
        :items="translatedProducts"
        :items-per-view="{
          base: 1,
          md: 2,
          lg: 3,
        }"
        class="mx-auto w-full"
      >
        <template #default="{ item: product }">
          <FeatureCard
            :image-src="product.imageSrc"
            :product-name="product.name"
            :product-price="product.formattedPrice"
            :alt-text="product.altText"
            class="mx-auto max-h-[20rem] w-full min-w-[17rem] pb-24"
            role="listitem"
          />
        </template>
      </Carousel>
    </div>
  </section>
</template>
