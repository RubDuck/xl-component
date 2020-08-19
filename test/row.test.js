import Vue from 'vue';
import xlRow from '../packages/row';
const expect = chai.expect;

describe('Props', () => {
  let vm;
  const Constructor = Vue.extend(xlRow);
  afterEach(() => {
    vm.$destroy()
  })
   it('接收 justify', () => {
      vm = new Constructor({
        propsData: {
          justify: 'center'
        }
      }).$mount()
      const rowElement = vm.$el;
      expect(rowElement.classList.contains('xl-row-justify-center')).to.equal(true)
    }),
    it('接收 align', () => {
      vm = new Constructor({
        propsData: {
          align: 'top'
        }
      }).$mount()
      const rowElement = vm.$el;
      expect(rowElement.classList.contains('xl-row-align-top')).to.equal(true)
    })
  })

