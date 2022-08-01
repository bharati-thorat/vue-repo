import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from '../views/HomeComp.vue'
import AboutComp from '../views/AboutComp.vue'
import Employee from '../views/Employee.vue'
import Emp from '../views/Emp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComp
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutComp.vue')
  },
  {
    path:'/getAllEmployeeNames',
    name:'Employees',
    component:Employee
  },
  
  {
    path:'/emp/:id/:ename/:design',
    name:'Emp',
    component:Emp
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
