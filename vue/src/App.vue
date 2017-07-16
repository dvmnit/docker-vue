<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="@/assets/styles/requip.css"></style>
<style>
  html, body {
    width: 100%; 
    height: 100%;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  #app {
    height: 100%;
    font-size: 2rem;
    line-height: 2.4rem;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
