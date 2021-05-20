<template>
  <a-spin v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </a-spin>
</template>

<script>
export default {
  name: 'vue-spin'
}
</script>
