---
title: Button 加载
---

## 使用场景

按钮用于开始一个即时操作。


## 姿势

<layout-code-box title="按钮类型" description="按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。">
  <demo-button-button></demo-button-button>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/button/button.vue
  </highlight-code>
</layout-code-box>


## API

<layout-table title="Attributes" :columns="columns" :dataSource="dataSource"></layout-table>

**其他更多 API，请移步[传送门](https://www.antdv.com/components/button-cn/#API)**

<script>
  export default {
    data() {
      return { 
        columns: ['参数', '说明', '类型', '可选值', '默认值'],
        dataSource: [{
          0: 'disabled',
          1: '按钮失效状态',
          2: 'boolean',
          3: 'true/false',
          4: 'false'
        }, {
          0: 'loading',
          1: '设置按钮载入状态',
          2: 'boolean | {delay: number}',
          3: '--',
          4: 'false'
        }]
      }
    }
  }
</script>
