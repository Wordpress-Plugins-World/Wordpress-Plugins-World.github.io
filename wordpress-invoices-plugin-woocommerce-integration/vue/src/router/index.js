import { createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/DemoView.vue')
    },
    // {
    //   path: '/:slug',
    //   name: 'Error404',
    //   component: () => import('../views/Error404.vue')
    // }
  ]
})

export default router
