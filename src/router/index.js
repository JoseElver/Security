import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Crear from '@/views/UserCreate.vue'
import Lista from '@/views/UserList.vue'
import Editar from '@/views/UserEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'add',
    component: Crear
  },
  {
    path: '/list',
    name: 'list',
    component: Lista
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Editar
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router