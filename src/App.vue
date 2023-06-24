<template>
  <NavBar></NavBar>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <PrincipalContent></PrincipalContent>
  <SimpleFooter></SimpleFooter>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import SimpleFooter from './components/SimpleFooter.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar,
    SimpleFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
