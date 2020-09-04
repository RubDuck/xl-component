import Vue from 'vue';
import xlPullRefresh from '../packages/pullrefresh';
import trigger from '../packages/utils/event';
const expect = chai.expect;

describe('Props', () => {
  let vm;
  const Constructor = Vue.extend(xlPullRefresh);
  afterEach(() => {
    vm.$destroy()
  })
   it('接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: false
        }
      }).$mount()
      const pullElement = vm.$refs.pullStrack;
      expect(pullElement.style.transform === 'translate3d(0px, 0px, 0px)').to.equal(true)
    })
    it('pull losen event', () => {
      vm = new Constructor({
        propsData: {
          loadtext: 'one tap'
        }
      }).$mount()
      // 下拉阶段一
      const pullElement = vm.$refs.pullRefresh;
      trigger(pullElement, 'touchstart', 0, 0);
      trigger(pullElement, 'touchmove', 0, 50);
      expect(vm.$data.pullText === '下拉刷新....').to.equal(true);
      // 下拉阶段二
      trigger(pullElement, 'touchstart', 0, 0);
      trigger(pullElement, 'touchmove', 0, 60);
      expect(vm.$data.pullText === '释放刷新....').to.equal(true);
      // 释放一
      trigger(pullElement, 'touchstart', 0, 0);
      trigger(pullElement, 'touchmove', 0, 60);
      trigger(pullElement, 'touchend', 0, 60);
      expect(vm.$data.pullText === 'one tap').to.equal(true);
    })
  })