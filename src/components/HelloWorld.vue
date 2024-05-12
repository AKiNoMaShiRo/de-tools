<script setup lang="ts">
import { ref } from 'vue'
// import { debounce } from '@/tools/debounce.ts'
import throttle from '../tools/throttle.ts'

defineProps<{ msg: string }>()

const count = ref(0)
const onClick = throttle((str) => {
  console.log('throttle', str)
}, 500)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div v-drag class="card">
    <button v-drag type="button" @click="count++">
      count is {{ count }}
    </button>
    <p v-drag>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <div v-drag class="drag-box">
    大猪
  </div>
  <div
    class="debonce-box" @click="onClick(
      { a: '1' },
    )"
  >
    节流
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.drag-box {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
}
.debonce-box {
  width: 100px;
  height: 100px;
  background: yellowgreen;
}
</style>
