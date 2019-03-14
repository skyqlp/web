<template>
  <div class="warpper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="itme in swiperlist" :key="itme.id">
        <img
          class="swiper-img"
          :src="itme.imgUrl"
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
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination", //分页圆点 .swiper-pagination
        loop: true, //开启循环轮播
        autoplay: 2500,
        speed: 1000
      },
      swiperlist: [
        {
          id: '0001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/ad906cbe02849a504c4a4399741013a4.jpg_750x200_8ac64dcc.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/2f5f3ea4698c9b7898db7562d89b91ed.jpg_750x200_bd3b4ce9.jpg'
        }
      ]
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
  padding-bottom: 31.25%;

  .swiper-img {
    width: 100%;
  }
}
</style>
