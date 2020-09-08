<template>
  <div class="picker-column"  ref='pickColumn'>
    <ul class="picker-column_main" :style="pickColumnStyle" ref='columnMain'>
      <li class="picker-column__message" ref="messageColumn" v-for="(item, index) in columns" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import TouchMix from '../utils/dom/touch';

export default {
  name: 'xlPickerColumn',
  props: {
    columns: Array,
    visiblecount: {
      type: [Number, String],
      default: 6
    }
  },
  data () {
    return {
      itemHeight: '',
      direction: '',
      maxDistance: '',
      startY: '',
      touchY: '',
      startTime: '',
      distance: '',
      duration: 0,
      endDistance: 0,
      limitTime: 300,
      limitDistance: 15,
      momentum: '',
      halfNum: ''
    };
  },
  mixins: [TouchMix],
  computed: {
    pickColumnStyle () {
      const res = `transform: translateY(${this.distance}px);transition-duration:${this.duration}s`;
      return res;
    }
  },
  methods: {
    getItemHeight () {
      return this.itemHeight;
    },
    onTouchStart (e) {
      const start = e.touches ? e.touches[0].pageY : e.clientY;
      this.touchStart(e);
      this.duration = 0;
      this.startTime = Date.now();
      this.startY = start;
      this.momentum = this.endDistance;
    },
    onTouchMove (e) {
      this.touchMove(e);
      if (this.direction === 'vertical') {
        const moveY = e.touches ? e.touches[0].pageY : e.clientY;
        this.touchY = moveY - this.startY;
        const distance = this.endDistance + (moveY - this.startY);
        const maxDistances = distance > 0 ? this.maxDistanceDown : this.maxDistanceUp;
        const now = Date.now();
        this.distance = distance;
        if (Math.abs(distance) >= Math.abs(maxDistances)) {
          this.distance = maxDistances;
        }
        if (now - this.startTime > this.limitTime) {
          this.startTime = now;
          this.momentum = this.distance;
        }
        e.preventDefault();
      }
    },
    onTouchEnd () {
      const endTime = Date.now();
      const inertia = endTime - this.startTime;
      const distance = this.distance - this.momentum;
      if (inertia < this.limitTime && Math.abs(distance) > this.limitDistance) {
        this.onMomentum(distance, inertia);
        return;
      }
      this.duration = 0.3;
      this.dealDistance(this.distance);
    },
    onMomentum (distance, time) {
      let distances;
      const speed = Math.abs(distance / time);
      const maxDistances = distance > 0 ? this.maxDistanceDown : this.maxDistanceUp;
      distances = this.distance + (speed / 0.006) * (distance < 0 ? -1 : 1);
      if (Math.abs(distances) > Math.abs(maxDistances)) {
        distances = maxDistances;
      }
      this.duration = 0.6;
      this.dealDistance(distances);
    },
    dealDistance (val) {
      let distances;
      const num = val > 0 ? parseInt(val / this.itemHeight) : parseInt(val / this.itemHeight);
      const maxDistance = val > 0 ? this.maxDistanceDown : this.maxDistanceUp;
      distances = num * this.itemHeight;
      if (Math.abs(distances) >= Math.abs(maxDistance)) {
        distances = val > 0 ? maxDistance - this.itemHeight : maxDistance + this.itemHeight;
      }
      const res = distances + this.halfNum * this.itemHeight * (val > 0 ? 1 : -1);
      this.distance = res;
      this.endDistance = res;
    },
    originData () {
      const len = Math.max(this.columns.length, this.visiblecount);
      const num = len % 2 === 0 ? Math.ceil(len / 2) - 0.5 : Math.ceil(len / 2);
      this.halfNum = len % 2 === 0 ? -0.5 : 0;
      this.itemHeight = this.$refs.messageColumn[0].offsetHeight;
      this.maxDistanceDown = this.itemHeight * (parseInt(this.visiblecount / 2) + 1 + this.halfNum);
      this.maxDistanceUp = this.itemHeight * (parseInt(this.visiblecount / 2) + this.halfNum) - this.$refs.columnMain.offsetHeight;
      this.distance = (this.visiblecount / 2 - num) * this.itemHeight;
      this.endDistance = (this.visiblecount / 2 - num) * this.itemHeight;
    }
  },
  mounted () {
    this.originData();
    this.bindTouchEvent(this.$refs.pickColumn);
  }
};
</script>
