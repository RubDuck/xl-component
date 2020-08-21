import Vue from 'vue';
import xlPullRefresh from '../packages/pullrefresh';
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
  })