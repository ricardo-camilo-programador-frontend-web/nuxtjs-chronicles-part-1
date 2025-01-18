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
  <div class="container mx-auto my-8">
    <Button
      class="w-max mx-auto h-max my-auto"
      label="Featured Products"
      id="featured-products-button"
    />
    <h2 class="text-2xl font-bold text-center my-4">Featured Products</h2>
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
