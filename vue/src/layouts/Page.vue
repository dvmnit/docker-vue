
<template>
  <div class="page">
    <navbar></navbar>
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
  .page {
    height: 100%;
  }

  .main {
    height: 100%;
    padding: 10px;
    padding-top: 60px;
    background: #eee;
  }
</style>
