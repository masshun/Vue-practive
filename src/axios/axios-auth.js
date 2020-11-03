import axios from 'axios';

// xsrfのトークンを渡すこともできる
const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  // baseURL: 'https://firestore.googleapis.com/v1/projects/vue-practice-13722/databases/(default)/documents'
});

export default instance;
