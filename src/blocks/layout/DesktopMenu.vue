<script lang="ts" setup></script>

<template>
  <div class="relative mx-auto flex gap-4">
    <NuxtLink
      v-for="link in menuLinks"
      :key="link.path"
      :to="link.path"
      class="border-b border-transparent text-lg transition-all duration-300 ease-in-out hover:border-orange-500 hover:text-orange-500"
    >
      {{ $t(link.translationKey) }}
    </NuxtLink>
  </div>
</template>
