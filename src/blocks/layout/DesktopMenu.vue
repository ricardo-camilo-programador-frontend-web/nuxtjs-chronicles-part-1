<script lang="ts" setup>
import { menuLinks } from '@/static/menu'

const localePath = useLocalePath()
</script>

<template>
  <div class="relative mx-auto flex gap-4">
    <NuxtLink
      v-for="link in menuLinks"
      :key="link.path"
      :to="localePath(link.path)"
      class="border-b border-transparent text-lg transition-all duration-300 ease-in-out hover:border-orange-500 hover:text-orange-500"
    >
      {{ $t(link.translationKey) }}
    </NuxtLink>
  </div>
</template>
