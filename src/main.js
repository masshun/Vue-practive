Vue.config.devtools = true;
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vuetify from './plugins/vuetify';
import store from './store';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';
import key from './helper/key';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueTextareaAutosize);
const keys = key.getFirebaseKey();

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
new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
