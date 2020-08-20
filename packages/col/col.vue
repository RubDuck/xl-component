<template>
  <div :class="colClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'xlCol',
  props: {
    span: [Number, String],
    offset: [Number, String],
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    colClass () {
      const span = this.createClass(this.span, 'xl-col-span-');
      const offset = this.createClass(this.offset, 'xl-col-offset-');
      const res = ['xl-col', span, offset];
      return res;
    },
    rowStyle () {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'xlRow') {
        parent = parent.$parent;
      }
      const gutter = parent ? parent.gutter : 0;
      const result = `background-color:${this.color};padding-right:${gutter}px'`;
      return result;
    }
  },
  methods: {
    createClass (name, type) {
      if (name) {
        const val = this.toNumber(name) >= 24 ? 24 : this.toNumber(name);
        const res = `${type}${val}`;
        return res;
      }
      return '';
    },
    isNum (val) {
      const res = Number(val);
      if (Number.isNaN(res)) {
        return false;
      }
      return true;
    },
    toNumber (val) {
      const res = this.isNum(val) ? Number(val) : val;
      return res;
    }
  }
};
</script>

<style lang="less" src='./style/index.less'>

</style>
