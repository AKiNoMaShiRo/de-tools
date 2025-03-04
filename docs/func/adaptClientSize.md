# 屏幕宽度自适应

通过rem实现宽度自适应，1rem代表设计稿标准尺寸中的1px。

<<< ../../src/tools/adaptClientSize.ts

<script lang="ts" setup>
import debounce from '../../src/func/debounce.ts'
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
