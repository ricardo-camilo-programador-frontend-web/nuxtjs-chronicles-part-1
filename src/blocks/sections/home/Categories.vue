<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'

const { t } = useI18n()

const categoriesStore = useCategoriesStore()
const categories = computed(() => categoriesStore.getCategories)
</script>

<template>
  <section
    aria-labelledby="categories-title"
    class="mx-auto flex w-full max-w-[95vw] flex-col items-center justify-center py-8"
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
        unique-id="categories-carousel"
        class="w-full min-w-full"
        role="list"
        navigation-class="-mt-2"
      >
        <SwiperSlide
          v-for="category in categories"
          :key="category.id"
          class="w-full min-w-[17rem]"
          role="listitem"
        >
          <CategorieCard
            :src="category.src"
            :title="t(category.title)"
            :product-count="category.productCount"
            :gradient-class="category.gradientClass"
          />
        </SwiperSlide>
      </Carousel>
    </div>
  </section>
</template>
