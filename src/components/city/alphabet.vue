<template>
  <ul class="list">
    <li class="itme">a</li>
    <li class="itme">a</li>
    <li class="itme">a</li>
    <li class="itme">a</li>
    <li class="itme">a</li>
    <li class="itme">a</li>
    <li class="itme">a</li>
    <li class="itme">a</li>
  </ul>
</template>

<style lang="stylus" scoped>
@import '~@/assets/stylus/global.stylus';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .itme {
    line-height: 0.44rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>

