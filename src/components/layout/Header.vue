<template>
  <header class="header">
    <!-- <h1>TodoList</h1> -->
    <div id="nav">
      <router-link to="/">Top</router-link> |
      <router-link to="/calc">Calc</router-link> |
      <router-link to="/weather">Weather</router-link>
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
</style>
