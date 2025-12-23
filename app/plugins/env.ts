import type { Env } from '~/types/env'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const env = config.public as Env

  return {
    provide: {
      env,
    },
  }
})
