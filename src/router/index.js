import Vue from 'vue'
import Router from 'vue-router' 
import Filters from '@/components/Filters'
import useFilters from '@/components/useFilters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'useFilters',
      component: useFilters
    }
  ]
})
