<script setup lang="ts">
import backgroundGradientOrange from "@/assets/images/background-gradient-orange.webp";
import backgroundGradientOrangeMini from "@/assets/images/background-gradient-orange-mini.webp";
import katherineMcadoo from "@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp";

const products = [
  {
    imageSrc: backgroundGradientOrange,
    name: "Premium Dog Food",
    price: "$18.99",
  },
  {
    imageSrc: katherineMcadoo,
    name: "Premium Cat Food",
    price: "$18.99",
  },
  {
    imageSrc: backgroundGradientOrangeMini,
    name: "Premium Dog Food",
    price: "$18.99",
  },
];
</script>

<template>
  <div class="container mx-auto my-8 max-w-[95vw]">
    <div
      class="flex flex-wrap justify-center md:justify-between items-center gap-4 w-full mb-8 md:mb-1"
    >
      <h2
        class="text-2xl font-bold text-center md:mb-6 mr-auto w-full md:w-auto"
      >
        Featured Products
      </h2>

      <div class="ml-auto w-full md:w-auto flex justify-center md:justify-end">
        <Button label="See All Products" />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <FeatureCard
        v-for="(product, index) in products"
        :key="index"
        :imageSrc="product.imageSrc"
        :productName="product.name"
        :productPrice="product.price"
      />
    </div>
  </div>
</template>
