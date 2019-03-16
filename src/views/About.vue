<template>
  <div class="about">
    <cityHeader></cityHeader>
    <cityseach></cityseach>
    <citylist></citylist>
    <cityalphabet></cityalphabet>
  </div>
</template>

<script>
import cityHeader from '../components/city/header'
import cityseach from '../components/city/seach'
import citylist from '../components/city/list'
import cityalphabet from '../components/city/alphabet'
export default {
  name: 'about',
  components: {
    cityHeader,
    cityseach,
    citylist,
    cityalphabet
  }
}
</script>

<style lang="stylus" scoped>
</style>
