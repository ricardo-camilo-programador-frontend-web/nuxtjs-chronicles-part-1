<script setup lang="ts">
import { homeSEO } from '@/static/SEO/home'

definePageMeta({
  layout: 'default',
})

const { locale } = useI18n()
useHead(homeSEO(locale.value))
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
