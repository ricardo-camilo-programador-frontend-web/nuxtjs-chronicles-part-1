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
    title: 'blog.post1Title',
    date: '24 May 2024',
    category: 'news',
    imageUrl: katherineMcadoo,
    imageAlt: 'blog.post1Alt',
    slug: 'urna-cras-et-mauris',
  },
  {
    id: 'post-2',
    title: 'blog.post2Title',
    date: '24 May 2024',
    category: 'news',
    imageUrl: katherineMcadoo,
    imageAlt: 'blog.post2Alt',
    slug: 'id-tellus-dignissim',
  },
  {
    id: 'post-3',
    title: 'blog.post3Title',
    date: '24 May 2024',
    category: 'news',
    imageUrl: katherineMcadoo,
    imageAlt: 'blog.post3Alt',
    slug: 'mus-cursus-pellentesque',
  },
])
</script>

<template>
  <section
    aria-labelledby="news-blog-title"
    class="mx-auto w-full px-4 py-12 max-w-[95vw] lg:max-w-[1350px]"
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
        v-for="post in blogPosts"
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
