<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'

const { t } = useI18n()

const translatedProducts = computed(() => useTranslateProducts(products))
</script>

<template>
  <section class="mx-auto my-8 max-w-[95vw] md:max-w-[70rem]">
    <h2 class="mb-8 text-center text-2xl font-bold">
      {{ t('bestSellingProducts.title') }}
    </h2>

    <Carousel
      :slides-per-column="2"
      :rows-desktop="1.5"
      unique-id="best-selling-products-carousel"
      class="mt-[5rem] grid grid-cols-1 content-center gap-6 sm:grid-cols-2 md:mt-0 lg:grid-cols-4"
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
