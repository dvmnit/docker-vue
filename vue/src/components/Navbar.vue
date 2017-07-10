<template>
  <div class="navbar">
    <ul>
      <li> <router-link to="/">Home</router-link> </li>
      <li> <router-link to="/about">About</router-link> </li>
    </ul>
  </div>
</template>

<style>
  .navbar {
    padding: 10px;
    background: #ddd;
  }

  .navbar li {
    display: inline-block;
    padding: 0 20px;
  }
</style>
