type NotationType =
  | 'standard'
  | 'scientific'
  | 'engineering'
  | 'compact'
  | undefined
type CompactDisplayType = 'short' | 'long' | undefined
type LocaleType = 'pt-BR' | 'en-US' | undefined
export type CurrencyType = 'BRL' | 'USD' | string

export function formatCurrency(
  value: any,
  currency: CurrencyType = 'BRL',
  notation: NotationType = 'standard',
  compactDisplay: CompactDisplayType = 'short',
  locale: LocaleType = 'pt-BR',
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
) {
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

  const formattedValue = formatter.format(convertedToNumber)

  return formattedValue
}
