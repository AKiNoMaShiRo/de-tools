/*
  designWidth：设计稿宽度
*/
import throttle from './throttle'

export default function adaptClientSize(designWidth: number) {
  function refreshRem() {
    const clientWidth = document.documentElement.clientWidth
    const rem = clientWidth / designWidth * 100
    document.documentElement.style.fontSize = `${rem}px`
  }
  refreshRem()
  window.addEventListener('resize', throttle(refreshRem, 300))
  window.addEventListener('pageshow', throttle(refreshRem, 300))
}
