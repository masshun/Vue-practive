Vue.config.devtools = true;
import Vue from 'vue';
import UUID from 'vue-uuid';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vuetify from './plugins/vuetify';
import store from './store';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import axios from 'axios';
import 'firebase/firestore';
import key from './helper/key';

Vue.config.productionTip = false;
// 残りのコンポーネント毎に変化するパスだけ別途作成して、その前まではここで完結させてしまう
axios.defaults.baseURL = 'https://firestore.googleapis.com/v1/projects/vue-practice-13722/databases/(default)/documents';

Vue.use(UUID);
Vue.use(BootstrapVue);
Vue.use(VueTextareaAutosize);
const keys = key.getFirebaseKey();

// 別の方法も掲載
firebase.initializeApp({
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  databaseURL: keys.databaseURL,
  projectId: keys.projectId,
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId,
  appId: keys.appId,
  measurementId: keys.measurementId,
});

export const db = firebase.firestore();

// 最初にJavaScriptが呼ばれた時に実行されるようにする
store.dispatch('autoLogin').then(() => {
  new Vue({
    router,
    vuetify,
    store,
    render: (h) => h(App),
  }).$mount('#app');
});
