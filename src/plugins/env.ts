import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  return {
    provide: {
      env: {
        ...config.public,
        ANALYZE: config.public.ANALYZE === 'true'
      } as Env
    }
  }
})