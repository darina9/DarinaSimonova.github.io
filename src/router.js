import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from './view/MainPage.vue';
import NotFound from './view/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    // Маршрут для главной страницы 
    path: '/',
    name: 'MainPage',
    component: MainPage
  },

  {
    // Маршрут для страницы 404
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
