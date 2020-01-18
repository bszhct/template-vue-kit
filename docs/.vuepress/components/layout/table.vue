<template>
  <a-locale-provider :locale="locale">
    <div class="layout-table-wrap">
      <h3>{{title}}</h3>
      <a-table v-bind="$attrs" v-on="$listeners" :dataSource="getTableData" :columns="getTableColumns" className="api-table-main" :bordered="false" :pagination="false" />
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  name: 'layout-table',
  props: {
    title: {
      type: String,
      default: '属性'
    },
    tableData: Array,
    tableColumns: Array
  },
  data () {
    return {
      locale: zhCN
    }
  },
  computed: {
    getTableColumns() {
      return this.tableColumns.map((title, key) => ({key, width: `${1 / this.tableColumns.length}%`, title, dataIndex: key}))
    },
    getTableData() {
      return this.tableData.map((item, key) => ({key, ...item}))
    }
  }
}
</script>

<style lang="stylus">
.layout-table-wrap
  padding 40px 0
</style>
