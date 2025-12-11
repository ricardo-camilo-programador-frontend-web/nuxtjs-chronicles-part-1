import { nextTick, onMounted, onUnmounted } from 'vue'

const RIPPLE_ANIMATION_DURATION = 600 // ms

function createRippleElement(x: number, y: number, diameter: number): HTMLSpanElement {
  const ripple = document.createElement('span')
  ripple.className = 'ripple'
  ripple.style.width = `${diameter}px`
  ripple.style.height = `${diameter}px`
  ripple.style.left = `${x - diameter / 2}px`
  ripple.style.top = `${y - diameter / 2}px`
  return ripple
}

function createRippleHandler(element: HTMLElement) {
  return (event: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const size = Math.max(rect.width, rect.height)
    const diameter = size * 2

    const ripple = createRippleElement(x, y, diameter)
    element.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, RIPPLE_ANIMATION_DURATION)
  }
}

export function useRippleEffect(elementId?: string) {
  let clickHandler: ((event: MouseEvent) => void) | null = null
  let element: HTMLElement | null = null

  onMounted(() => {
    if (globalThis.window === undefined || !elementId) {
      return
    }

    nextTick(() => {
      element = document.getElementById(elementId)

      if (!element) {
        return
      }

      clickHandler = createRippleHandler(element)
      element.addEventListener('click', clickHandler)
    })
  })

  onUnmounted(() => {
    if (element && clickHandler) {
      element.removeEventListener('click', clickHandler)
    }
  })
}
