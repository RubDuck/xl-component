<template>
  <div :class="{'xl-switch':true, 'is-checked':value, 'disable': disable}" :style="switchStyle" @click="changeState" disabled>
    <div class="switch_node"></div>
  </div>
</template>

<script>
import validate from '../utils/validate';

export default {
  name: 'xlSwitch',
  props: {
    size: {
      type: [Number, String],
      default: 30
    },
    value: {
      type: Boolean,
      default: false
    },
    isactive: String,
    noactive: String,
    disable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    switchStyle () {
      const size = validate.isNum(this.size) ? Number(this.size) : '';
      const color = this.value ? this.isactive || '' : this.noactive || '';
      const res = `font-size: ${size}px;background:${color};`;
      return res;
    }
  },
  methods: {
    changeState () {
      if (this.disable) {
        return;
      }
      this.$emit('input', !this.value);
      this.$emit('change', this.value);
    }
  }
};
</script>

<style lang="less">
@import './style/index.less';
</style>
