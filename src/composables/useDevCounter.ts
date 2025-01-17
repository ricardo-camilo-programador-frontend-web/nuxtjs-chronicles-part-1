export function useDevCounter() {
  const { $env } = useNuxtApp()

  const enableCounter = () => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.id = 'counter-dev-script'
      script.async = true
      script.src = 'https://cdn.counter.dev/script.js'
      script.dataset.id = $env.COUNTER_API_KEY
      script.dataset.utcoffset = '-3'
      document.head.appendChild(script)
    }
  }

  const disableCounter = () => {
    if (typeof window !== 'undefined') {
      const script = document.getElementById('counter-dev-script')
      if (script) {
        script.remove()
      }
    }
  }

  return {
    enableCounter,
    disableCounter,
  }
}
