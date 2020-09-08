<template>
    <div class="xl-picker">
        <div class="picker-columns" :style="pickStyle">
          <pickcolumn :columns='item' ref="pickercolumn" :visiblecount='visiblecount || 6' v-for="(item,index) in columns" :key="index"></pickcolumn>
          <div class="pick-mask"></div>
          <div class="picker-frame"></div>
        </div>
    </div>
</template>

<script>
import validate from '../utils/validate';
import pickcolumn from './pickcolumn';

export default {
  name: 'xlPicker',
  props: {
    columns: Array,
    visiblecount: [Number, String]
  },
  data () {
    return {
      itemHeight: ''
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
    }
    // pickFrameStyle () {
    //   let res;
    //   const num = validate.isNum(this.visiblecount) ? Number(this.visiblecount) : 6;
    //   if (num % 2 === 1) {
    //     res = 'transform: translateY(-50%)';
    //   }
    //   return res;
    // }
  },
  methods: {
  },
  mounted () {
    this.itemHeight = this.$refs.pickercolumn[0].getItemHeight();
  }
};
</script>

<style lang="less">
@import './style/picker.less';
</style>
