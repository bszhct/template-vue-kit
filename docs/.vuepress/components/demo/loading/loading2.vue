<template>
  <div>
    <div class="content-main">
      <vue-loading :loading="loading">
        <div>这里面的内容在设置 loading 为 false 时展示</div>
      </vue-loading>
    </div>
    <!--
      这种方式最终会生成以下 DOM 结构, 如果在 content-main 元素上设置了 flex 布局, 就会收到影响
      使用这个组件强烈建议使用第一种方式
      <div class="content-main">
        <div>
          <div>这里面的内容在设置 loading 为 false 时展示</div>
        </div>
      </div>
     -->
    <div class="tac">
      <vue-button @click="loading = false">结束加载</vue-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-main
  height 100px
</style>
