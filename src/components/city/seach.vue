<template>
  <div class="seach">
    <input class="seach-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

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
</style>