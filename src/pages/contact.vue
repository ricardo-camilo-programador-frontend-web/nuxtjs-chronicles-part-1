<script setup lang="ts">
import { contactSEO } from '@/static/SEO/contactSeo'

definePageMeta({
  layout: 'default',
})

const { locale } = useI18n()
useHead(contactSEO(locale.value))
</script>

<template>
  <main
    class="relative mx-auto flex h-full min-h-[94vh] w-full min-w-max flex-col flex-wrap items-center"
  >
    <HeroContact />
    <FormContact />
    <Map />
  </main>
</template>
