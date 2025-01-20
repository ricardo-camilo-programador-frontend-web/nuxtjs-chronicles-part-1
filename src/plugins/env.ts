import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  return {
    provide: {
      env: {
        ...config.public,
      } as Env,
    },
  }
})
