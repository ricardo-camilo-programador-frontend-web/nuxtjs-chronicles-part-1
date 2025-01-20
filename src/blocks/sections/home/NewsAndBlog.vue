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
    class="w-full max-w-[95vw] md:max-w-7xl mx-auto py-12 px-4"
  >
    <h2
      id="news-blog-title"
      class="text-2xl font-bold text-center mb-8"
    >
      {{ t('newsAndBlog.title') }}
    </h2>

    <div
      class="flex flex-col md:flex-row items-center justify-center gap-6"
      role="list"
    >
      <article
        v-for="post in blogPosts"
        :key="post.id"
        class="group"
        role="listitem"
      >
        <a
          :href="`/blog/${post.slug}`"
          class="block focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg"
        >
          <div class="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
            <span
              class="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full z-10"
            >
              {{ t(`categories.${post.category}`) }}
            </span>
            <img
              :src="post.imageUrl"
              :alt="post.imageAlt"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            >
          </div>

          <time
            :datetime="post.date"
            class="text-sm text-gray-500 mb-2 block"
          >
            {{ post.date }}
          </time>

          <h3
            class="text-lg font-semibold group-hover:text-orange-500 transition-colors line-clamp-2"
          >
            {{ post.title }}
          </h3>
        </a>
      </article>
    </div>
  </section>
</template>
