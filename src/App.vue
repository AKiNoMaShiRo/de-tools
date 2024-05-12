<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import SeamlessScroll from './components/seamlessScroll.vue'

const scrollList = reactive([
  'aaa',
  'bbb',
  'ccc',
  'ddd',
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
  <SeamlessScroll class="scroll-box">
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
  height: 100px;
}
.scroll-item {
  width: 100px;
  height: 30px;
  background: #bbb;
}
</style>
