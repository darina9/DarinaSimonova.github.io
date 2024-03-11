import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueI18n from 'vue-i18n';
import router from './router';


Vue.config.productionTip = false;

Vue.use(VueI18n);

const messages = {
  ru: require('./locales/ru.json'),
  en: require('./locales/en.json'),
  es: require('./locales/es.json')
};

const i18n = new VueI18n({
  locale: 'ru', // начальный язык
  fallbackLocale: 'ru', // язык по умолчанию
  messages
});


new Vue({
  i18n,
  store,
  router,

  render: h => h(App)
}).$mount('#app');
