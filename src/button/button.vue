<template>
  <a-button v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </a-button>
</template>
<script>
export default {
  name: 'vue-button'
}
</script>
