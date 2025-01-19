export interface Product {
  id: string;
  imageSrc: string;
  name: string;
  price: number;
  currency: CurrencyType;
  altText: string;
  isFavorite?: boolean;
}
