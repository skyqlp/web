<template>
  <ul class="list">
    <li
      class="itme"
      v-for="itme in lettes"
      :key="itme"
      @click="handleclick"
      @touchstart="handeltouch"
      @touchmove="handeltouchmome"
      @touchend="handeltouchend"
      :ref="itme"
    >{{itme}}</li>
  </ul>
</template>

<script>
export default {
  name: "alphabet",
  props: {
    city: Object
  },
  data() {
    return {
      touchstatus: false
    };
  },
  computed: {
    lettes() {
      const letters = [];
      for (let i in this.city) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    handleclick(e) {
      this.$emit("change", e.target.innerText);
    },
    handeltouch() {
      this.touchstatus = true;
    },
    handeltouchmome(e) {
      if (this.touchstatus) {
        const starY = this.$refs["A"][0].offsetTop;
        const touchY = e.touches[0].clientY - 79;
        const index = Math.floor((touchY - starY) / 20);
        if (index >= 0) {
          this.$emit("change", this.lettes[index]);
        }
      }
    },
    handeltouchend() {
      this.touchstatus = false;
    }
  }
};
</script>

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

