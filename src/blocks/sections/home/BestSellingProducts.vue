<script setup lang="ts">
import katherineMcadoo from "@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp";

const products: Array<Product> = [
  {
    id: "1",
    name: "Cat Bowl",
    price: 20.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: "USD",
    altText: "Cat Bowl",
  },
  {
    id: "2",
    name: "Cat Bowl",
    price: 49.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: "USD",
    altText: "Cat Bowl",
    },
  {
    id: "3",
    name: "Cat Bowl",
    price: 49.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: "USD",
    altText: "Cat Bowl",
  },
  {
    id: "4",
    name: "Cat Bowl",
    price: 49.99,
    imageSrc: katherineMcadoo,
    isFavorite: false,
    currency: "USD",
    altText: "Cat Bowl",
  },
];
</script>

<template>
  <section class="mx-auto my-8 max-w-[95vw]">
    <h2 class="text-2xl font-bold text-center mb-8">Best Selling Products</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>
