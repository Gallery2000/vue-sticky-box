import Vue from 'vue'
import Router from 'vue-router'
import TestY from '@/pages/testY'
import TestX from '@/pages/testX'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/testY',
      name: 'testY',
      component: TestY
    }, {
      path: '/testX',
      name: 'testX',
      component: TestX
    }
  ]
})
