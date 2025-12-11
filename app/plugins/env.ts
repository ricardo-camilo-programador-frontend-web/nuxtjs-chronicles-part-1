import type { Env } from '@/types/env'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  // Type-safe env object with fallbacks for optional keys
  const env: Partial<Env> = config.public

  return {
    provide: {
      env: env as Env,
    },
  }
})
