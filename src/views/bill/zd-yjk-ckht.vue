// 账单-已借款-查看合同
<template>
  <div class="check-contract-contain">
    <Navbar title="我的合同" />
    <div class="inner-contract">
        <p v-html="content"></p>
    </div>
    <div class="seal-img">
      <img src="./asset/img/seal-img.png" alt="" />
    </div>
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
      content: "",
    };
  },
  mounted() {
    this.getData()
  },
  methods:{
    async getData(){
        let res = await this.axios.get("/user/contract");
        if(res.data.success)
        {
            this.content = res.data.data
        }
    }
  }
};
</script>

<style lang="less" scoped>
.check-contract-contain {
  position: relative;
  .inner-contract {
    display: block;
    padding: 25px 16px;
    box-sizing: border-box;
    font-size: 14px;
    font-family: PingFang SC-Light, PingFang SC;
    font-weight: 300;
    color: #272727;
    line-height: 0px;
    text-align: left;
    p {
      line-height: 30px;
    }
  }
  .seal-img {
    width: 98.58px;
    height: 98.58px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>