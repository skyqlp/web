<template>
  <div class="home">
    <HomeHeader :city='city'></HomeHeader>
    <HomeSweiper :list='swiperlist'></HomeSweiper>
    <Homeicons :iconlist='iconlist'></Homeicons>
    <homerecommend :recommendlist='recommendlist'></homerecommend>
    <HomeWeekend :weekendList="weekendList"></HomeWeekend>
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
      city: '',
      swiperlist: [],
      iconlist: [],
      recommendlist: [],
      weekendList: []
    };
  },
  components: {
    HomeHeader,
    HomeSweiper,
    Homeicons,
    'homerecommend': recommend,
    HomeWeekend
  },
  methods: {
    gethomeinfo(){
      this.$http.get('/api/index.json')
      .then(this.gethomeinfosucc)
    },
    gethomeinfosucc(res){
      res = res.data
      if(res.ret&&res.data){
        const data = res.data
        this.city = data.city
        this.swiperlist = data.swiperList
        this.iconlist = data.iconList
        this.recommendlist = data.recommendList
        this.weekendList = data.weekendList
      }
      console.log(res)
    }
  },
  mounted(){
    this.gethomeinfo()
  }
};
</script>
