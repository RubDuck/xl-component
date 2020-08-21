import Vue from 'vue';
import xlCol from '../packages/col';
import xlRow from '../packages/row';
import xlPullRefresh from '../packages/pullrefresh';
import '../packages/minx/style/common.less';

const vm = new Vue({
  el: '#app',
  data: {
    loading: false
  },
  components: {
    xlRow,
    xlCol,
    xlPullRefresh
  },
  methods: {
    onRefresh () {
    }
  }
});
Vue.use({
  vm
});
