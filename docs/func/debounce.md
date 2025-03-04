# 防抖


### 示例
简单的计数器
```html
<button style="width: 40px; height: 28px;" @click="btnFunc">+1</button>
<div>{{ count }}</div>
```

使用防抖函数
```js
let btnFunc = debounce(function () {
  count.value ++
}, 500)
```

效果如下
<div class="debounce-container">
  <button style="width: 40px; height: 28px;" @click="btnFunc">+1</button>
  <div>{{ count }}</div>
</div>

<script lang="ts" setup>
import debounce from '../../src/tools/debounce.ts'
import { ref } from 'vue'

let count = ref(0)

let btnFunc = debounce(function () {
  count.value ++
}, 500)
</script>

<style>
button {
  border: 1px solid #CCCCCC;
}
.debounce-container {
  position: relative;
  height: 100px;
  width: 100px;
  /* border: 1px solid #CCCCCC; */
}
</style>
