<script setup lang="ts">
const { t } = useI18n()

const categoriesStore = useCategoriesStore()

const categories = computed(() => categoriesStore.getCategories)

const carouselConfig = {
  arrows: true,

  indicators: false,

  itemsPerView: {
    base: 2,
    md: 2,
    lg: 2,
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
    class="mx-auto flex flex-col items-center justify-center py-8 md:flex-row md:justify-between md:gap-24"
  >
    <div class="grid grid-cols-1 bg-pink-400">
      <header class="mb-8 grid grid-cols-2 gap-4 md:mb-1">
        <h2
          id="categories-title"
          class="w-full text-center text-2xl font-bold md:mb-0 md:text-left"
        >
          {{ t('categories.title') }}
        </h2>

        <div class="flex w-full justify-end">
          <Button
            :label="t('categories.seeAll')"
            :aria-label="t('categories.seeAllAriaLabel')"
            class="ml-auto w-auto"
            id="see-all-categories-button"
          />
        </div>
      </header>

      <Carousel
        v-bind="carouselConfig"
        :items="categories"
        :items-per-view="{
          base: 1,
          md: 2,
          lg: 2,
        }"
        class="w-full"
      >
        <template #default="{ item: category }">
          <CategorieCard
            :src="category.src"
            :title="t(category.title)"
            :product-count="category.productCount"
            :gradient-class="category.gradientClass"
            class="w-full min-w-[10rem]"
          />
        </template>
      </Carousel>
    </div>
  </section>
</template>
