import Vue from 'vue';
import Col from '../packages/col';

const vm = new Vue({
  el: '#app',
  render: r => r(Col)
});
Vue.use({
  vm
});
