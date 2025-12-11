import type { Env } from '@/types/env'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  return {
    provide: {
      env: config.public as Env,
    },
  }
})
