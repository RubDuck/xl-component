<template>
  <div :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xlRow',
  props: {
    gutter: Number,
    align: String,
    justify: String
  },
  computed: {
    rowClass () {
      const align = this.createClass(this.align, 'xl-row-align-');
      const justify = this.createClass(this.justify, 'xl-row-justify-');
      const result = ['xl-row', align, justify];
      return result;
    }
  },
  methods: {
    createClass (name, type) {
      if (name) {
        const result = `${type}${name}`;
        return result;
      }
      return '';
    }
  }
};
</script>

<style lang="less" src='./style/index.less'>
</style>
