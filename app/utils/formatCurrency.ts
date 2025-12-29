type NotationType
  = | 'standard'
    | 'scientific'
    | 'engineering'
    | 'compact'
    | undefined
type CompactDisplayType = 'short' | 'long' | undefined
type LocaleType = 'pt' | 'en' | undefined
export type CurrencyType = 'BRL' | 'USD'

export function formatCurrency(
  value: number | string,
  currency: CurrencyType = 'BRL',
  notation: NotationType = 'standard',
  compactDisplay: CompactDisplayType = 'short',
  locale: LocaleType = 'pt',
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
): string {
  if (value === undefined) {
    return 'R$ undefined'
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

  return formatter.format(convertedToNumber)
}
// Removed duplicate and dead code
