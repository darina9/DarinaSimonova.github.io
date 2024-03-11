import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLanguage: 'ru' // Текущий язык
  },
  mutations: {
    // Мутация для установки текущего языка
    SET_LANGUAGE(state, language) {
      console.log('Mutation SET_LANGUAGE called with language:', language);
      state.currentLanguage = language;// Устанавливаем текущий язык
    }
  },
  actions: {
    // Действие для установки языка
    setLanguage({ commit }, language) {
      console.log('Action setLanguage called with language:', language);
      commit('SET_LANGUAGE', language);// Вызываем мутацию для установки языка
    }
  }

});
