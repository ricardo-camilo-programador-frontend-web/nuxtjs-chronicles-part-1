export function rippleEffect(event: MouseEvent, elementId: string) {
  const target = document.getElementById(elementId) as HTMLElement

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
