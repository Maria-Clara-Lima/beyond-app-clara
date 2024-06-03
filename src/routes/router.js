import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Dashboard from '../components/Dashboard.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    //   meta: { requiresAuth: true }
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   const loggedIn = localStorage.getItem('loggedIn');
//   if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
//     next('/');
//   } else {
//     next();
//   }
// });

export default router;
