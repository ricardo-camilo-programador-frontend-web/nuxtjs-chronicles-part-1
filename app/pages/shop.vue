<script lang="ts" setup>
import { shopSEO } from '@/static/SEO/shopSeo'

definePageMeta({
  layout: 'default',
})

const { locale } = useI18n()
useHead(shopSEO(locale.value))
</script>

<template>
  <main
    class="relative mx-auto flex h-full min-h-[94vh] w-full flex-col flex-wrap items-center pt-24"
  >
    <HeroShop />
    <ShopByPet />
    <FiltersAndCards />
    <Banners />
  </main>
</template>
