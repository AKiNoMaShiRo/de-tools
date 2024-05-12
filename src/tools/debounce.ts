export default function debounce(fn: Function, delay: number = 1000) {
  let timer = null
  return function () {
    if (timer !== null)
      clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
