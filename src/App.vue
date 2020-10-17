<template>
  <div id="app">
    <Calc />
    <Top />
  </div>
</template>

<script>
import Calc from './components/Calculator.vue';
import Top from './components/Top.vue';

export default {
  components: {
    Calc,
    Top,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
