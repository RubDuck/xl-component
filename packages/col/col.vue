<template>
  <div :class="classs">这是Col组件</div>
</template>
<script>

export default {
  name: 'xlCol',
  props: {
    span: Number,
    offset: Number
  },
  computed: {
    classs () {
      return `xl-col-${this.span}-${this.offset}`;
    }
  }
};
</script>

<style lang="less" scoped>

</style>
