<template>
  <div class="flex justify-center my-2 mx-20 bg-white bg-opacity-50 rounded-xl" id="nav">
    <router-link to="/">Home </router-link> |
    <router-link to="/about"> About </router-link> |
    <router-link to="/story"> Your Story</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 98vw;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #bbe600;
}
</style>
