import type { Env } from '~/types/env'

declare module '#app' {
  interface NuxtApp {
    $env: Env
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $env: Env
  }
}
