declare global {
  interface Window {
    dataLayer: Array<unknown>
  }
}

export function useGTM() {
  const { $env } = useNuxtApp()

  const enableGTM = () => {
    const gtmId = $env.GTM_ID

    if (typeof window !== 'undefined' && gtmId) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        'event': 'gtm.js',
      })

      const script = document.createElement('script')
      script.id = 'gtm-script'
      script.async = true
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
      document.head.appendChild(script)
    }
  }

  const disableGTM = () => {
    if (typeof window !== 'undefined') {
      const script = document.getElementById('gtm-script')
      if (script) {
        script.remove()
      }

      window.dataLayer = []

      const noscriptIframe = document.querySelector('iframe[src*="googletagmanager"]')
      if (noscriptIframe) {
        noscriptIframe.remove()
      }
    }
  }

  return {
    enableGTM,
    disableGTM,
  }
}
