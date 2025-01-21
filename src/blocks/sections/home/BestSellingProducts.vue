<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'

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

    <Carousel
      :mobile-slides-per-view="1"
      :tablet-slides-per-view="3"
      :desktop-slides-per-view="4"
      :rows-desktop="1.5"
      unique-id="best-selling-products-carousel"
      class="max-h-[850px]"
    >
      <SwiperSlide
        v-for="product in translatedProducts"
        :key="product.id"
        class="w-full min-w-[17rem]"
      >
        <ProductCard
          :image-src="product.imageSrc"
          :product-name="product.name"
          :product-price="product.formattedPrice"
          :is-favorite="product.isFavorite"
          :alt-text="product.altText"
          :currency="product.currency"
          :formatted-price="product.formattedPrice"
          :name="product.name"
        />
      </SwiperSlide>
    </Carousel>
  </section>
</template>
