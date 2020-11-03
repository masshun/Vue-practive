import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quiz: {
      numCorrect: 0,
      numTotal: 0,
    },
  },
  mutations: {
    addNumCorrect(state, value) {
      state.quiz.numCorrect += value;
    },
    addNumTotal(state, value) {
      state.quiz.numTotal += value;
    },
  },
  actions: {
    addNumCorrect({ commit }, value) {
      commit('addNumCorrect', value);
    },
    addNumTotal({ commit }, value) {
      commit('addNumTotal', value);
    },
  },
  getters: {
    getNumCorrect: (state) => state.quiz.numCorrect,
    getNumTotal: (state) => state.quiz.numTotal,
    getCorrectAnswerRate: (state) => parseFloat(state.quiz.numCorrect / state.quiz.numTotal) * 100,
  },
  modules: {
    auth,
  },
});
