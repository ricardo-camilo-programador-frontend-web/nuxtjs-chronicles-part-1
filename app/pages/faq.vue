<script setup lang="ts">
import { faqSEO } from '@/static/SEO/faqSeo'

definePageMeta({
  layout: 'default',
})

const { locale } = useI18n()
useHead(faqSEO(locale.value))
</script>

<template>
  <Button
    label="Faq page"
    id="faq-page-button"
  />
</template>
