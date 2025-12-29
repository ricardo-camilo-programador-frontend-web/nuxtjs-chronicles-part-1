interface IconConfig {
  size: string
  purpose?: 'maskable' | 'any'
}

const ICON_SIZES: Array<IconConfig> = [
  { size: '16x16' },
  { size: '20x20' },
  { size: '29x29' },
  { size: '32x32' },
  { size: '40x40' },
  { size: '50x50' },
  { size: '57x57' },
  { size: '58x58' },
  { size: '60x60' },
  { size: '64x64' },
  { size: '72x72' },
  { size: '76x76' },
  { size: '80x80' },
  { size: '87x87' },
  { size: '100x100' },
  { size: '114x114' },
  { size: '120x120' },
  { size: '128x128' },
  { size: '144x144' },
  { size: '152x152' },
  { size: '167x167' },
  { size: '180x180' },
  { size: '192x192' },
  { size: '256x256' },
  { size: '512x512' },
  { size: '1024x1024' },
]

const MASKABLE_ICON_SIZES: Array<IconConfig> = [
  { size: '48x48', purpose: 'maskable' },
  { size: '72x72', purpose: 'maskable' },
  { size: '96x96', purpose: 'maskable' },
  { size: '144x144', purpose: 'maskable' },
  { size: '192x192', purpose: 'maskable' },
  { size: '512x512', purpose: 'maskable' },
]

function generateIconPath(size: string, isMaskable = false): string {
  if (isMaskable) {
    const maskableMap: Record<string, string> = {
      '48x48': 'android-launcher-icon-48-48.png',
      '72x72': 'android-launcher-icon-72-72.png',
      '96x96': 'android-launcher-icon-96-96.png',
      '144x144': 'android-launcher-icon-144-144.png',
      '192x192': 'android-launcher-icon-192-192.png',
      '512x512': 'android-launcher-icon-512-512.png',
    }
    const fileName = maskableMap[size] || `${size.split('x')[0]}.png`
    return `@/assets/images/icons/${fileName}`
  }
  return `@/assets/images/icons/${size.split('x')[0]}.png`
}

export function generateManifestIcons() {
  const standardIcons = ICON_SIZES.map(config => ({
    src: generateIconPath(config.size, false),
    sizes: config.size,
    type: 'image/png',
  }))

  const maskableIcons = MASKABLE_ICON_SIZES.map(config => ({
    src: generateIconPath(config.size, true),
    sizes: config.size,
    type: 'image/png',
    purpose: config.purpose,
  }))

  return [...standardIcons, ...maskableIcons]
}
