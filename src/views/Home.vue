<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSweiper></HomeSweiper>
    <Homeicons></Homeicons>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/Header.vue'
import HomeSweiper from '../components/homeSwiper.vue'
import Homeicons from '../components/icons'
export default {
  name: 'home',
  data() {
    return {
      age: 1,
    };
  },
  components: {
    HomeHeader,
    HomeSweiper,
    Homeicons
  }
};
</script>
