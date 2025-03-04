# v-drag拖拽指令

将指令添加到需要拖拽的dom节点上

<div v-drag class="drag-box"></div>

<script lang="ts" setup>
import drag from '../../src/directive/drag.ts'
const vDrag = drag
</script>

<style>
button {
  border: 1px solid #CCCCCC;
}
.drag-box {
  position: fixed;
  width: 100px;
  height: 100px;
  top: 300px;
  left: 500px;
  background: blue;
  z-index: 9;
}
</style>
