<script setup lang="ts">
import { useTranslateProducts } from '@/composables/useTranslateProduct'
import { SwiperSlide } from 'swiper/vue'
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
    class="mx-auto my-8 flex w-full min-w-full max-w-[95vw] flex-col items-center justify-center"
  >
    <div class="mx-auto w-full max-w-[70rem]">
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
        :mobile-slides-per-view="1"
        :tablet-slides-per-view="3"
        :desktop-slides-per-view="3"
        :rows-desktop="1"
        navigation-class="hidden"
        unique-id="featured-products-carousel"
        role="list"
        class="mx-auto flex max-w-[95vw] items-center justify-between"
      >
        <SwiperSlide
          v-for="product in translatedProducts.slice(0, 3)"
          :key="product.id"
          class="mx-auto ml-2 w-full min-w-[20rem] pb-24 md:ml-auto"
        >
          <FeatureCard
            :image-src="product.imageSrc"
            :product-name="product.name"
            :product-price="product.formattedPrice"
            :alt-text="product.altText"
            class="max-h-[20rem] w-full min-w-[17rem]"
            role="listitem"
          />
        </SwiperSlide>
      </Carousel>
    </div>
  </section>
</template>
