import { createRouter, createWebHashHistory } from 'vue-router';
import LayOut from '@/pages/layout.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: LayOut,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: ()=> import('@/pages/home.vue'),
          meta:  {
            tiele: '首页',
            icon: ''
          }
        },
        {
          path: '/other',
          name: 'other', 
          component: ()=> import('@/pages/other.vue'),
          meta: {
            title: 'other',
            icon: ''
          }
        }
      ]
    }, 
  ]
})

export default router