export function useScroll() {
  const lastScrollPosition = ref(0)
  const isScrollingDown = ref(false)
  const isScrolled = ref(false)

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY
    isScrolled.value = currentScrollPosition > 0

    isScrollingDown.value = currentScrollPosition > lastScrollPosition.value
    lastScrollPosition.value = currentScrollPosition
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isScrollingDown,
    isScrolled,
  }
}
