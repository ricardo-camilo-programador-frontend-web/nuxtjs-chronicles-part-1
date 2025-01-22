import type { CategoryItem } from '@/types/categories'
import {
  backgroundGradientOrange,
  backgroundGradientOrangeMini,
  charlesdeluvio,
  katherineMcadoo,
} from '@/utils/imageFiles'
import { acceptHMRUpdate, defineStore } from 'pinia'

interface CategoriesStore {
  categories: Array<CategoryItem>
}

export const useCategoriesStore = defineStore({
  id: 'categoriesStore',
  state: (): CategoriesStore => ({
    categories: [
      {
        id: 'accessories',
        title: 'categories.items.accessories.title',
        productCount: 84,
        gradientClass: 'bg-gradient-to-r from-purple-400 to-pink-400',
        src: backgroundGradientOrange,
        altText: 'categories.items.accessories.altText',
      },
      {
        id: 'food',
        title: 'categories.items.food.title',
        productCount: 64,
        gradientClass: 'bg-gradient-to-r from-green-400 to-blue-400',
        src: backgroundGradientOrangeMini,
        altText: 'categories.items.food.altText',
      },
      {
        id: 'furniture',
        title: 'categories.items.furniture.title',
        productCount: 22,
        gradientClass: 'bg-gradient-to-r from-blue-400 to-teal-400',
        src: charlesdeluvio,
        altText: 'categories.items.furniture.altText',
      },
      {
        id: 'bags',
        title: 'categories.items.bags.title',
        productCount: 16,
        gradientClass: 'bg-gradient-to-r from-pink-400 to-red-400',
        src: katherineMcadoo,
        altText: 'categories.items.bags.altText',
      },
    ],
  }),
  getters: {
    getCategories(): Array<CategoryItem> {
      return this.categories
    },
  },
  actions: {
    initializeCategories() {
      this.categories = [
        {
          id: 'accessories',
          title: 'categories.items.accessories.title',
          productCount: 84,
          gradientClass: 'bg-gradient-to-r from-purple-400 to-pink-400',
          src: backgroundGradientOrange,
          altText: 'categories.items.accessories.altText',
        },
        {
          id: 'food',
          title: 'categories.items.food.title',
          productCount: 64,
          gradientClass: 'bg-gradient-to-r from-green-400 to-blue-400',
          src: backgroundGradientOrangeMini,
          altText: 'categories.items.food.altText',
        },
        {
          id: 'furniture',
          title: 'categories.items.furniture.title',
          productCount: 22,
          gradientClass: 'bg-gradient-to-r from-blue-400 to-teal-400',
          src: charlesdeluvio,
          altText: 'categories.items.furniture.altText',
        },
        {
          id: 'bags',
          title: 'categories.items.bags.title',
          productCount: 16,
          gradientClass: 'bg-gradient-to-r from-pink-400 to-red-400',
          src: katherineMcadoo,
          altText: 'categories.items.bags.altText',
        },
      ]
    },
  },
})

acceptHMRUpdate(useCategoriesStore, import.meta.hot)
