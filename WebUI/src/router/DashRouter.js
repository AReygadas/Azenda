
// Composables
// import { createRouter, createWebHistory } from 'vue-router/auto'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts} from 'virtual:generated-layouts'
import Home from '@/pages/Home.vue'
import NotFound from '@/pages/404.vue'
import Login from '@/pages/Login.vue'
import Contact from '@/pages/Contact.vue'
import Dash from '@/pages/Admin/Dash.vue'
const routes = [
  {
    // path:'/',
    // component:()=>import('@/layouts/default.vue'),
    // children: [
    //   {
    //     path:'',
    //     name:'Home',
    //     component:()=> import('@/pages/Home.vue'),
    //   },
    // ]
    
    path: '',
    component:Home,
    meta: {layout: 'default'},
   },
   {
    path: '/singin',
    component:Login,
    meta: {layout: 'blank'},
  },
  {
    path: '/contact',
    component:Contact,
    meta: {layout: 'default'},
  },
  {
    path: '/:catchAll(.*)',
    component:NotFound,
    meta: {layout: 'blank'},
  },
  {
    path: '/dash',
    component:Dash,
    meta: {layout: 'blank'},
  },
]
const dashrouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

export default dashrouter
