<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <NavBar/>



  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
  }
}
</script>
