import Vue from 'vue';
import xlCol from '../packages/col';
import xlRow from '../packages/row';

const vm = new Vue({
  el: '#app',
  components: {
    xlRow,
    xlCol
  }
});
Vue.use({
  vm
});
