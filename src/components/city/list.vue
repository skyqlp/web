<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="itme in hot" :key="itme.id">
            <div class="button">{{itme.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(itme,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="itme-list">
          <div class="itme border-bottom" v-for="innitme in itme" :key="innitme.id">{{innitme.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "list",
  props: {
    hot: Array,
    cities: Object,
    index: String
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    index () {
      if( this.index){
        const elemet = this.$refs[this.index][0]
        this.scroll.scrollToElement(elemet)
      }
    }
  },
  
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/global.stylus';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
}

.title {
  line-height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}

.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;

  .button-wrapper {
    float: left;
    width: 33.33%;

    .button {
      margin: 0.1rem 0.1rem;
      padding: 0.1rem 0;
      text-align: center;
      border: 0.02rem solid #ccc;
      border-radius: 0.06rem;
    }
  }
}

.itme-list {
  .itme {
    line-height: 0.76rem;
    color: #666;
    padding-left: 0.2rem;
  }
}
</style>

