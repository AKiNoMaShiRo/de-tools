const newdrag = {
  mounted: (el: HTMLElement) => {
    let clickPos = { left: 0, top: 0 } // 鼠标进行拖拽时点击的位置
    let dragPos = { left: 0, top: 0 } // 元素定位的位置

    function handleMove(e: MouseEvent) {
      e.stopPropagation()
      el.style.cssText = `left: ${e.pageX - clickPos.left}px; top: ${e.pageY - clickPos.top}px;`
    }

    el.addEventListener('pointerdown', function (e) {
      document.getElementsByTagName('html')[0].style.userSelect = 'none'
      e.stopPropagation()
      clickPos.left = e.offsetX
      clickPos.top = e.offsetY
      dragPos.left = e.pageX - clickPos.left
      dragPos.top = e.pageY - clickPos.top
      el.style.cssText = `left: ${dragPos.left}px; top: ${dragPos.top}px;`
      el.addEventListener('pointermove', handleMove)
    })

    el.addEventListener('pointerup', function (e) {
      document.getElementsByTagName('html')[0].style.userSelect = 'auto'
      el.removeEventListener('pointermove', handleMove)
    })
  },
}
export default newdrag
