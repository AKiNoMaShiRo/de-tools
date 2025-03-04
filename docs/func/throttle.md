# 节流


### 示例
简单的计数器
```html
<button style="width: 40px; height: 28px;" @click="btnFunc">+1</button>
<div>{{ count }}</div>
```

使用防抖函数
```js
let btnFunc = throttle(function () {
  count.value ++
}, 1000)
```

效果如下
<div class="throttle-container">
  <button style="width: 40px; height: 28px;" @click="btnFunc">+1</button>
  <div>{{ count }}</div>
</div>

<script lang="ts" setup>
import throttle from '../../src/tools/throttle.ts'
import { ref } from 'vue'

let count = ref(0)

let btnFunc = throttle(function () {
  count.value ++
}, 1000)
</script>

<style>
button {
  border: 1px solid #CCCCCC;
}
.throttle-container {
  position: relative;
  height: 100px;
  width: 100px;
  /* border: 1px solid #CCCCCC; */
}
</style>
