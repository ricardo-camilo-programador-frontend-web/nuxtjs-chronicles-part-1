<script setup lang="ts">
const { t } = useI18n()

const categoriesStore = useCategoriesStore()

const categories = computed(() => categoriesStore.getCategories)

const carouselConfig = {
  arrows: true,

  indicators: false,

  itemsPerView: {
    base: 2,
    md: 3,
    lg: 6,
  },

  prevButton: {
    color: 'gray',
    class: 'absolute start-4 top-1/2 transform -translate-y-1/2 z-10',
  },

  nextButton: {
    color: 'gray',
    class: 'absolute end-4 top-1/2 transform -translate-y-1/2 z-10',
  },
}
</script>

<template>
  <section
    aria-labelledby="categories-title"
    class="mx-auto w-full px-4 py-8"
  >
    <div
      class="mx-auto flex w-full max-w-7xl flex-col items-start justify-start"
    >
      <header
        class="mb-8 flex w-full max-w-[95vw] flex-col items-center justify-between gap-4 md:mb-1 md:flex-row"
      >
        <h2
          id="categories-title"
          class="w-full text-center text-2xl font-bold md:mb-0 md:w-auto md:text-left"
        >
          {{ t('categories.title') }}
        </h2>

        <div class="w-full md:w-auto">
          <Button
            :label="t('categories.seeAll')"
            :aria-label="t('categories.seeAllAriaLabel')"
            class="w-full md:w-auto"
            id="see-all-categories-button"
          />
        </div>
      </header>

      <Carousel
        v-bind="carouselConfig"
        :items="categories"
        class="w-full max-w-7xl"
      >
        <template #default="{ item: category }">
          <CategorieCard
            :src="category.src"
            :title="t(category.title)"
            :product-count="category.productCount"
            :gradient-class="category.gradientClass"
            class="w-full max-w-[95vw] min-w-full"
          />
        </template>
      </Carousel>
    </div>
  </section>
</template>
