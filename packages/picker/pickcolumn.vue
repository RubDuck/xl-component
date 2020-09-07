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
    visiblecount: [Number, String]
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
      endDistance: '',
      limitTime: 300,
      limitDistance: 15
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
      this.touchStart(e);
      this.duration = 0;
      this.startTime = new Date();
      this.startY = e.touches ? e.touches[0].pageY : e.clientY;
    },
    onTouchMove (e) {
      this.touchMove(e);
      if (this.direction === 'vertical') {
        const moveY = e.touches ? e.touches[0].pageY : e.clientY;
        this.touchY = moveY - this.startY;
        const distance = this.endDistance + (moveY - this.startY);
        const maxDistances = distance > 0 ? this.maxDistanceDown : this.maxDistanceUp;
        const now = new Date();
        if (now - this.startTime > this.limitTime) {
          this.startTime = now;
        }
        if (Math.abs(distance) >= Math.abs(maxDistances)) {
          this.distance = maxDistances;
          return;
        }
        this.distance = distance;
        e.preventDefault();
      }
    },
    onTouchEnd () {
      let distances;
      const endTime = new Date();
      const inertia = (endTime - this.startTime) < this.limitTime;
      if (inertia) {
        console.log(1);
      }
      const num = this.distance > 0 ? Math.ceil(this.distance / this.itemHeight) : Math.floor(this.distance / this.itemHeight);
      const maxDistance = this.distance > 0 ? this.maxDistanceDown : this.maxDistanceUp;
      distances = num * this.itemHeight;
      if (Math.abs(this.distance) === Math.abs(maxDistance)) {
        distances = this.distance > 0 ? this.distance - this.itemHeight : this.distance + this.itemHeight;
      }
      this.distance = distances;
      this.endDistance = distances;
      this.duration = 0.3;
    }
  },
  mounted () {
    this.itemHeight = this.$refs.messageColumn[0].offsetHeight;
    this.maxDistanceDown = this.itemHeight * (this.visiblecount / 2 + 1);
    this.maxDistanceUp = this.itemHeight * (this.visiblecount / 2) - this.$refs.columnMain.offsetHeight;
    this.bindTouchEvent(this.$refs.pickColumn);
  }
};
</script>
