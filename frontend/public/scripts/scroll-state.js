;(() => {
  const root = document.documentElement
  let lastY = window.scrollY
  let ticking = false

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

  const update = () => {
    const y = window.scrollY
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
    const progress = clamp(y / maxScroll, 0, 1)
    const delta = y - lastY
    const direction = delta > 0 ? 1 : delta < 0 ? -1 : 0
    const hideThreshold = 24
    const shouldHide = y > hideThreshold && direction > 0 ? 1 : 0

    root.style.setProperty('--scroll-y', `${y}`)
    root.style.setProperty('--scroll-distance', `${Math.max(0, y - hideThreshold)}`)
    root.style.setProperty('--scroll-progress', `${progress}`)
    root.style.setProperty('--scroll-direction', `${direction}`)
    root.style.setProperty('--scroll-delta', `${delta}`)
    root.style.setProperty('--nav-hide', `${shouldHide}`)

    root.dataset.scrollDirection = direction > 0 ? 'down' : direction < 0 ? 'up' : 'idle'
    root.dataset.nav = shouldHide ? 'hidden' : 'visible'

    lastY = y
    ticking = false
  }

  update()

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    },
    { passive: true },
  )

  window.addEventListener('resize', update)
})()
