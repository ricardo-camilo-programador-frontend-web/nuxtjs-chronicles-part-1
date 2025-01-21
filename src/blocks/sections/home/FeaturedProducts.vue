<script setup lang="ts">
import { useTranslateProducts } from '@/composables/useTranslateProduct'
import { products } from '@/mocks/products'
import { SwiperSlide } from 'swiper/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function returnOnlyFeaturedProducts(products: Array<Product>) {
  return products.filter(product => product.featured)
}

const translatedProducts = computed(() =>
  useTranslateProducts(returnOnlyFeaturedProducts(products)),
)
</script>

<template>
  <section
    aria-labelledby="featured-products-title"
    class="mx-auto my-8 max-w-[95vw]"
  >
    <div class="mx-auto max-w-[70rem]">
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
        :tablet-slides-per-view="2"
        :desktop-slides-per-view="3"
        :rows-desktop="1"
        navigation-class="hidden"
        unique-id="featured-products-carousel"
        role="list"
      >
        <SwiperSlide
          v-for="product in translatedProducts"
          :key="product.id"
          class="m-auto ml-2 md:ml-0"
        >
          <FeatureCard
            :image-src="product.imageSrc"
            :product-name="product.name"
            :product-price="product.formattedPrice"
            :alt-text="product.altText"
            role="listitem"
          />
        </SwiperSlide>
      </Carousel>
    </div>
  </section>
</template>
