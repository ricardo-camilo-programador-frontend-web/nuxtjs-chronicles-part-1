<script setup lang="ts">
import backgroundGradientOrange from "@/assets/images/background-gradient-orange.webp";
import backgroundGradientOrangeMini from "@/assets/images/background-gradient-orange-mini.webp";
import charlesdeluvio from "@/assets/images/charlesdeluvio-5R5HgLyHMVQ-unsplash.webp";
import katherineMcadoo from "@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp";

const categories = ref([
  {
    title: "Accessories",
    productCount: 84,
    gradientClass: "bg-gradient-to-r from-purple-400 to-pink-400",
    src: backgroundGradientOrange,
  },
  {
    title: "Food",
    productCount: 64,
    gradientClass: "bg-gradient-to-r from-green-400 to-blue-400",
    src: backgroundGradientOrangeMini,
  },
  {
    title: "Furniture",
    productCount: 22,
    gradientClass: "bg-gradient-to-r from-blue-400 to-teal-400",
    src: charlesdeluvio,
  },
  {
    title: "Bags",
    productCount: 16,
    gradientClass: "bg-gradient-to-r from-pink-400 to-red-400",
    src: katherineMcadoo,
  },
]);
</script>

<template>
  <section
    class="py-8 max-w-[95vw] mx-auto"
  >
    <div
      class="mx-auto flex flex-col w-full justify-center items-center max-w-[70rem]"
    >
      <div class="flex flex-wrap justify-center md:justify-between items-center gap-4 w-full mb-8 md:mb-1">
        <h2 class="text-2xl font-bold text-center md:mb-6 mr-auto w-full md:w-auto">
          Browse by category
        </h2>

        <div class="ml-auto w-full md:w-auto flex justify-center md:justify-end">
          <Button label="See All Categories" />
        </div>
      </div>

      <div
        class="grid md:grid-cols-2 lg:grid-cols-4 justify-center overflow-x-auto gap-4 overflow-y-hidden"
      >
        <CategorieCard
          v-for="(category, index) in categories"
          :key="index"
          :src="category.src"
          :title="category.title"
          :productCount="category.productCount"
          :gradientClass="category.gradientClass"
        />
      </div>
    </div>
  </section>
</template>
