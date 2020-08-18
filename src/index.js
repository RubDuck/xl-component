import Vue from 'vue';
// import Col from '../packages/col';
import Row from '../packages/row';

const vm = new Vue({
  el: '#app',
  render: r => r(Row)
});
Vue.use({
  vm
});
