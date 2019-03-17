<template>
  <div>
    <div class="banner" @click="handelBannerclick">
      <img class="Banner-img" :src='bannerImg' alt>
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-namber">
          <span class="sky banner-icon">&#xe625;</span>{{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <CommenGallay @close="handelGallaryclose" :imgs="bannerImgs" v-show="showgallary"></CommenGallay>
  </div>
</template>

<script>
import CommenGallay from "../../common/gallay/gallay";
export default {
  name: "banner",
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data() {
    return {
      showgallary: false
    };
  },
  components: {
    CommenGallay
  },
  methods: {
    handelBannerclick() {
      this.showgallary = true;
    },
    handelGallaryclose() {
      this.showgallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .Banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      font-size: 0.32rem;
      padding: 0 0.2rem;
      flex: 1;
    }

    .banner-namber {
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      line-height: 0.32rem;
      height: 0.32rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      color: #fff;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
