import Vue from 'vue'
import VueRouter from 'vue-router'
import Reg from '../views/Reg.vue'
import Login from '../views/Login.vue'
import Update from '../views/Update.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/update/:ac_num',
    name: 'Update',
    component: Update
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
