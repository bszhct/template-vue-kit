<template>
  <div class="layout-table-wrap" ref="layoutTable">
    <h3>{{title}}</h3>
    <div v-if="description" class="description">
      {{description}}
    </div>
    <a-table rowKey="key" v-bind="$attrs" v-on="$listeners" :dataSource="records" :columns="recordColumns" :loading="loading" :pagination="false">
    </a-table>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'attr'
    },
    title: {
      type: String,
      default: '属性'
    },
    description: {
      type: String,
      default: ''
    },
    columns: {
      type: Array,
      default: () => []
    },
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  data () {
    const recordColumns = this.columns.map((title, dataIndex) => ({
      title,
      dataIndex
    }))
    const records = this.dataSource.map((item, key) => ({
      key,
      ...item
    }))
    return {
      recordColumns,
      records,
      loading: true
    }
  },
  mounted () {
    const rect = this.$refs.layoutTable.getBoundingClientRect()
    const width = `${rect.width / this.recordColumns.length}px`

    this.recordColumns = this.recordColumns.map(item => ({
      ...item,
      width
    }))
    this.loading = false
  }
}
</script>

<style lang="less">
.layout-table-wrap {
  width: 100%;
  padding: 30px 0;

  .description {
    color: #666666;
    padding-bottom: 16px;
  }
}
</style>
