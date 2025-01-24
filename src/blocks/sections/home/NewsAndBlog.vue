<script setup lang="ts">
import { useBlogStore } from '@/stores/blogStore'

const { t } = useI18n()
const blogStore = useBlogStore()
const blogPosts = computed(() => blogStore.getBlogPosts)
</script>

<template>
  <section
    aria-labelledby="news-blog-title"
    class="mx-auto w-full max-w-[95vw] px-4 py-12 lg:max-w-[1350px]"
  >
    <h2
      id="news-blog-title"
      class="mb-8 text-center text-2xl font-bold"
    >
      {{ t('newsAndBlog.title') }}
    </h2>

    <div
      class="mx-auto grid w-full min-w-[17rem] grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3"
    >
      <BlogCard
        v-for="post in blogPosts.slice(0, 3)"
        :key="post.id"
        :title="post.title"
        :date="post.date"
        :image-url="post.imageUrl"
        :image-alt="post.imageAlt"
        :slug="post.slug"
        :category="post.category"
      />
    </div>
  </section>
</template>
