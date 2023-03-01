<template>
  <div class="about-me-contain">
    <Navbar title="关于我们" />
    <div class="inner" v-html="aboutDom"></div>
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      aboutDom: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await this.axios.get("/about");
      if (res.data.success) {
        this.aboutDom = res.data.data.content;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.about-me-contain {
  .inner {
    padding: 20px 28px;
    box-sizing: border-box;
    text-align: left;
    p {
      text-align: left;
      font-size: 12px;
      font-family: PingFang SC-Light, PingFang SC;
      font-weight: 300;
      color: #989898;
      line-height: 20px;
    }
  }
}
</style>