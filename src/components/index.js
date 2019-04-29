import myfilter from './Filters.vue'
const filters = {
  install: function (Vue) {
    Vue.component('filters', myfilter)
  }
}

// 导出组件
export default filters