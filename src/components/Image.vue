<script lang="ts" setup>
interface Props {
  src: string
  alt: string
  class: string
  width: number
  height: number
  ariaHidden?: boolean
  title?: string
  loading?: 'eager' | 'lazy'
  ariaLabel?: string
}

withDefaults(defineProps<Props>(), {
  loading: 'lazy',
  ariaHidden: true,
})
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :class="class"
    :title="title"
    :aria-hidden="ariaHidden"
    :loading="loading"
    :aria-label="ariaLabel"
    :width="width"
    :height="height"
  />
</template>
