import outside from '../../helper/key';
import axios from '../../axios/axios-auth';
import router from '../../router/index';
import axiosRefresh from '../../axios/axios-refresh';

const state = {
  idToken: null,
};

const getters = {
  idToken: (state) => state.idToken,
};

const mutations = {
  updateIdToken(state, idToken) {
    state.idToken = idToken;
  },
};

// 非同期専門(axiosなど)で用いるか、mutationsの呼び出しは全て運用対象にするかはプロジェクト次第
// 基本的にユーザ情報など重要なものはlocalstrageを使わない
const actions = {
  /**
   * main.jsにて定義済み
   * 認証トークンの有無確認
   * 認証トークンが有効期限切れ（firebase:1時間）かどうか判断する。
   * 期限切れの場合、リフレッシュする。
   * そうでないなら、期限切れ日時になったら自動リフレッシュする。
   */
  async autoLogin({ commit, dispatch }) {
    const idToken = localStorage.getItem('idToken');
    if (!idToken) {
      return;
    }
    const now = new Date();
    const expiryTimeMs = localStorage.getItem('expiryTimeMs');
    const isExpired = expiryTimeMs <= now.getTime();
    const refreshToken = localStorage.getItem('refreshToken');
    if (isExpired) {
      await dispatch('refreshIdToken', refreshToken);
    } else {
      const expiresInMs = expiryTimeMs - now.getTime();
      setTimeout(() => {
        dispatch('refreshIdToken', refreshToken);
      }, expiresInMs);
      commit('updateIdToken', idToken);
    }
  },

  login({ dispatch }, authData) {
    const key = outside.getFirebaseKey().apiKey;

    axios
      .post(`/accounts:signInWithPassword?key=${key}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      })
      .then((response) => {
        dispatch('setAuthData', {
          idToken: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshToken: response.data.refreshToken,
        });
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // 再帰的に1時間後にリフレッシュを行う
  async refreshIdToken({ dispatch }, refreshToken) {
    const key = outside.getFirebaseKey().apiKey;

    await axiosRefresh
      .post(`/token?key=${key}`, {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      })
      .then((response) => {
        dispatch('setAuthData', {
          idToken: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshToken: response.data.refreshToken,
        });
      });
  },

  register({ dispatch }, authData) {
    const key = outside.getFirebaseKey().apiKey;

    axios
      .post(`/accounts:signUp?key=${key}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      })
      .then((response) => {
        dispatch('setAuthData', {
          idToken: response.data.id_oken,
          expiresIn: response.data.expires_in,
          refreshToken: response.data.refresh_token,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    router.push('/');
  },

  logout({ commit }) {
    commit('updateIdToken', null);
    localStorage.removeItem('idToken');
    localStorage.removeItem('expiryTimeMs');
    localStorage.removeItem('refreshToken');
    router.replace('/login');
  },

  setAuthData({ commit, dispatch }, authData) {
    const expiryTimeMs = new Date().getTime() + authData.expiresIn * 1000;

    commit('updateIdToken', authData.idToken);
    // vuex-persistedstateを用いるとブラウザを閉じたら情報が消える
    localStorage.setItem('idToken', authData.idToken);
    localStorage.setItem('expiryTimeMs', expiryTimeMs);
    localStorage.setItem('refreshToken', authData.refreshToken);
    // 1時間後にリフレッシュ用トークンを生成して、idTokenに入れてログイン保持
    setTimeout(() => {
      dispatch('refreshIdToken', authData.refreshToken);
    }, authData.expiresIn * 1000);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
