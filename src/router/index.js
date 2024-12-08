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
        path: '/Giai-phap',
        name: 'Solution',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Solution.vue'),
      },
      {
        path: '/San-pham/:id',
        name: 'San-pham',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ListProduct.vue'),
      },
      {
        path: '/San-pham/:type/:id',
        name: 'DetailProduct',
        component: () => import(/* webpackChunkName: "home" */ '@/views/InfoProduct.vue'),
      },
      {
        path: '/Lien-he',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Contact.vue'),
      },
      {
        path: '/Dich-vu',
        name: 'Service',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Service.vue'),
      },
      {
        path: '/Gioi-thieu',
        name: 'Intro',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Intro.vue'),
      },
      {
        path: '/Gio-hang',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Cart.vue'),
      },
      {
        path: '/Admin',
        name: 'Admin',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Admin.vue'),
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
