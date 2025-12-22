<script setup lang="ts">
import { discountSEO } from '~/static/SEO/discountSeo'

definePageMeta({
  layout: 'default',
})

const { locale } = useI18n()
useHead(discountSEO(locale.value))
</script>

<template>
  <Button
    label="Discount page"
    id="discount-page-button"
  />
</template>
