import type { Manifest } from '~/types/manifest'
import { generateManifestIcons } from '~/utils/manifestIcons'

export const manifest: Manifest = {
  name: 'Savana Pet Shop - NuxtJS Chronicles',
  short_name: 'Savana Pets',
  theme_color: '#4CAF50',
  description:
    'Sua loja virtual completa para pets. Produtos de qualidade, serviços especializados e todo o carinho que seu animal merece.',
  start_url: '/',
  meta: {
    name: 'Savana Pet Shop - NuxtJS Chronicles',
    theme_color: '#4CAF50',
    lang: 'pt',
    nativeUI: true,
  },
  icons: generateManifestIcons(),
}
