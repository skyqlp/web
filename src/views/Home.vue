<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSweiper></HomeSweiper>
    <Homeicons></Homeicons>
    <homerecommend></homerecommend>
    <HomeWeekend></HomeWeekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/Header.vue'
import HomeSweiper from '../components/homeSwiper.vue'
import Homeicons from '../components/icons'
import recommend from '../components/recommend'
import HomeWeekend from '../components/weekend'
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
    Homeicons,
    'homerecommend': recommend,
    HomeWeekend
  }
};
</script>
