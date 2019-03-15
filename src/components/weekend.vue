<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "weekend",
  data() {
    return {
       list: [
        {
          id: "0001",
          imgUrl: "",
          title: "",
          desc: ""
        },
        {
          id: "0002",
          imgUrl: "",
          title: "",
          desc: ""
        },
        {
          id: "0003",
          imgUrl: "",
          title: "",
          desc: ""
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/mixins.stylus';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 37.09%; // 图片宽高比 140 : 375
}

.item-img {
  width: 100%;
}

.item-info {
  padding: 0.1rem;
  min-width: 0; // 设置 min-width 是为了让 ellipsis() 生效

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    ellipsis();
  }
}
</style>
