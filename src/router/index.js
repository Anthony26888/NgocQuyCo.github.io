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
      }
    ],
  },
  {
    path: '/Admin',
    component: () => import('@/layouts/admin/Default.vue'),
    children: [
      {
        path: '',
        name: 'EditCompany',
        component: () => import(/* webpackChunkName: "home" */ '@/components/Admin-Info.vue'),
      },
      {
        path: '/Admin/Danh-sach-san-pham',
        name: 'Danh sách sản phẩm',
        component: () => import(/* webpackChunkName: "home" */ '@/components/Admin-Product.vue'),
      },
      {
        path: '/Admin/Danh-sach-san-pham/Tao-san-pham-moi',
        name: 'Tạo mới sản phẩm',
        component: () => import(/* webpackChunkName: "home" */ '@/components/Admin-FormNewProduct.vue'),
      },
      {
        path: '/Admin/Danh-sach-san-pham/Chinh-sua-san-pham/:id',
        name: 'Chỉnh sửa sản phẩm',
        component: () => import(/* webpackChunkName: "home" */ '@/components/Admin-FormEditProduct.vue'),
      },
      {
        path: '/Admin/Danh-sach-Banner',
        name: 'Danh sách Banner',
        component: () => import(/* webpackChunkName: "home" */ '@/components/Admin-Banner.vue'),
      },
      {
        path: '/Admin/Danh-sach-Banner/Chinh-sua-Banner/:id',
        name: 'Chỉnh sửa Banner',
        component: () => import(/* webpackChunkName: "home" */ '@/components/Admin-FormEditBanner.vue'),
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
