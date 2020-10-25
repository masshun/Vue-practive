// 本来はアプリケーション全体で用いるデータをstateで管理すべきだが、今回は練習のため割愛
const state = {
  numCorrect: 0,
  numTotal: 0,
};

// 算出プロパティ
const getters = {
  getNumCorrect: (state) => state.quiz.numCorrect,
  getNumTotal: (state) => state.quiz.numTotal,
  getCorrectAnswerRate: (state) => parseFloat(state.quiz.numCorrect / state.quiz.numTotal) * 100,
};

const mutations = {
  addNumCorrect(state, value) {
    state.quiz.numCorrect += value;
  },
  addNumTotal(state, value) {
    state.quiz.numTotal += value;
  },
};

// 非同期専門(axiosなど)で用いるか、mutationsの呼び出しは全て運用対象にするかはプロジェクト次第
const actions = {
  addNumCorrect({ commit }, value) {
    commit('addNumCorrect', value);
  },
  addNumTotal({ commit }, value) {
    commit('addNumTotal', value);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
