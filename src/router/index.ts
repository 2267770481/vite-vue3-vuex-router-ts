import { createRouter, createWebHashHistory } from 'vue-router';
import LayOut from '@/pages/layout.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('@/components/404.vue')
    },
    {
      path: '/charts',
      name: 'charts',
      component: ()=> import('@/components/charts/chart-constainer.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: ()=> import('@/pages/home.vue'),
      children: [
        {
          path: '/a',
          name: 'a',
          component: ()=> import('@/pages/a-page.vue'),
          meta:  {
            tiele: 'a页面',
            icon: ''
          }
        },
        {
          path: '/b',
          name: 'b',
          component: ()=> import('@/pages/b-page.vue'),
          meta:  {
            tiele: 'b页面',
            icon: ''
          }
        }
      ]
    }
  ]
})

export default router