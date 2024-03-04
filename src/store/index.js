import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLanguage: 'ru'
  },
  mutations: {
    SET_LANGUAGE(state, language) {
      console.log('Mutation SET_LANGUAGE called with language:', language);
      state.currentLanguage = language;
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      console.log('Action setLanguage called with language:', language);
      commit('SET_LANGUAGE', language);
    }
  },
 
});
// import Vue from 'vue';
// import App from '../App.vue';


// Vue.config.productionTip = false;

// new Vue({
 
//   render: h => h(App),
// }).$mount('#app');