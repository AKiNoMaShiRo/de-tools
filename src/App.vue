<script setup>
import SeamlessScroll from './components/seamlessScroll.vue'
import CanvasSign from './components/canvasSign.vue'
import VirtualInfiniteScroll from './components/virtualInfiniteScroll.vue'

import adaptClientSize from './tools/adaptClientSize'
import debounce from './tools/debounce'
import throttle from './tools/throttle'

const scrollList = reactive([
  'aaa',
  'bbb',
  'ccc',
  'ddd',
  'eee',
  // 'fff',
  // 'ggg',
  // 'hhh',
  // 'iii',
  // 'jjj',
  // 'kkk',
  // 'lll',
  // 'mmm',
  // 'nnn',
])
// onBeforeMount(() => {
//   adaptClientSize(1920)
// })

let count = ref(0)

let btnFunc = throttle(function () {
  count.value ++
  console.log(count.value)
})


const sign = ref(null)
const clearSign = () => {
    console.log('clearSign')
    if (sign.value) {
      sign.value.clear()
    }
  } 
const backSign = () => {
  console.log('backSign')
  if (sign.value) {
    sign.value.back()
  }
} 
const restoreSign = () => {
  console.log('restoreSign')
  if (sign.value) {
    sign.value.restore()
  }
} 
const downloadSign = () => {
  console.log('downloadSign')
  if (sign.value) {
    sign.value.download()
  }
}
let menge = ref({word: ''})


let dataList = ref([{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9},
  {id: 10}, {id: 11}, {id: 12}, {id: 13}, {id: 14}, {id: 15}, {id: 16}, {id: 17}, {id: 18}, {id: 19}])
let show = ref(false)
onMounted(() => {
  // for (let i = 1; i <= 30; i++) {
  //   dataList.value.push({id: i})
  // }
  show.value = true
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
  </div>
  <div style="width: 2rem; height: 1rem; background: red;" />

  <!-- <button @click="clearSign">清除</button>
  <button @click="backSign">撤销</button>
  <button @click="restoreSign">恢复</button>
  <button @click="downloadSign">下载</button>
  <CanvasSign ref="sign"></CanvasSign> -->

  <VirtualInfiniteScroll
    :dataList="dataList"
    v-slot="slotProps"
  >
    <div
      v-for="item in slotProps.slotItem"
      :key="item.id"
      :style="{ 'height': 20 + item.id + 'px' }"
    >{{ item.id }}</div>
  </VirtualInfiniteScroll>

  <!-- <div v-for="item in dataList" :key="item.id" :style="{ 'height': 20 + item.id + 'px' }">
      {{ item.id }}
    </div> -->

  <!-- <button style="width: 60px; height: 40px;" @click="btnFunc">+1</button>
  <div>{{ count }}</div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <SeamlessScroll
    class="scroll-box"
    :scroll-data="scrollList"
    :options="{
      direction: 'right',
      speed: 0.05,
    }"
  >
    <template #default>
      <div style="display: flex;">
        <div
          v-for="item in scrollList"
          :key="item"
          class="scroll-item"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </SeamlessScroll> -->
  <!-- <SeamlessScroll
    class="scroll-box-y"
    :scroll-data="scrollList"
    :options="{
      direction: 'up',
      speed: 0.3,
      isStop: false,
    }"
  >
    <template #default>
      <div
        v-for="item in scrollList"
        :key="item"
        class="scroll-item"
      >
        {{ item }}
      </div>
    </template>
  </SeamlessScroll> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.scroll-box {
  width: 300px;
}
.scroll-item {
  margin-right: 6px;
  width: 100px;
  height: 30px;
  background: #bbb;
}
.scroll-box-y {
  height: 100px;
}
</style>
