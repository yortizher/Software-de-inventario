import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    // {
    //   path: '/signin',
    //   name: 'signin',
    //   component: () => import('../components/Login/Registrarse.vue')
    // },
    {
      path: '/home',
      name: 'home',
      component: () => import("../views/HomeView.vue"),
      meta: {
        bandera: true
      },
      children:[
        {
          path: '/gestion',
          name: 'gestion',
          meta: {
            bandera: false
          },
          component: () => import("../views/GestionView.vue"),
        },
        {
          path: '/digital',
          name: 'digital',
          meta: {
            bandera: false
          },
          component: () => import("../views/DigitalView.vue"),
        },
        {
          path: '/fisico',
          name: 'fisico',
          meta: {
            bandera: false
          },
          component: () => import("../views/FisicoView.vue"),
        },
        {
          path: '/estatus',
          name: 'estatus',
          meta: {
            bandera: false
          },
          component: () => import("../views/EstatusView.vue"),
        },
        {
          path: '/estadisticas',
          name: 'estadisticas',
          meta: {
            bandera: false
          },
          component: () => import("../views/EstadisticasView.vue"),
        },
        {
          path: '/requerimientos',
          name: 'requerimientos',
          meta: {
            bandera: false
          },
          component: () => import("../views/RequerimientosView.vue"),
        },
      ]
    }
  ]
})

export default router
