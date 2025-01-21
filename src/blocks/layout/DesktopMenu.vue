<script lang="ts" setup>

</script>

<template>
  <div class="flex gap-4 relative mx-auto">
    <NuxtLink
      v-for="link in menuLinks"
      :key="link.path"
      :to="link.path"
      class="text-lg hover:text-orange-500 border-b border-transparent hover:border-orange-500 transition-all duration-300 ease-in-out"
    >
      {{ $t(link.translationKey) }}
    </NuxtLink>
  </div>
</template>
