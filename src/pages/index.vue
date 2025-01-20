<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <main
    class="relative mx-auto flex h-full min-h-[94vh] w-full min-w-max flex-col flex-wrap items-center"
  >
    <Hero />
    <Categories />
    <FeaturedProducts />
    <InfoBlock />
    <Logos />
    <BestSellingProducts />
    <ShopByPet />
    <NewsAndBlog />
  </main>
</template>
