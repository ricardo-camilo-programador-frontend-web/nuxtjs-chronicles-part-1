<script setup lang="ts">
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

provideHeadlessUseId(() => useId())

const nuxtApp = useNuxtApp()

nuxtApp.hook('page:start', () => {
  Nprogress.start()
})

nuxtApp.hook('page:finish', () => {
  Nprogress.done()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
