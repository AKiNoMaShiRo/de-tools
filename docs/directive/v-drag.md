# v-drag拖拽指令

将指令添加到需要拖拽的dom节点上

<div class="drag-container">
  <div v-drag class="drag-box"></div>
</div>

<<< ../../src/directive/drag.ts

<script lang="ts" setup>
import drag from '../../src/directive/drag.ts'
const vDrag = drag
</script>

<style>
button {
  border: 1px solid #CCCCCC;
}
.drag-container {
  position: relative;
  height: 100px;
  margin-bottom: 16px;
  /* border: 1px solid #CCCCCC; */
}
.drag-box {
  width: 100px;
  height: 100px;
  background: blue;
  z-index: 9;
}
</style>
