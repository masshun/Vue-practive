import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from '../pages/Top.vue';
import Calc from '../pages/Calculator.vue';
import Weather from '../pages/Weather.vue';
import Question from '../pages/QuestionTop.vue';
import DataList from '../pages/DataList.vue';
import Calendar from '../pages/Calendar.vue';
import CustomContent from '../pages/CustomContent.vue';
import Comments from '../pages/Comments.vue';
import Register from '../pages/auth/Register.vue';
import Login from '../pages/auth/Login.vue';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top,
  },
  {
    path: '/calc',
    name: 'Calc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Calc,
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather,
  },
  {
    path: '/question',
    name: 'Question',
    component: Question,
  },
  {
    path: '/datalist',
    name: 'DataList',
    component: DataList,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/customcontent',
    name: 'CustomContent',
    component: CustomContent,
  },
  {
    path: '/comments',
    name: 'Comments',
    component: Comments,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next('/');
      } else {
        next();
      }
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      if (store.getters.idToken) {
        next('/');
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
