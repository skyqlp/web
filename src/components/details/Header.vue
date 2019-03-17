<template>
  <div class="Header">
    <router-link to="/" tag="div" class="header-abs" v-show="showAbs">
      <div class="sky header-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacitystyle">
      <router-link to="/">
        <div class="sky Header-fixed-back">&#xe624;</div>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "datailrheader",
  data() {
    return {
      showAbs: true,
      opacitystyle: {
        opacity: 0
      }
    };
  },
  created() {
    window.addEventListener("scroll", this.handlevEnt);
  },
  activated() {
    window.addEventListener("scroll", this.handlevEnt);
  },
  deactivated() {
    window.removeEventListener('scroll',this.handlevEnt)
  },
  methods: {
    handlevEnt() {
      console.log("scroll");
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacitystyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/global.stylus';

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  line-height: 0.8rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);

  .header-icon {
    color: #fff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  overflow: hidden;
  line-height: 0.86rem;
  text-align: center;
  background: $bgColor;
  color: #fff;
  font-size: 0.32rem;

  .Header-fixed-back {
    position: absolute;
    top: 0px;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #ffffff;
  }
}
</style>
