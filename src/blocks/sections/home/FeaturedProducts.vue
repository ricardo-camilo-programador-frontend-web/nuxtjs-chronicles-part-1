<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import type { Product } from '@/types/product'
import backgroundGradientOrangeMini from '@/assets/images/background-gradient-orange-mini.webp'
import backgroundGradientOrange from '@/assets/images/background-gradient-orange.webp'
import katherineMcadoo from '@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const products = ref<Array<Product>>([
  {
    id: 'premium-dog-food-1',
    imageSrc: backgroundGradientOrange,
    name: t('products.premiumDogFood'),
    price: 18.99,
    currency: t('products.currency'),
    altText: t('products.premiumDogFoodAltText'),
  },
  {
    id: 'premium-cat-food',
    imageSrc: katherineMcadoo,
    name: t('products.premiumCatFood'),
    price: 18.99,
    currency: t('products.currency'),
    altText: t('products.premiumCatFoodAltText'),
  },
  {
    id: 'premium-dog-food-2',
    imageSrc: backgroundGradientOrangeMini,
    name: t('products.premiumDogFood'),
    price: 18.99,
    currency: t('products.currency'),
    altText: t('products.premiumDogFoodAltText'),
  },
])
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
        id="featured-products-carousel"
        role="list"
        :mobile-slides-per-view="1"
        :tablet-slides-per-view="2"
        :desktop-slides-per-view="3"
      >
        <SwiperSlide
          v-for="product in products"
          :key="product.id"
          class="mx-auto ml-2"
        >
          <FeatureCard
            :image-src="product.imageSrc"
            :product-name="product.name"
            :product-price="formatCurrency(product.price, product.currency)"
          :alt-text="product.altText"
            role="listitem"
          />
        </SwiperSlide>
      </Carousel>
    </div>
  </section>
</template>
