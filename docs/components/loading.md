---
title: Loading 加载
---

## 使用场景

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。


## 姿势

<layout-code-box title="作为加载容器和父容器" description="自定义 loading 值来控制加载状态，且自定义 class 来作为父容器的类名。">
  <demo-loading-loading1></demo-loading-loading1>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/loading/loading1.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="仅作为加载容器" description="只是将组件作为加载容器来使用，注意，这种使用方式会在使用了该组件的第一个子元素生成一个空标签 div，一些情况下会影响到你的页面布局">
  <demo-loading-loading2></demo-loading-loading2>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/loading/loading2.vue
  </highlight-code>
</layout-code-box>


## API

<layout-table title="Attributes" :tableColumns="tableColumns" :tableData="tableData">
</layout-table>

<script>
  export default {
    data() {
      return { 
        tableColumns: ['参数', '说明', '类型', '可选值', '默认值'],
        tableData: [{
          0: 'className',
          1: '类名',
          2: 'String',
          3: '-',
          4: '-'
        }, {
          0: 'loading',
          1: '加载状态',
          2: 'Boolean',
          3: 'true, false',
          4: 'true'
        }]
      }
    },
  }
</script>

<style>
</style>
