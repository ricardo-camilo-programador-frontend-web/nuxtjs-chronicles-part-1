<script setup lang="ts">
import { aboutSEO } from '~/static/SEO/aboutSeo'

definePageMeta({
  layout: 'default',
})

const { locale } = useI18n()
useHead(aboutSEO(locale.value))
</script>

<template>
  <main
    class="relative mx-auto flex h-full min-h-[94vh] w-full flex-col flex-wrap items-center pt-24"
  >
    <HeroAbout />
    <AboutOurStore />
    <AboutInfoBlock />
    <OurTeam />
    <Testimonials />
    <Video />
    <FollowOurInstagram />
  </main>
</template>
