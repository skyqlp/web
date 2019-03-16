<template>
  <div class="Header">
    <div class="header-left">
      <div class="sky sky-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="sky">&#xe632;</span>
      输入城市游玩主题
    </div>
    <router-link 
     to='/city'
    tag="div"
    >
      <div class="header-right">
        {{this.city}}
        <span class="sky arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
    
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/global.stylus';
.Header {
  display: flex;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .sky-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    height: 0.64rem;
    flex: 1;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    background: #ffffff;
    border-radius: 0.1rem;
    color: #ccc;
    padding-left: 0.2rem;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;

    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
