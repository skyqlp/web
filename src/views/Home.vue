<template>
  <div class="home">
    <HomeHeader></HomeHeader>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/Header.vue'
export default {
  name: 'home',
  data() {
    return {
      age: 1,
    };
  },
  components: {
    HomeHeader
  }
};
</script>
