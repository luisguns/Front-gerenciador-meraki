import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Statistic from './views/Statistic.vue';
import Gerencial from './views/Gerencial.vue';
import Form from './components/FormularioTabelaMensal.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/estatistica',
      name: 'estatistica',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Statistic,
    },
    {
      path: '/gerencial',
      name: 'gerencial',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Gerencial,
    },
    {
      path: '/despesa',
      name: 'form',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Form,
    },
  ],
});
