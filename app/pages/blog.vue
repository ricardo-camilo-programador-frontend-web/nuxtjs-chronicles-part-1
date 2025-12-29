<script setup lang="ts">
import { blogSEO } from '~/static/SEO/blogSeo'

definePageMeta({
  layout: 'default',
})

const { locale } = useI18n()
useHead(blogSEO(locale.value))
</script>

<template>
  <Button
    label="Blog page"
    id="blog-page-button"
  />
</template>
