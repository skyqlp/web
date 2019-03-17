<template>
  <div>
    <div class="seach">
      <input v-model="keyword" class="seach-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-itme border-bottom"  v-for="item in list" :key="item.id" @click="handelcity(item.name)">{{item.name}}</li>
        <li class="search-itme border-bottom" v-show="hasNodata">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: "seach",
  props: {
    city: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNodata () {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword){
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const resut = [];
        for (let i in this.city) {
          this.city[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              resut.push(value);
            }
          });
        }
        this.list = resut;
      }, 100);
    }
  },
  methods: {
    handelcity (city) {
      this.$store.dispatch('changeCity',city)
      this.$router.push('/')
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/global.stylus';

.seach {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .seach-input {
    box-sizing: border-box;
    padding: 0 0.1rem;
    height: 0.62rem;
    line-height: 0.62rem;
    width: 100%;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .search-itme {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>