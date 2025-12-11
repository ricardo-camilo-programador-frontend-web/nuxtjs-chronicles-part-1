import type { Product } from '@/types/product'
import { useI18n } from 'vue-i18n'
import { type CurrencyType, formatCurrency } from '@/utils/formatCurrency'

export function translateProduct(product: Product) {
  const { t } = useI18n()
  const currencyCode = t(product.currency) as CurrencyType

  return {
    ...product,
    name: t(product.name),
    formattedPrice: formatCurrency(
      product.price,
      currencyCode,
      'standard',
      'short',
      currencyCode === 'BRL' ? 'pt-BR' : 'en-US',
    ),
    altText: t(product.altText),
  }
}

export function useTranslateProducts(productsToTranslate: Array<Product>) {
  return productsToTranslate.map(product => translateProduct(product))
}
