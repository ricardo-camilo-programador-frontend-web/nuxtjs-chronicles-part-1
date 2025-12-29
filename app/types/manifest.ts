export interface ManifestIcon {
  src: string
  sizes: string
  type: string
  purpose?: string
}

export interface ManifestMeta {
  name: string
  theme_color: string
  lang: string
  nativeUI: boolean
}

export interface Manifest {
  name: string
  short_name: string
  description: string
  theme_color: string
  start_url: string
  meta: ManifestMeta
  icons: Array<ManifestIcon>
}
