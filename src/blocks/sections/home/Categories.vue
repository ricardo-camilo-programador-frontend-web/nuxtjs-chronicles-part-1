<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import backgroundGradientOrangeMini from '@/assets/images/background-gradient-orange-mini.webp'
import backgroundGradientOrange from '@/assets/images/background-gradient-orange.webp'
import charlesdeluvio from '@/assets/images/charlesdeluvio-5R5HgLyHMVQ-unsplash.webp'
import katherineMcadoo from '@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp'

interface CategoryItem {
  id: string
  title: string
  productCount: number
  gradientClass: string
  src: string
  altText: string
}

const { t } = useI18n()

const categories = ref<Array<CategoryItem>>([
  {
    id: 'accessories',
    title: t('categories.items.accessories.title'),
    productCount: 84,
    gradientClass: 'bg-gradient-to-r from-purple-400 to-pink-400',
    src: backgroundGradientOrange,
    altText: t('categories.items.accessories.altText'),
  },
  {
    id: 'food',
    title: t('categories.items.food.title'),
    productCount: 64,
    gradientClass: 'bg-gradient-to-r from-green-400 to-blue-400',
    src: backgroundGradientOrangeMini,
    altText: t('categories.items.food.altText'),
  },
  {
    id: 'furniture',
    title: t('categories.items.furniture.title'),
    productCount: 22,
    gradientClass: 'bg-gradient-to-r from-blue-400 to-teal-400',
    src: charlesdeluvio,
    altText: t('categories.items.furniture.altText'),
  },
  {
    id: 'bags',
    title: t('categories.items.bags.title'),
    productCount: 16,
    gradientClass: 'bg-gradient-to-r from-pink-400 to-red-400',
    src: katherineMcadoo,
    altText: t('categories.items.bags.altText'),
  },
])
</script>

<template>
  <section
    aria-labelledby="categories-title"
    class="mx-auto max-w-[95vw] py-8 flex flex-col items-center justify-center w-full"
  >
    <div
      class="mx-auto flex w-full max-w-[70rem] flex-col items-center justify-center"
    >
      <header
        class="mb-8 flex w-full flex-wrap items-center justify-center gap-4 md:mb-1 md:justify-between"
      >
        <h2
          id="categories-title"
          class="mr-auto w-full text-center text-2xl font-bold md:mb-6 md:w-auto"
        >
          {{ t('categories.title') }}
        </h2>

        <div
          class="ml-auto flex w-full justify-center md:w-auto md:justify-end"
        >
          <Button
            :label="t('categories.seeAll')"
            :aria-label="t('categories.seeAllAriaLabel')"
            class="w-full md:w-auto"
            id="see-all-categories-button"
          />
        </div>
      </header>

      <Carousel
        uniqueId="categories-carousel"
        class="w-full min-w-full"
        role="list"
        navigationClass="-mt-2"
      >
        <SwiperSlide
          v-for="category in categories"
          :key="category.id"
          class="w-full min-w-[17rem]"
          role="listitem"
        >
          <CategorieCard
            :src="category.src"
            :title="category.title"
            :product-count="category.productCount"
            :gradient-class="category.gradientClass"
          />
        </SwiperSlide>
      </Carousel>
    </div>
  </section>
</template>
