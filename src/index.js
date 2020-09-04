import Vue from 'vue';
import xlCol from '../packages/col';
import xlRow from '../packages/row';
import xlPullRefresh from '../packages/pullrefresh';
import xlTabbar from '../packages/tabbar';
import xlSwitch from '../packages/switch';
import xlPicker from '../packages/picker';
import '../packages/minx/style/common.less';

const vm = new Vue({
  el: '#app',
  data: {
    loading: false,
    nav: ['授权管理', '权限管理', '权限转移'],
    columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  components: {
    xlRow,
    xlCol,
    xlPullRefresh,
    xlTabbar,
    xlSwitch,
    xlPicker
  },
  methods: {
    onRefresh () {
    },
    test () {
      console.log('正在切换');
    }
  }
});
Vue.use({
  vm
});
