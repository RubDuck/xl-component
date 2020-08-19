<template>
  <div :class="colClass" :style="{'padding-right': gutter + 'px'}">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'xlCol',
  props: {
    span: Number,
    offset: Number
  },
  computed: {
    gutter () {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'xlRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    colClass () {
      const span = this.createClass(this.span, 'xl-col-span-');
      const offset = this.createClass(this.offset, 'xl-col-offset-');
      const res = ['xl-col', span, offset];
      return res;
    }
  },
  methods: {
    createClass (name, type) {
      if (name) {
        const val = parseFloat(name) >= 24 ? 24 : parseFloat(name);
        const res = `${type}${val}`;
        return res;
      }
      return '';
    }
  }
};
</script>

<style lang="less" src='./style/index.less'>

</style>
