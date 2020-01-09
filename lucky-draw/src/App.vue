<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import initWebsocket from '../src/libs/websocket'
export default {
  name: 'App',
  created() {
    initWebsocket()
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
