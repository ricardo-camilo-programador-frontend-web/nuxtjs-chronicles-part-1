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
    class="mx-auto w-full px-4 py-12"
  >
    <h2
      id="news-blog-title"
      class="mb-8 text-center text-2xl font-bold"
    >
      {{ t('newsAndBlog.title') }}
    </h2>

    <Carousel :items="blogPosts">
      <template #default="{ item: post }">
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="block max-w-[17rem] rounded-lg bg-blue-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        >
          <div class="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
            <span
              class="absolute top-4 left-4 z-10 rounded-full bg-black px-3 py-1 text-xs text-white"
            >
              {{ t(`categories.${post.category}`) }}
            </span>
            <Image
              :src="post.imageUrl"
              :alt="post.imageAlt"
              width="300"
              height="300"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <time
            :datetime="post.date"
            class="mb-2 block text-sm text-gray-500"
          >
            {{ post.date }}
          </time>
          <h3
            class="line-clamp-2 text-lg font-semibold transition-colors group-hover:text-orange-500"
          >
            {{ post.title }}
          </h3>
        </NuxtLink>
      </template>
    </Carousel>
  </section>
</template>
