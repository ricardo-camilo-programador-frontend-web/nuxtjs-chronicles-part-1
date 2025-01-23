<script setup lang="ts">
import { productsSEO } from '@/static/SEO/productsSeo'

definePageMeta({
  layout: 'default',
})

const { locale } = useI18n()
useHead(productsSEO(locale.value))
</script>

<template>
  <Button
    label="Products page"
    id="products-page-button"
  />
</template>
