<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSweiper></HomeSweiper>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/Header.vue'
import HomeSweiper from '../components/homeSwiper.vue'
export default {
  name: 'home',
  data() {
    return {
      age: 1,
    };
  },
  components: {
    HomeHeader,
    HomeSweiper
  }
};
</script>
