<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import SeamlessScroll from './components/seamlessScroll.vue'

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
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <SeamlessScroll
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
  </SeamlessScroll>
  <SeamlessScroll
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
  </SeamlessScroll>
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
