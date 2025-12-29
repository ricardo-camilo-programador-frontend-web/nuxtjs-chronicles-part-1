import type {
  NuxtConfig as _NuxtConfig,
  NuxtOptions as _NuxtOptions,
} from 'nuxt/schema'

// Extensões leves para permitir opções dos módulos instalados no arquivo nuxt.config.ts
// sem depender dos arquivos gerados em .nuxt durante a checagem de tipos.
declare module 'nuxt/schema' {
  interface NuxtConfig {
    i18n?: Record<string, any>
    icon?: Record<string, any>
    headlessui?: Record<string, any>
    pinia?: Record<string, any>
    ui?: Record<string, any>
    fonts?: Record<string, any>
    colorMode?: Record<string, any>
    devtools?: Record<string, any>
    telemetry?: Record<string, any>
  }

  interface NuxtOptions {
    i18n?: Record<string, any>
    icon?: Record<string, any>
    headlessui?: Record<string, any>
    pinia?: Record<string, any>
    ui?: Record<string, any>
    fonts?: Record<string, any>
    colorMode?: Record<string, any>
    devtools?: Record<string, any>
    telemetry?: Record<string, any>
  }
}

export { _NuxtConfig, _NuxtOptions }
