<script setup lang="ts">
import { privacyPolicySEO } from '~/static/SEO/privacyPolicySeo'

definePageMeta({
  layout: 'default',
})

const { locale } = useI18n()
useHead(privacyPolicySEO(locale.value))
</script>

<template>
  <Button
    label="Privacy Policy"
    id="privacy-policy-page-button"
  />
</template>
