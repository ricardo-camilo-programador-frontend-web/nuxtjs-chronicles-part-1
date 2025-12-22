<script setup lang="ts">
import { careersSEO } from '~/static/SEO/careersSeo'

definePageMeta({
  layout: 'default',
})

const { locale } = useI18n()
useHead(careersSEO(locale.value))
</script>

<template>
  <Button
    label="Carreers page"
    id="careers-page-button"
  />
</template>
