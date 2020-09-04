<template>
    <div class="xl-picker">
        <div class="picker-columns" :style="pickStyle">
          <pickcolumn :columns='columns' ref="pickercolumn"></pickcolumn>
          <div class="picker-frame" :style="pickFrameStyle"></div>
        </div>
    </div>
</template>

<script>
import validate from '../utils/validate';
// import TouchMix from '../utils/dom/touch';
import pickcolumn from './pickcolumn';

export default {
  name: 'xlPicker',
  props: {
    columns: Array,
    visiblecount: [Number, String]
  },
  data () {
    return {
      itemHeight: '',
      list: [1, 2]
    };
  },
  components: {
    pickcolumn
  },
  computed: {
    pickStyle () {
      const num = validate.isNum(this.visiblecount) ? Number(this.visiblecount) : 6;
      const height = this.itemHeight * num;
      return `height: ${height}px`;
    },
    pickFrameStyle () {
      let res;
      const num = validate.isNum(this.visiblecount) ? Number(this.visiblecount) : 6;
      if (num % 2 === 1) {
        res = 'transform: translateY(-50%)';
      }
      return res;
    }
  },
  methods: {
  },
  mounted () {
    this.itemHeight = this.$refs.pickercolumn.getItemHeight();
    console.log(this.itemHeight);
  }
};
</script>

<style lang="less">
@import './style/picker.less';
</style>
