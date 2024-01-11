// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/San-pham',
        name: 'ListProduct',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/AllList.vue'),
      },
      {
        path: '/Thong-tin-san-pham',
        name: 'InfoProduct',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/InfoProduct.vue'),
      },
      {
        path: '/Giai-phap',
        name: 'Solution',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/Solution.vue'),
      },
      {
        path: '/Danh-sach-linh-kien',
        name: 'FilterAccessory',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/FilterAccessory.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
