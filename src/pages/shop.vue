<script lang="ts" setup>
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <main
    class="flex flex-col flex-wrap h-full mx-auto min-w-max min-h-[94vh] w-full items-center relative"
  >
    <HeroShop />
    <ShopByPet />
    <FiltersAndCards />
    <Banners />
  </main>
</template>
