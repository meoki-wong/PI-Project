<template>
  <div class="question-contain">
    <Navbar title="常见问题" />
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item
        :title="item.title"
        :name="index"
        v-for="(item, index) in faqList"
        :key="index"
        >{{ item.contents }}</van-collapse-item
      >
    </van-collapse>
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
// import { faqList } from "./mock";
export default {
  components: {
    Navbar,
  },
  mounted() {
    this.getData();
  },
  data() {
    return {
      activeName: "1",
      faqList:{},
    };
  },
  methods: {
    async getData() {
      let res = await this.axios.get("/Settings/helps");
      if (res.data.success) {
        this.faqList = res.data.data;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.question-contain {
  /deep/.van-cell {
    text-align: left;
  }
  /deep/.van-collapse-item__wrapper {
    text-align: left;
  }
}
</style>