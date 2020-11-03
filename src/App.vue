<template>
  <v-app>
    <div id="app">
      <Header />
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Header from './components/layout/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
