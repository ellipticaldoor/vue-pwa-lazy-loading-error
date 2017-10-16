import Vue from 'vue'
import Router from 'vue-router'

const Hello = () => import('@/components/Hello')
const Hello2 = () => import('@/components/Hello2')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello2',
      name: 'Hello2',
      component: Hello2
    }
  ]
})
