export default function throttle(func: Function, delay: number = 1000) {
  let lastTime = Date.now()
  return function () {
    if (Date.now() - lastTime > delay) {
      lastTime = Date.now()
      func.apply(this, arguments)
    }
  }
}
