<script setup lang="ts">
const { t } = useI18n()

const categoriesStore = useCategoriesStore()

const categories = computed(() => categoriesStore.getCategories)
</script>

<template>
  <section
    v-if="categories.length > 0"
    aria-labelledby="featured-products-title"
    class="mx-auto flex max-w-[95vw] flex-col items-center justify-center py-8 md:flex-row md:justify-between md:gap-24"
  >
    <div class="mx-auto w-full">
      <header
        class="mb-8 flex w-full flex-wrap items-center justify-center gap-4 md:mb-1 md:justify-between"
      >
        <h2
          id="featured-products-title"
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
            id="featured-products-button"
          />
        </div>
      </header>

      <div
        class="mx-auto grid w-full min-w-[17rem] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
      >
        <CategorieCard
          v-for="category in categories"
          :key="category.id"
          :src="category.src"
          :title="t(category.title)"
          :product-count="category.productCount"
          :gradient-class="category.gradientClass"
          class="mx-auto max-h-[20rem] w-full min-w-[17rem] pb-16"
          role="listitem"
        />
      </div>
    </div>
  </section>
</template>
