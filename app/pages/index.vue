<script setup lang="ts">
import { homeSEO } from '@/static/SEO/home'

definePageMeta({
  layout: 'default',
})

const { locale } = useI18n()
useHead(homeSEO(locale.value))
</script>

<template>
  <main class="mx-auto grid max-w-[95vw] grid-cols-1 lg:max-w-[1350px]">
    <div class="grid grid-cols-1">
      <Hero />
    </div>
    <div class="grid grid-cols-1">
      <Categories />
    </div>
    <div class="grid grid-cols-1">
      <FeaturedProducts />
    </div>
    <div class="grid grid-cols-1">
      <InfoBlock />
    </div>
    <div class="grid grid-cols-1">
      <Logos />
    </div>
    <div class="grid grid-cols-1">
      <BestSellingProducts />
    </div>
    <div class="grid grid-cols-1">
      <ShopByPet />
    </div>
    <div class="grid grid-cols-1">
      <NewsAndBlog />
    </div>
  </main>
</template>
