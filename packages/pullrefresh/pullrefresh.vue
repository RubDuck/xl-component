<template>
  <div class="xl-pull-refresh">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: 'xlPullRefresh',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    pullText: {
      type: String,
      default: '加载中...'
    }
  }
}
</script>

<style lang="less" src='./style/index.less'>
</style>
