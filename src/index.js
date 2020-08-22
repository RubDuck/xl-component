import Vue from 'vue';
import xlCol from '../packages/col';
import xlRow from '../packages/row';
import xlPullRefresh from '../packages/pullrefresh';
import xlTabbar from '../packages/tabbar';
import '../packages/minx/style/common.less';

const vm = new Vue({
  el: '#app',
  data: {
    loading: false,
    nav: ['授权管理', '权限管理', '权限转移']
  },
  components: {
    xlRow,
    xlCol,
    xlPullRefresh,
    xlTabbar
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
