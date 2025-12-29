import type { Env } from '~/types/env'

declare global {
  interface Window {
    dataLayer: Array<unknown>
  }
}

export function useGTM() {
  const nuxtApp = useNuxtApp()
  const $env = nuxtApp.$env as Env

  const enableGTM = () => {
    const gtmId = $env.GTM_ID

    if (globalThis.window !== undefined && gtmId) {
      const win = globalThis.window as Window
      win.dataLayer = win.dataLayer || []
      win.dataLayer.push({
        'gtm.start': Date.now(),
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
    if (globalThis.window !== undefined) {
      const script = document.getElementById('gtm-script')
      if (script) {
        script.remove()
      }

      const win = globalThis.window as Window
      win.dataLayer = []

      const noscriptIframe = document.querySelector(
        'iframe[src*="googletagmanager"]',
      )
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
