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
      {
        path: '/Danh-sach-may-in-date',
        name: 'FilterMachine',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/FilterMachine.vue'),
      },
      {
        path: '/Danh-sach-may-in-thung',
        name: 'FilterTIJ',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/FilterTIJ.vue'),
      },
      {
        path: '/Danh-sach-may-khac-lazer',
        name: 'FilterLazer',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/FilterLazer.vue'),
      },
      {
        path: '/Danh-sach-nguyen-lieu',
        name: 'FilterInk',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/FilterInk.vue'),
      },
      {
        path: '/Lien-he',
        name: 'Contact',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/Contact.vue'),
      },
      {
        path: '/Thue-may',
        name: 'Service',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/Service.vue'),
      },
      {
        path: '/Gioi-thieu',
        name: 'Intro',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/Intro.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
