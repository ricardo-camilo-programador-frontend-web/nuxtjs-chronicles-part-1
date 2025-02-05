import type { Product } from '@/types/product'
import {
  birdCage,
  catFood,
  catFoodPremium,
  dogCollar,
  dogFoodLarge,
  dogFoodMedium,
  dogFoodMini,
  dogFoodOrange,
  fishFilter,
  groomingKit,
  hamsterHabitat,
  litterBox,
  scratchingPost,
} from '@/utils/imageFiles'
import { acceptHMRUpdate, defineStore } from 'pinia'

interface ProductStore {
  products: Array<Product>
}

export const useProductStore = defineStore({
  id: 'productStore',
  state: (): ProductStore => ({
    products: [
      {
        id: 'premium-cat-food-1',
        name: 'products.premiumCatFood',
        price: 24.99,
        imageSrc: catFood,
        favorite: true,
        currency: 'products.currency',
        altText: 'products.catBowlAltText',
        featured: true,
        bestSelling: true,
      },
      {
        id: 'leather-dog-collar',
        name: 'products.leatherDogCollar',
        price: 34.99,
        imageSrc: dogCollar,
        favorite: false,
        currency: 'products.currency',
        altText: 'products.dogCollarAltText',
        featured: false,
        bestSelling: true,
      },
      {
        id: 'cat-scratching-post',
        name: 'products.catScratchingPost',
        price: 59.99,
        imageSrc: scratchingPost,
        favorite: true,
        currency: 'products.currency',
        altText: 'products.scratchingPostAltText',
        featured: true,
        bestSelling: false,
      },
      {
        id: 'bird-cage-deluxe',
        name: 'products.birdCageDeluxe',
        price: 89.99,
        imageSrc: birdCage,
        favorite: false,
        currency: 'products.currency',
        altText: 'products.birdCageAltText',
        featured: true,
        bestSelling: true,
      },
      {
        id: 'hamster-habitat',
        name: 'products.hamsterHabitat',
        price: 45.99,
        imageSrc: hamsterHabitat,
        favorite: false,
        currency: 'products.currency',
        altText: 'products.hamsterHabitatAltText',
        featured: false,
        bestSelling: true,
      },
      {
        id: 'fish-tank-filter',
        name: 'products.fishTankFilter',
        price: 29.99,
        imageSrc: fishFilter,
        favorite: false,
        currency: 'products.currency',
        altText: 'products.fishFilterAltText',
        featured: true,
        bestSelling: true,
      },
      {
        id: 'dog-grooming-kit',
        name: 'products.dogGroomingKit',
        price: 49.99,
        imageSrc: groomingKit,
        favorite: true,
        currency: 'products.currency',
        altText: 'products.groomingKitAltText',
        featured: true,
        bestSelling: true,
      },
      {
        id: 'cat-litter-box',
        name: 'products.catLitterBox',
        price: 39.99,
        imageSrc: litterBox,
        favorite: false,
        currency: 'products.currency',
        altText: 'products.litterBoxAltText',
        featured: true,
        bestSelling: true,
      },
      {
        id: 'premium-dog-food-orange-1',
        imageSrc: dogFoodOrange,
        name: 'products.premiumDogFood',
        price: 18.99,
        currency: 'products.currency',
        altText: 'products.premiumDogFoodAltText',
        featured: true,
        bestSelling: true,
        favorite: true,
      },
      {
        id: 'premium-cat-food-1',
        imageSrc: catFood,
        name: 'products.premiumCatFood',
        price: 18.99,
        currency: 'products.currency',
        altText: 'products.premiumCatFoodAltText',
        featured: true,
        bestSelling: true,
        favorite: true,
      },
      {
        id: 'premium-dog-food-mini-1',
        imageSrc: dogFoodMini,
        name: 'products.premiumDogFood',
        price: 18.99,
        currency: 'products.currency',
        altText: 'products.premiumDogFoodAltText',
        featured: true,
        bestSelling: true,
        favorite: true,
      },
      {
        id: 'premium-dog-food-orange-2',
        imageSrc: dogFoodLarge,
        name: 'products.premiumDogFood',
        price: 18.99,
        currency: 'products.currency',
        altText: 'products.premiumDogFoodAltText',
        featured: true,
        bestSelling: true,
        favorite: true,
      },
      {
        id: 'premium-cat-food-2',
        imageSrc: catFoodPremium,
        name: 'products.premiumCatFood',
        price: 18.99,
        currency: 'products.currency',
        altText: 'products.premiumCatFoodAltText',
        featured: true,
        bestSelling: true,
        favorite: true,
      },
      {
        id: 'premium-dog-food-mini-2',
        imageSrc: dogFoodMedium,
        name: 'products.premiumDogFood',
        price: 18.99,
        currency: 'products.currency',
        altText: 'products.premiumDogFoodAltText',
        featured: true,
        bestSelling: true,
        favorite: true,
      },
      {
        id: 'premium-dog-food-orange-3',
        imageSrc: dogFoodOrange,
        name: 'products.premiumDogFood',
        price: 18.99,
        currency: 'products.currency',
        altText: 'products.premiumDogFoodAltText',
        featured: true,
        bestSelling: true,
        favorite: true,
      },
      {
        id: 'premium-cat-food-3',
        imageSrc: catFood,
        name: 'products.premiumCatFood',
        price: 18.99,
        currency: 'products.currency',
        altText: 'products.premiumCatFoodAltText',
        featured: true,
        bestSelling: true,
        favorite: true,
      },
      {
        id: 'premium-dog-food-mini-3',
        imageSrc: dogFoodMini,
        name: 'products.premiumDogFood',
        price: 18.99,
        currency: 'products.currency',
        altText: 'products.premiumDogFoodAltText',
        featured: true,
        bestSelling: true,
        favorite: true,
      },
      {
        id: 'premium-dog-food-orange-4',
        imageSrc: dogFoodOrange,
        name: 'products.premiumDogFood',
        price: 18.99,
        currency: 'products.currency',
        altText: 'products.premiumDogFoodAltText',
        featured: true,
        bestSelling: true,
        favorite: true,
      },
      {
        id: 'premium-cat-food-4',
        imageSrc: catFood,
        name: 'products.premiumCatFood',
        price: 18.99,
        currency: 'products.currency',
        altText: 'products.premiumCatFoodAltText',
        featured: true,
        bestSelling: true,
        favorite: true,
      },
      {
        id: 'premium-dog-food-mini-4',
        imageSrc: dogFoodMini,
        name: 'products.premiumDogFood',
        price: 18.99,
        currency: 'products.currency',
        altText: 'products.premiumDogFoodAltText',
        featured: false,
        bestSelling: false,
        favorite: true,
      },
      {
        id: 'premium-dog-food-orange-5',
        imageSrc: dogFoodOrange,
        name: 'products.premiumDogFood',
        price: 18.99,
        currency: 'products.currency',
        altText: 'products.premiumDogFoodAltText',
        featured: false,
        bestSelling: false,
        favorite: true,
      },
      {
        id: 'premium-cat-food-5',
        imageSrc: catFood,
        name: 'products.premiumCatFood',
        price: 18.99,
        currency: 'products.currency',
        altText: 'products.premiumCatFoodAltText',
        featured: false,
        bestSelling: false,
        favorite: true,
      },
    ],
  }),
  actions: {
    getProducts() {
      return this.products
    },
    updateProductFavorite(productToUpdate: Product): void {
      this.products = this.products.map(product =>
        product.id === productToUpdate.id
          ? { ...product, favorite: !product.favorite }
          : product,
      )
    },
  },
  getters: {
    getFavoriteProducts(): Array<Product> {
      const favoriteProducts = this.products.filter(product => product.favorite)
      const uniqueFavorites = new Map()

      favoriteProducts.forEach((product) => {
        if (!uniqueFavorites.has(product.id)) {
          uniqueFavorites.set(product.id, product)
        }
      })

      return Array.from(uniqueFavorites.values())
    },
    getFeaturedProducts(): Array<Product> {
      return this.products.filter(product => product.featured)
    },
    getBestSellingProducts(): Array<Product> {
      return this.products.filter(product => product.bestSelling)
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}
