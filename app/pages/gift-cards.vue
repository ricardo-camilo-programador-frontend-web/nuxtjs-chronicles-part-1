<script setup lang="ts">
import { giftCardsSEO } from '@/static/SEO/giftCardsSeo'

definePageMeta({
  layout: 'default',
})

const { locale } = useI18n()
useHead(giftCardsSEO(locale.value))
</script>

<template>
  <Button
    label="Gift cards page"
    id="gift-cards-page-button"
  />
</template>
