<script lang="ts" setup>
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    title="Home"
    aria-label="Home"
    class="w-full h-full max-w-[8rem] max-h-[8rem]"
  >
    <img
      src="@/assets/images/svg/logo-black.svg"
      alt="Logo"
      class="object-contain w-full h-full"
    >
  </NuxtLink>
</template>
