<script setup lang="ts">
import katherineMcadoo from '@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp'

interface BlogPost {
  id: string
  title: string
  date: string
  category: 'news'
  imageUrl: string
  imageAlt: string
  slug: string
}

const { t } = useI18n()

const blogPosts = ref<Array<BlogPost>>([
  {
    id: 'post-1',
    title: t('blog.post1Title'),
    date: '24 May 2024',
    category: 'news',
    imageUrl: katherineMcadoo,
    imageAlt: t('blog.post1Alt'),
    slug: 'urna-cras-et-mauris',
  },
  {
    id: 'post-2',
    title: t('blog.post2Title'),
    date: '24 May 2024',
    category: 'news',
    imageUrl: katherineMcadoo,
    imageAlt: t('blog.post2Alt'),
    slug: 'id-tellus-dignissim',
  },
  {
    id: 'post-3',
    title: t('blog.post3Title'),
    date: '24 May 2024',
    category: 'news',
    imageUrl: katherineMcadoo,
    imageAlt: t('blog.post3Alt'),
    slug: 'mus-cursus-pellentesque',
  },
])
</script>

<template>
  <section
    aria-labelledby="news-blog-title"
    class="mx-auto w-full max-w-[95vw] px-4 py-12 md:max-w-[70rem]"
  >
    <h2
      id="news-blog-title"
      class="mb-8 text-center text-2xl font-bold"
    >
      {{ t('newsAndBlog.title') }}
    </h2>

    <Carousel
      :items="blogPosts"
      :items-per-view="{
        base: 1,
        md: 2,
        lg: 3,
      }"
      class="mt-[5rem] md:mt-0"
    >
      <template #default="{ item: post }">
        <a
          :href="`/blog/${post.slug}`"
          class="block rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <div class="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
            <span class="absolute left-4 top-4 z-10 rounded-full bg-black px-3 py-1 text-xs text-white">
              {{ t(`categories.${post.category}`) }}
            </span>
            <img
              :src="post.imageUrl"
              :alt="post.imageAlt"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            >
          </div>
          <time
            :datetime="post.date"
            class="mb-2 block text-sm text-gray-500"
          >
            {{ post.date }}
          </time>
          <h3 class="line-clamp-2 text-lg font-semibold transition-colors group-hover:text-orange-500">
            {{ post.title }}
          </h3>
        </a>
      </template>
    </Carousel>
  </section>
</template>
