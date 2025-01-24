<script setup lang="ts">
interface BlogCardProps {
  title: string
  date: string
  imageUrl: string
  imageAlt: string
  slug: string
  category: string
}

defineProps<BlogCardProps>()
const { t } = useI18n()
</script>

<template>
  <NuxtLink
    :to="`/blog/${slug}`"
    class="block md:max-w-[17rem] rounded-lg border-2 border-gray-100 p-2 shadow-md hover:shadow-lg focus:ring-2 focus:ring-orange-500 focus:outline-none md:max-w-full"
  >
    <div class="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
      <span
        class="absolute top-4 left-4 z-10 rounded-full bg-black px-3 py-1 text-xs text-white"
      >
        {{ t(`categories.${category}`) }}
      </span>
      <Image
        :src="imageUrl"
        :alt="imageAlt"
        width="300"
        height="300"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <time
      :datetime="date"
      class="mb-2 block text-sm text-gray-500"
    >
      {{ date }}
    </time>
    <h3
      class="line-clamp-2 text-lg font-semibold transition-colors group-hover:text-orange-500"
    >
      {{ t(title) }}
    </h3>
  </NuxtLink>
</template>
