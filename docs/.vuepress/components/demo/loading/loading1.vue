<template>
  <div style="height: 150px">
    <vue-loading :loading="loading" className="content-main">
      <div>
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
      </div>
    </vue-loading>
    <div class="action-main">
      <vue-button @click="loading = true">点击开始加载</vue-button>
      <vue-button @click="loading = false">点击结束加载</vue-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-main
  height 100px
.action-main
  text-align center
</style>
