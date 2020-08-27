<template>
  <div class="xl-pull-refresh" ref = 'pullRefresh'>
    <div class="xl-pull-refresh__track" ref = 'pullStrack' :style="pullStyle">
      <div class="pull-refresh_header" ref = 'pullHeaders'>{{pullText}}</div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import TouchMix from '../utils/dom/touch';
import getScroller from '../utils/dom/scroll';

export default {
  name: 'xlPullRefresh',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    loadtext: {
      type: String,
      default: '加载中...'
    }
  },
  data () {
    return {
      scrollEl: '',
      distance: 0,
      startTouchY: '',
      duration: 0,
      isloading: '',
      loosen: true,
      pullHeadeHeight: '',
      pullText: '',
      direction: ''
    };
  },
  mixins: [TouchMix],
  methods: {
    onTouchStart (e) {
      this.duration = 0;
      this.startTouchY = e.touches ? e.touches[0].pageY : e.clientY;
      this.touchStart(e);
    },
    onTouchMove (e) {
      if (!this.loosen) {
        return;
      }
      this.touchMove(e);
      const moveTouchY = e.touches ? e.touches[0].pageY : e.clientY;
      const scrollTop = this.scrollEl.scrollTop;
      const distance = moveTouchY - this.startTouchY;
      if (scrollTop === 0 && distance >= 0 && this.direction === 'vertical') {
        this.distance = this.smoothDistance(distance);
        return;
      }
      if (this.direction === 'vertical') {
        this.distance = 0;
        e.preventDefault();
      }
    },
    onTouchEnd () {
      /* eslint-disable-next-line */
      this.distance = this.distance >= this.pullHeadeHeight ? this.pullHeadeHeight : 0;
      this.duration = 300;
      this.setState(this.distance);
      this.$emit('input', true);
      this.$nextTick(() => {
        this.$emit('refresh');
      });
    },
    smoothDistance (val) {
      let distance;
      const height = this.pullHeadeHeight;
      switch (true) {
        case val > (height * 15):
          distance = height * 1.25 + (val - height * 1.25) / 3;
          break;
        case val > height:
          distance = height + (val - height) / 2;
          this.pullText = '释放刷新....';
          break;
        default:
          distance = val;
          this.pullText = '下拉刷新....';
          break;
      }
      return distance;
    },
    setState (val) {
      this.pullText = this.loadtext;
      if (val > 0) {
        this.loosen = false;
        return;
      }
      this.loosen = true;
    }
  },
  computed: {
    pullStyle () {
      const trackStyle = {
        transitionDuration: `${this.duration}ms`,
        transform: `translate3d(0,${this.distance}px, 0)`
      };
      return trackStyle;
    }
  },
  watch: {
    value (loading) {
      if (!loading) {
        this.loosen = true;
        this.distance = 0;
      }
    }
  },
  mounted () {
    this.scrollEl = getScroller(this.$refs.pullRefresh);
    this.pullHeadeHeight = parseFloat(window.getComputedStyle(this.$refs.pullHeaders).height) || 50;
    this.bindTouchEvent(this.$refs.pullRefresh);
  }
};
</script>

<style lang="less" src='./style/index.less'>
</style>
