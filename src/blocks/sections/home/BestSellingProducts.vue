<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'

const { t } = useI18n()

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
        v-for="product in products"
        :key="product.id"
        class="w-full min-w-[17rem]"
      >
        <ProductCard :product="product" />
      </SwiperSlide>
    </Carousel>
  </section>
</template>
