---
title: Spin 加载
---

## 使用场景

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。


## 姿势

<layout-code-box title="基本用法" description="一个简单的 loading 状态。">
  <demo-spin-spin1></demo-spin-spin1>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/spin/spin1.vue
  </highlight-code>
</layout-code-box>

<layout-code-box title="容器" description="放入一个容器中。">
  <demo-spin-spin2></demo-spin-spin2>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/spin/spin2.vue
  </highlight-code>
</layout-code-box>


## API

<layout-table title="Attributes" :columns="columns" :dataSource="dataSource"></layout-table>

**其他更多 API，请移步[传送门](https://www.antdv.com/components/spin-cn/#API)**

<script>
  export default {
    data() {
      return { 
        columns: ['参数', '说明', '类型', '可选值', '默认值'],
        dataSource: [{
          0: 'spinning',
          1: '是否为加载中状态',
          2: 'boolean',
          3: 'true/false',
          4: 'true'
        }, {
          0: 'tip',
          1: '当作为包裹元素时，可以自定义描述文案',
          2: 'string',
          3: '--',
          4: '--'
        }]
      }
    }
  }
</script>
