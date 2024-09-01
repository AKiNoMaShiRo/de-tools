# 无缝滚动组件

实现一系列内容的无缝滚动。

## 添加滚动内容

通过插槽的形式，将需要滚动的内容添加到组件中。横向滚动时，请为组件添加固定的宽度；纵向滚动时，请为组件添加固定的高度。

```
<SeamlessScroll :scrollData="scrollList" class="scroll-box">
  <template #default>
    <div
      v-for="item in scrollList"
      :key="item"
    >
      {{ item }}
    </div>
  </template>
</SeamlessScroll>

<script setup lang="ts">
import { reactive } from 'vue'
const scrollList = reactive([
  'aaa',
  'bbb',
  'ccc',
  'ddd',
  'eee',
])
</script>

<style>
.scroll-box {
  height: 100px;
}
</style>
```

## 组件属性

### scrollData

滚动内容，类型为数组。
- type: `Array`
- require: true

### options

组件通过`options`属性来配置滚动选项。
- type: `Object`
- require: false

可配置的属性如下：

#### `speed`
控制滚动速度，该数值为每帧滚动的百分比，建议设置为 < 1的数值。数值越大，滚动速度越快。
- type: `number`
- default: 0.5

#### `direction`
控制滚动方向，可选值有：`up`, `down`, `left`, `right`。
- type: `string`
- default: down

#### `isStop`
鼠标移入组件时，是否停止滚动。
- type: `boolean`
- default: true

#### `wheelSpeed`
配置项`isStop`为true的情况下，鼠标移入组件时可以使用滚轮控制内容滚动，可以通过该属性配置滚轮滚动速度，数值越大滚动越快。
- type: `number`
- default: 5

#### `scrollNum`
启用无缝滚动的最小内容数量，内容数量小于该数值时不滚动。
- type: `number`
- default: 5
