<script setup lang="ts">
import { bestSellersSEO } from '~/static/SEO/bestSellersSeo'

definePageMeta({
  layout: 'default',
})

const { locale } = useI18n()
useHead(bestSellersSEO(locale.value))
</script>

<template>
  <Button
    label="Best sellers page"
    id="best-sellers-page-button"
  />
</template>
