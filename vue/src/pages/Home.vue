<template>
  <page-layout>
    <p>Welcome home</p>
    <case></case>
  </page-layout>
</template>

<script>
  import PageLayout from '../layouts/Page.vue'
  import Case from '../components/case/Case.vue'
  export default {
    components: {
      PageLayout,
      Case
    }
  }
</script>
