import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Crear from '@/views/UserCreate.vue'
import Lista from '@/views/UserList.vue'
import Home from '@/views/Home.vue'
import Editar from '@/views/UserEdit.vue'
import EditarPerfil from '@/views/editarPerfil.vue'
import 'firebase/app';
import 'firebase/auth';

Vue.use(VueRouter)

const routes = [
  {
    path: '/crear',
    name: 'crear',
    component: Crear
  },
  {
    path: '/list',
    name: 'list',
    component: Lista
  },
  {
    path: '/editarPerfil',
    name: 'editarPerfil',
    component: EditarPerfil
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
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/**router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  if(requiresAuth) {
    firebase.auth().onAuthStateChanged( (user) => {
      if (!user) next('/')
      else next();
    })
  } else next()
});*/

export default router