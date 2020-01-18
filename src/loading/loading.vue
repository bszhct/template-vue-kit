<template>
  <div v-if="loading" class="vue-loading-wrap">
    玩命加载中...
  </div>
  <div v-else :class="className">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'vue-loading',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
.vue-loading-wrap
  width 100%
  height 100%
  min-height 50px
  max-height 100vh
  background-color rgba(255, 255, 255, 0.5)
  display flex
  align-items center
  justify-content center
  align-content center
  color #666666
</style>
