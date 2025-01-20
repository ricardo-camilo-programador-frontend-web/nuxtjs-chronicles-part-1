import { onMounted } from 'vue'

function rippleEffect(event: MouseEvent, htmlElementId: string) {
  const target = document.getElementById(htmlElementId) as HTMLElement

  const circle = document.createElement('span')
  const diameter = Math.max(target.clientWidth, target.clientHeight)
  const radius = diameter / 2

  const targetRect = target.getBoundingClientRect()

  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - (targetRect.left + radius)}px`
  circle.style.top = `${event.clientY - (targetRect.top + radius)}px`
  circle.classList.add('ripple')

  const ripple = target.getElementsByClassName('ripple')[0]

  if (ripple) {
    ripple.remove()
  }

  target.appendChild(circle)
}

export function useRippleEffect(htmlElementId: string | undefined) {
  const timeoutTimer = 1000

  // Retornando uma função que será chamada no setup do componente
  return () => {
    onMounted(() => {
      if (!htmlElementId) {
        return
      }

      setTimeout(() => {
        const htmlElement = document.getElementById(htmlElementId)
        if (htmlElement) {
          htmlElement.addEventListener('click', (event) => {
            rippleEffect(event, htmlElementId)
          })
        }
      }, timeoutTimer)
    })
  }
}
