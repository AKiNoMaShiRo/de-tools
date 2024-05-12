const drag = {
  mounted: (el: HTMLElement) => {
    const clickPosition = {
      left: 0,
      top: 0,
    }
    el.addEventListener('pointerdown', down)
    function down(event: MouseEvent) {
      event.stopPropagation()
      el.style.cursor = 'grab'
      clickPosition.left = event.offsetX
      clickPosition.top = event.offsetY
      el.style.left = `${event.pageX - clickPosition.left}px`
      el.style.top = `${event.pageY - clickPosition.top}px`
      el.style.position = 'fixed'
      el.addEventListener('pointermove', move)
    }
    function move(event: MouseEvent) {
      el.style.left = `${event.pageX - clickPosition.left}px`
      el.style.top = `${event.pageY - clickPosition.top}px`
    }
    el.addEventListener('pointerup', () => {
      el.style.cursor = 'auto'
      el.removeEventListener('pointermove', move)
    })
    el.addEventListener('pointerleave', () => {
      el.style.cursor = 'auto'
      el.removeEventListener('pointermove', move)
    })
  },
}
export default drag
