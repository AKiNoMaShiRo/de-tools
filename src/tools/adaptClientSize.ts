export function adaptClientSize(designWidth: number) {
  function refreshRem() {
    const clientWidth = document.documentElement.clientWidth
    const rem = clientWidth / designWidth * 100
    document.documentElement.style.fontSize = `${rem}px`
  }
  window.addEventListener('resize', refreshRem())
}
