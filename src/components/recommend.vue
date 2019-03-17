<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        :to="'/datail/'+item.id"
        class="itme"
        v-for="item in recommendlist"
        :key="item.id"
      >
        <img class="itme-img" :src="item.imgSrc" alt>
        <div class="itme-info">
          <p class="itme-title">{{item.title}}</p>
          <p class="itme-desc">{{item.desc}}</p>
          <button class="itme-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "recommend",
  props: {
    recommendlist: Array
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/mixins.stylus';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.itme {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .itme-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .itme-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .itme-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .itme-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .itme-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
