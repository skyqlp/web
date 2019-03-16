<template>
  <div class="Header">城市选择
    <router-link to="/">
      <div class="sky Header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/global.stylus';

.Header {
  position: relative;
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  background: $bgColor;
  color: #fff;
  font-size: 0.32rem;

  .Header-back {
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

