// import Vue from 'vue';
// import xlSwitch from '../packages/switch';
// const expect = chai.expect;

// describe('Props', () => {
//   let vm;
//   const Constructor = Vue.extend(xlSwitch);
//   afterEach(() => {
//     vm.$destroy()
//   })
//    it('size', () => {
//       vm = new Constructor({
//         propsData: {
//           size: 12
//         }
//       }).$mount()
//       const rowElement = vm.$el;
//       expect(rowElement.style.fontSize === '12px').to.equal(true)
//     }),
//     it('value', () => {
//       vm = new Constructor({
//         propsData: {
//           value: true
//         }
//       }).$mount()
//       const colElement = vm.$el;

//       expect(colElement.classList.contains('is-checked')).to.equal(true)
//     }),
//     it('isactive', () => {
//       vm = new Constructor({
//         propsData: {
//           isactive: 'red'
//         }
//       }).$mount()
//       const rowElement = vm.$el;
//       expect(rowElement.style.backgroundColor === 'red').to.equal(true)
//     }),
//     it('noactive', () => {
//       vm = new Constructor({
//         propsData: {
//           noactive: 'red'
//         }
//       }).$mount()
//       const rowElement = vm.$el;
//       expect(rowElement.style.backgroundColor === 'red').to.equal(true)
//     }),
//     it('disable', () => {
//       vm = new Constructor({
//         propsData: {
//           disable: true
//         }
//       }).$mount()
//       const rowElement = vm.$el;
//       expect(rowElement.style.cursor === 'not-allowed').to.equal(true)
//     })
//   })