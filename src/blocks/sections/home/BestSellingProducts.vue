<script setup lang="ts">
import katherineMcadoo from '@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp'
import { SwiperSlide } from 'swiper/vue'

const { t } = useI18n()

const products: Array<Product> = [
  {
    id: '1',
    name: t('products.premiumCatFood'),
    price: 20.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: t('products.currency'),
    altText: t('products.catBowlAltText'),
  },
  {
    id: '2',
    name: t('products.dogLeash'),
    price: 49.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: t('products.currency'),
    altText: t('products.dogLeashAltText'),
  },
  {
    id: '3',
    name: t('products.dogToy'),
    price: 49.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: t('products.currency'),
    altText: t('products.dogToyAltText'),
  },
  {
    id: '4',
    name: t('products.dogBowl'),
    price: 49.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: t('products.currency'),
    altText: t('products.dogBowlAltText'),
  },
]
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
