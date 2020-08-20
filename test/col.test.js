import Vue from 'vue';
import xlCol from '../packages/col';
const expect = chai.expect;

describe('Props', () => {
  let vm;
  const Constructor = Vue.extend(xlCol);
  afterEach(() => {
    vm.$destroy()
  })
   it('接收 span', () => {
      vm = new Constructor({
        propsData: {
          span: 12
        }
      }).$mount()
      const colElement = vm.$el;
      expect(colElement.classList.contains('xl-col-span-12')).to.equal(true)
    }),
    it('offset', () => {
      vm = new Constructor({
        propsData: {
          offset: 12
        }
      }).$mount()
      const colElement = vm.$el;
      expect(colElement.classList.contains('xl-col-offset-12')).to.equal(true)
    }),
    it('接收 color', () => {
      vm = new Constructor({
        propsData: {
          color: '#fff'
        }
      }).$mount()
      const rowElement = vm.$el;
      expect(rowElement.style.backgroundColor === 'rgb(255, 255, 255)').to.equal(true)
    })
  })