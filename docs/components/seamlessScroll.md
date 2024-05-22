# 无缝滚动组件

实现一系列内容的无缝滚动。

## 添加滚动内容

通过插槽的形式，将需要滚动的内容添加到组件中。横向滚动时，请为组件添加固定的高度；纵向滚动时，请为组件添加固定的宽度。

```
<SeamlessScroll class="scroll-box">
  <template #default>
    <div>a</div>
    <div>b</div>
    <div>c</div>
  </template>
</SeamlessScroll>

<style>
.scroll-box {
  height: 100px;
}
</style>
```

## 配置项

组件通过`options`属性来配置滚动选项。

### speed
控制滚动速度，该数值为每帧滚动的百分比，建议设置为 < 1的数值。数值越大，滚动速度越快。
- type: `number`
- default: 0.5

### direction
控制滚动方向，可选值有：`up`, `down`, `left`, `right`。
- type: `string`
- default: down

### isStop
鼠标移入组件时，是否停止滚动。
- type: `boolean`
- default: true

### wheelSpeed
配置项`isStop`为true的情况下，鼠标移入组件时可以使用滚轮控制内容滚动，可以通过该属性配置滚轮滚动速度，数值越大滚动越快。
- type: `number`
- default: 5

### scrollNum
启用无缝滚动的最小内容数量，内容数量小于该数值时不滚动。
- type: `number`
- default: 5
