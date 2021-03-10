import Vue from 'vue'
import VueRouter from 'vue-router'
import AccordionList from '@/components/accordion-list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'add',
    component: () => import('../views/UserCreate')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/UserList')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/UserEdit')
  },
  {
    path: '/accordion-list',
    name: 'accordion-list',
    component: AccordionList
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router