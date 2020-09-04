import Vue from 'vue';
import xlSwitch from '../packages/switch';
const expect = chai.expect;

describe('Props', () => {
  let vm;
  const Constructor = Vue.extend(xlSwitch);
  afterEach(() => {
    vm.$destroy()
  })
   it('size', () => {
      vm = new Constructor({
        propsData: {
          size: 12
        }
      }).$mount()
      const rowElement = vm.$el;
      expect(rowElement.style.fontSize === '12px').to.equal(true)
    }),
    it('value isactive noactive', () => {
      vm = new Constructor({
        propsData: {
          value: true,
          isactive: 'red',
          noactive: 'blue',
        }
      }).$mount()
      const colElement = vm.$el;
      expect(colElement.classList.contains('is-checked')).to.equal(true)
      expect(colElement.style.backgroundColor === 'red').to.equal(true)
    })
  })