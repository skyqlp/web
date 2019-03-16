<template>
  <div class="about">
    <cityHeader></cityHeader>
    <cityseach></cityseach>
    <citylist :index='index' :cities = 'cities' :hot='hotCitities'></citylist>
    <cityalphabet :city="cities" @change="handelchange"></cityalphabet>
  </div>
</template>

<script>
import cityHeader from '../components/city/header'
import cityseach from '../components/city/seach'
import citylist from '../components/city/list'
import cityalphabet from '../components/city/alphabet'
export default {
  name: 'about',
  data() {
    return {
      cities: {},
      hotCitities: [],
      index: ''
    }
  },
  components: {
    cityHeader,
    cityseach,
    citylist,
    cityalphabet
  },
  methods: {
    getcityInfo() {
      this.$http.get('/api/city.json')
      .then(this.handleGetCityinfoSucc)
    },
    handleGetCityinfoSucc(res){
      res = res.data
      if(res.ret&&res.data){
        const data = res.data
        this.cities = data.cities
        this.hotCitities = data.hotCities
      }
    },
    handelchange(index){
      this.index = index
    }
  },
  mounted() {
    this.getcityInfo()
  },
}
</script>

<style lang="stylus" scoped>
</style>
