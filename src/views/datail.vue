<template>
  <div class="datail">
    <datailBanner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></datailBanner>
    <datailheader></datailheader>
    <div class="conter">
      <dataillist :list="list"></dataillist>
    </div>
  </div>
</template>

<script>
import datailBanner from "../components/details/banner";
import datailheader from "../components/details/Header";
import dataillist from "../components/details/list";
export default {
  name: "datail",
  data() {
    return {
      sightName: "",
      list: [],
      bannerImg: "",
      gallaryImgs: []
    };
  },
  components: {
    datailBanner,
    datailheader,
    dataillist
  },
  methods: {
    getDetailrInfo() {
      this.$http
        .get("/api/datail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.getDetailrSucc);
    },
    getDetailrSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    }
  },
  mounted() {
    this.getDetailrInfo();
  }
};
</script>

<style lang="stylus" scoped>
.conter {
  height: 50rem;
}
</style>
