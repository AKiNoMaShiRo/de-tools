<script setup lang="ts">
/*
  问题：
    需要复制dom节点，如何在拷贝同时拷贝节点绑定的事件？——直接用两个同名slot可以实现
    鼠标悬浮时可以滚轮滚动（mouseenter, mouseleave时判断）
    如何让内容滚动？——使用transform

  可选配置项：
    自动滚动速度
    滚动方向（默认纵向）
    开始滚动的数量
    鼠标悬浮是否停止滚动（悬浮不停止-无法使用滚轮滚动，悬浮时停止-可以使用滚轮滚动）
*/
const props = defineProps({
  options: {
    type: Object,
    default: () => {
      return {
        speed: 0.5,
        direction: 'down'
      }
    }
  }
})

const deSeamlessScrollBox = ref(null)
const listA = ref(null)
const listB = ref(null)

const requestAnimationId = ref()
const transformDataA = reactive([0, 0])
// const transformDataB = reactive([0, 0])

function clearRequestAnimation() {
  if (requestAnimationId.value) {
    cancelAnimationFrame(requestAnimationId.value)
    requestAnimationId.value = null
  }
}

function startScroll() {
  clearRequestAnimation()
  if (transformDataA[1] > -100)
    transformDataA[1] -= 0.5
    // transformDataB[1] -= 0.5

  else
    transformDataA[1] = 0
    // transformDataB[1] = 0

  listA.value.style.transform = `translateX(${transformDataA[0]}%) translateY(${transformDataA[1]}%)`
  listB.value.style.transform = `translateX(${transformDataA[0]}%) translateY(${transformDataA[1]}%)`
  // listB.value.style.transform = `translateX(${transformDataB[0]}%) translateY(${transformDataB[1]}%)`
  requestAnimationId.value = requestAnimationFrame(startScroll)
}

function stopScroll() {
  clearRequestAnimation()
}

function onEnter() {
  stopScroll()
}
function onLeave() {
  requestAnimationId.value = requestAnimationFrame(startScroll)
}

onMounted(() => {
  window.requestAnimationFrame(startScroll)
  deSeamlessScrollBox.value.addEventListener('wheel', (event) => {
    // 滚轮向上 deltaY负数 滚轮向下 deltaY正数
    console.log(event.deltaY)
    if (event.deltaY < 0)
      transformDataA[1] += 5
    else
      transformDataA[1] -= 5
    listA.value.style.transform = `translateX(${transformDataA[0]}%) translateY(${transformDataA[1]}%)`
    listB.value.style.transform = `translateX(${transformDataA[0]}%) translateY(${transformDataA[1]}%)`
  })
})
</script>

<template>
  <div ref="deSeamlessScrollBox" class="seamless-scroll-box" @mouseenter="onEnter" @mouseleave="onLeave">
    <section ref="listA" class="seamless-scroll-list">
      <slot />
    </section>
    <section ref="listB" class="seamless-scroll-list">
      <slot />
    </section>
  </div>
</template>

<style>
.seamless-scroll-box {
  height: 100px;
  overflow: hidden;
}
</style>
