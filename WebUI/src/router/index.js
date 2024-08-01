
// Composables
// import { createRouter, createWebHistory } from 'vue-router/auto'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts} from 'virtual:generated-layouts'
import { useJwt } from '@/Helpers/useJWT'
import Home from '@/pages/Home.vue'
import NotFound from '@/pages/404.vue'
import Login from '@/pages/Login.vue'
import Contact from '@/pages/Contact.vue'
import Dash from '@/pages/Admin/Dash.vue'
import Users from '@/pages/Admin/Users.vue'
import Properties from '@/pages/Admin/Properties.vue'

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
    meta: {layout: 'dash',requiresAuth: true},
  },
  {
    path: '/dash/users',
    component:Users,
    meta: {layout: 'dash',requiresAuth: true},
  },
  {
    path: '/dash/properties',
    component:Properties,
    meta: {layout: 'dash', requiresAuth: true},
    

  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

 router.beforeEach((to, from, next) => {
  const { setToken, isAuthenticated} = useJwt();
   if (to.matched.some(record => record.meta.requiresAuth)) {
     // Esta ruta requiere autenticación
     if   
  (!isAuthenticated) {
       // Redirigir al usuario a la página de inicio de sesión
       next({ name: 'Login' });
     } else {
       next();
     }
   } else {
     next();
   }
 });

export default router
