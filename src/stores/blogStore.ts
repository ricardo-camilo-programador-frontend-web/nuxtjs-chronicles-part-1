import type { BlogPost } from '@/types/blogPost'
import katherineMcadoo from '@/assets/images/katherine-mcadoo-vSS2_KfzbLY-unsplash.webp'
import { acceptHMRUpdate, defineStore } from 'pinia'

interface BlogStore {
  blogPosts: Array<BlogPost>
}

export const useBlogStore = defineStore({
  id: 'blogStore',
  state: (): BlogStore => ({
    blogPosts: [
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
    ],
  }),
  actions: {
    getBlogPosts() {
      return this.blogPosts
    },
  },
  getters: {
    getBlogPosts(): Array<BlogPost> {
      return this.blogPosts
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlogStore, import.meta.hot))
}
