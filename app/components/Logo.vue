<script lang="ts" setup>
import appLogo from '@/assets/images/svg/logo-black.svg'

const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    title="Home"
    aria-label="Home"
    class="h-full max-h-[8rem] w-full max-w-[8rem]"
  >
    <Image
      :src="appLogo"
      alt="Logo"
      class="h-full w-full object-contain"
      width="300"
      height="300"
    />
  </NuxtLink>
</template>
