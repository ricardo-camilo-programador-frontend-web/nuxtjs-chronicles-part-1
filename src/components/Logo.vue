<script lang="ts" setup>
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    title="Home"
    aria-label="Home"
    class="h-full max-h-[8rem] w-full max-w-[8rem]"
  >
    <img
      src="@/assets/images/svg/logo-black.svg"
      alt="Logo"
      class="h-full w-full object-contain"
    >
  </NuxtLink>
</template>
