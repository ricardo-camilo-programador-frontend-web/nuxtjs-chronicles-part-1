export interface Product {
  id: string
  imageSrc: string
  name: string
  price: number
  currency: string
  altText: string
  featured: boolean
  bestSelling: boolean
  isFavorite?: boolean
}
