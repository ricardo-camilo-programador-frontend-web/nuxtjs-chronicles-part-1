export function useDevCounter() {
  const { $env } = useNuxtApp()

  const enableCounter = () => {
    if (typeof window !== 'undefined') {
      if (document.getElementById('counter-dev-script')) {
        return
      }

      const script = document.createElement('script')
      script.id = 'counter-dev-script'
      script.async = true
      script.src = 'https://cdn.counter.dev/script.js'
      script.dataset.id = $env.COUNTER_API_KEY
      script.dataset.utcoffset = '-3'
      document.head.appendChild(script)
    }
  }

  return {
    enableCounter,
  }
}
