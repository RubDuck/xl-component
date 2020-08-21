const TouchMix = {
  methods: {
    bindTouchEvent (el) {
      const { onTouchStart, onTouchMove, onTouchEnd } = this;
      el.addEventListener('touchstart', onTouchStart);
      el.addEventListener('touchmove', onTouchMove);
      if (onTouchEnd) {
        el.addEventListener('touchend', onTouchEnd);
        el.addEventListener('touchcancel', onTouchEnd);
      }
    }
  }
};
export default TouchMix;
