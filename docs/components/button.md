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

<layout-table title="Attributes" :tableColumns="tableColumns" :tableData="tableData">
</layout-table>

[查看更多 API 属性](https://www.antdv.com/components/button-cn/#api)


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
          0: 'disabled',
          1: '按钮失效状态',
          2: 'Boolean',
          3: 'true, false',
          4: 'false'
        }]
      }
    },
  }
</script>

<style>
</style>
