<template>
  <div class="icons">
    <swiper ref="mySwiper"  :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="iconitme in page" :key="iconitme.id">
          <div class="icon-img">
            <img class="icon-imgcontent" :src="iconitme.iconSrc" alt>
          </div>
          <p class="icon-desc">{{iconitme.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "icons",
  props: {
    iconlist: Array
  },
  data() {
    return {
      swiperOption : {
         autoplay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconlist.forEach((itme, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(itme);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/global.stylus';
@import '~@/assets/stylus/mixins.stylus';

.icons>>>.swiper-container {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;

  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0px;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-imgcontent {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darktextColor;
      ellipsis()
    }
  }
}
</style>
