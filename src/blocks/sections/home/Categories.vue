<script setup lang="ts">
import backgroundGradientOrange from "@/assets/images/background-gradient-orange.webp";
import backgroundGradientOrangeMini from "@/assets/images/background-gradient-orange-mini.webp";
import charlesdeluvio from "@/assets/images/charlesdeluvio-5R5HgLyHMVQ-unsplash.webp";
import katherineMcadoo from "@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp";

interface CategoryItem {
  id: string;
  title: string;
  productCount: number;
  gradientClass: string;
  src: string;
  altText: string;
}

const { t } = useI18n();

const categories = ref<CategoryItem[]>([
  {
    id: "accessories",
    title: t("categories.items.accessories.title"),
    productCount: 84,
    gradientClass: "bg-gradient-to-r from-purple-400 to-pink-400",
    src: backgroundGradientOrange,
    altText: t("categories.items.accessories.altText"),
  },
  {
    id: "food",
    title: t("categories.items.food.title"),
    productCount: 64,
    gradientClass: "bg-gradient-to-r from-green-400 to-blue-400",
    src: backgroundGradientOrangeMini,
    altText: t("categories.items.food.altText"),
  },
  {
    id: "furniture",
    title: t("categories.items.furniture.title"),
    productCount: 22,
    gradientClass: "bg-gradient-to-r from-blue-400 to-teal-400",
    src: charlesdeluvio,
    altText: t("categories.items.furniture.altText"),
  },
  {
    id: "bags",
    title: t("categories.items.bags.title"),
    productCount: 16,
    gradientClass: "bg-gradient-to-r from-pink-400 to-red-400",
    src: katherineMcadoo,
    altText: t("categories.items.bags.altText"),
  },
]);
</script>

<template>
  <section
    aria-labelledby="categories-title"
    class="py-8 max-w-[95vw] mx-auto"
  >
    <div
      class="mx-auto flex flex-col w-full justify-center items-center max-w-[70rem]"
    >
      <header
        class="flex flex-wrap justify-center md:justify-between items-center gap-4 w-full mb-8 md:mb-1"
      >
        <h2
          id="categories-title"
          class="text-2xl font-bold text-center md:mb-6 mr-auto w-full md:w-auto"
        >
          {{ t("categories.title") }}
        </h2>

        <div
          class="ml-auto w-full md:w-auto flex justify-center md:justify-end"
        >
          <Button
            :label="t('categories.seeAll')"
            :aria-label="t('categories.seeAllAriaLabel')"
            id="see-all-categories-button"
          />
        </div>
      </header>

      <div
        class="grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-4"
        role="list"
      >
        <CategorieCard
          v-for="category in categories"
          :key="category.id"
          v-bind="category"
          role="listitem"
        />
      </div>
    </div>
  </section>
</template>
