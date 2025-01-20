<script setup lang="ts">
import katherineMcadoo from '@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp'
import { SwiperSlide } from 'swiper/vue'

const { t } = useI18n()

const products: Array<Product> = [
  {
    id: 'premium-cat-food-1',
    name: t('products.premiumCatFood'),
    price: 24.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: t('products.currency'),
    altText: t('products.catBowlAltText'),
  },
  {
    id: 'leather-dog-collar',
    name: t('products.leatherDogCollar'),
    price: 34.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: t('products.currency'),
    altText: t('products.dogCollarAltText'),
  },
  {
    id: 'cat-scratching-post',
    name: t('products.catScratchingPost'),
    price: 59.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: t('products.currency'),
    altText: t('products.scratchingPostAltText'),
  },
  {
    id: 'bird-cage-deluxe',
    name: t('products.birdCageDeluxe'),
    price: 89.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: t('products.currency'),
    altText: t('products.birdCageAltText'),
  },
  {
    id: 'hamster-habitat',
    name: t('products.hamsterHabitat'),
    price: 45.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: t('products.currency'),
    altText: t('products.hamsterHabitatAltText'),
  },
  {
    id: 'fish-tank-filter',
    name: t('products.fishTankFilter'),
    price: 29.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: t('products.currency'),
    altText: t('products.fishFilterAltText'),
  },
  {
    id: 'dog-grooming-kit',
    name: t('products.dogGroomingKit'),
    price: 49.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: t('products.currency'),
    altText: t('products.groomingKitAltText'),
  },
  {
    id: 'cat-litter-box',
    name: t('products.catLitterBox'),
    price: 39.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: t('products.currency'),
    altText: t('products.litterBoxAltText'),
  }
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
