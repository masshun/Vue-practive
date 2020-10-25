<template>
  <header class="header">
    <div id="nav">
      <!-- TODO: 項目が多いので後で修正する -->
      <router-link to="/" active-class="f20" exact>Top</router-link> | <router-link to="/calc" active-class="f20" exact>Calc</router-link> |
      <router-link to="/weather" active-class="f20" exact>Weather</router-link> |
      <router-link to="/question" active-class="f20" exact>Question</router-link> |
      <router-link to="/datalist" active-class="f20" exact>DataList</router-link> |
      <router-link to="/calendar" active-class="f20" exact>Calendar</router-link> |
      <router-link to="/customcontent" active-class="f20" exact>Custom</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  background: rgb(65, 83, 139);
  color: white;
  text-align: center;
  /* padding: 5px; */
}

.header a {
  color: white;
  padding-right: 5px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #839bb3;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.f20 {
  font-size: 20px;
}
</style>
