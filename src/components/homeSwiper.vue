<template>
  <div class="warpper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="itme in list" :key="itme.id">
        <img
          class="swiper-img"
          :src="itme.src"
          alt
        >
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "homeswiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination", //分页圆点 .swiper-pagination
        loop: true, //开启循环轮播
        autoplay: 2500,
        speed: 1000
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style lang="stylus" scoped>
.warpper>>>.swiper-pagination-bullet-active {
  background: #ffffff;
}

.warpper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 32%;

  .swiper-img {
    width: 100%;
  }
}
</style>
