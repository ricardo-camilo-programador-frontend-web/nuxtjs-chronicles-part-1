type NotationType =
  | 'standard'
  | 'scientific'
  | 'engineering'
  | 'compact'
  | undefined
type CompactDisplayType = 'short' | 'long' | undefined
type LocaleType = 'pt-BR' | 'en-US' | undefined
export type CurrencyType = 'BRL' | 'USD' | string
type StyleType =
  | 'currency'
  | 'decimal'
  | 'percent'
  | 'unit'
  | 'accounting'
  | undefined

export function formatCurrency(
  value: any,
  currency: CurrencyType = 'BRL',
  notation: NotationType = 'standard',
  compactDisplay: CompactDisplayType = 'short',
  locale: LocaleType = 'pt-BR',
  style: StyleType = 'currency',
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
) {
  if (value === undefined) {
    return ''
  }

  const convertedToNumber = Number(value)

  const formatter = new Intl.NumberFormat(locale, {
    notation,
    compactDisplay,
    style: 'currency',
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  })

  const formattedValue = formatter.format(convertedToNumber)

  return formattedValue
}
