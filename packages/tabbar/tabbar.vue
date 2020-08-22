<template>
  <div class="xl-tabbar" ref='tabbar'>
    <div :class="{'xl-bar_item': true, 'xl_active': index === currentIndex}" :style="barStyle(index)" v-for="(item, index) in navbar" :key="index" @click="changeNav(index)">
      {{item}}
    </div>
    <div class="xl-bar_line" :style="lineStyle"></div>
  </div>
</template>

<script>
import validate from '../utils/validate';

export default {
  name: 'xlTabbar',
  props: {
    navbar: Array,
    titlecolor: String,
    linecolor: {
      type: String,
      default: 'red'
    },
    index: {
      type: [Number, String],
      default: 0
    },
    duration: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      deviceWidth: '',
      induration: 0,
      currentIndex: ''
    };
  },
  computed: {
    lineStyle () {
      const len = this.navbar.length;
      if (len === 0) {
        return;
      }
      const size = `${((this.currentIndex + 1) / len) * this.deviceWidth - (this.deviceWidth) / (len * 2)}px`;
      const lineStyle = {
        transitionDuration: `${this.induration}ms`,
        transform: `translateX(${size})translateX(-50%)`,
        background: this.linecolor
      };
      return lineStyle;
    }
  },
  methods: {
    changeNav (index) {
      this.currentIndex = index;
      this.induration = this.duration;
      this.$emit('click');
    },
    barStyle (index) {
      if (index === this.currentIndex) {
        const res = `color: ${this.titlecolor}`;
        return res;
      }
      return '';
    },
    dealIndex (val) {
      if (validate.isNum(val)) {
        const res = Math.floor(parseFloat(val));
        return res;
      }
      return 0;
    }
  },
  mounted () {
    this.deviceWidth = this.$refs.tabbar.clientWidth;
    this.currentIndex = this.dealIndex(this.index);
  }
};

</script>

<style lang="less" src='./style/index.less'>

</style>
