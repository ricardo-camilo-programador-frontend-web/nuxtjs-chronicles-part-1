<script setup lang="ts">
import { homeSEO } from '@/static/SEO/home'

definePageMeta({
  layout: 'default',
})

const { locale } = useI18n()
useHead(homeSEO(locale.value))
</script>

<template>
  <main class="mx-auto grid max-w-[95vw] grid-cols-1 bg-blue-500">
    <div class="grid grid-cols-1 bg-yellow-500">
      <Hero />
    </div>
    <div class="grid grid-cols-1 bg-green-500">
      <Categories />
    </div>
    <div class="grid grid-cols-1 bg-red-500">
      <FeaturedProducts />
    </div>
    <div class="grid grid-cols-1 bg-purple-500">
      <InfoBlock />
    </div>
    <div class="grid grid-cols-1 bg-pink-500">
      <Logos />
    </div>
    <div class="grid grid-cols-1 bg-orange-500">
      <BestSellingProducts />
    </div>
    <div class="grid grid-cols-1 bg-pink-500">
      <ShopByPet />
    </div>
    <div class="grid grid-cols-1 bg-purple-500">
      <NewsAndBlog />
    </div>
  </main>
</template>
