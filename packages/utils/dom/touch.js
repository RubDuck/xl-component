const MIN_DISTANCE = 10;

function direction (x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}

const TouchMix = {
  methods: {
    touchStart (e) {
      this.resetTouchStatus();
      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
    },
    touchMove (e) {
      this.deltaX = e.touches[0].clientX - this.startX;
      this.deltaY = e.touches[0].clientY - this.startY;
      this.direction = direction(this.deltaX, this.deltaY);
    },
    resetTouchStatus () {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    },
    bindTouchEvent (el) {
      const { onTouchStart, onTouchMove, onTouchEnd } = this;
      el.addEventListener('touchstart', onTouchStart);
      el.addEventListener('touchmove', onTouchMove);
      console.log(el);
      if (onTouchEnd) {
        el.addEventListener('touchend', onTouchEnd);
        el.addEventListener('touchcancel', onTouchEnd);
      }
    }
  }
};
export default TouchMix;
