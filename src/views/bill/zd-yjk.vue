<template>
  <div class="my-loan-contain">
    <Navbar title="我的借款" />
    <div class="loan-box">
      <div class="loan-info">
        <!-- <div class="num">借款编号：202302120001215454</div> -->
        <div class="date-num">
          <div class="date-box">
            <p class="top-title">{{ stages }}月</p>
            <p class="bottom-title">借款时间</p>
          </div>
          <div class="num-box">
            <p class="top-title">￥{{ borrowmoney }}</p>
            <p class="bottom-title">借款金额</p>
          </div>
        </div>
        <div class="opt-box">
          <div class="tips">{{ orderstatus }}</div>
          <div class="check-btn" @click="checkContract">
            <img src="./asset/img/check-btn.png" alt="" />
          </div>
        </div>
      </div>
      <div class="br"></div>
      <div class="order-detail">
        <p class="title">订单详情：</p>
        <p class="info">{{ orderremark }}</p>
      </div>
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
      borrowmoney: 0,
      stages: 0,
      orderstatus: "",
      orderremark: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await this.axios.get("/borrow/myloan");
      // let _that = this
      if (res == undefined) {
        this.$router.push("/myloan-nodata");
      }
      if (res.data.success) {
        this.borrowmoney = res.data.data.borrowmoney;
        this.stages = res.data.data.stages;
        this.orderstatus = res.data.data.orderstatus;
        this.orderremark = res.data.data.orderremark;
      } else {
      }
    },
    checkContract() {
      this.$router.push("/checkContract");
    },
  },
};
</script>

<style lang="less" scoped>
@import "./asset/css/zd-yjk.less";
</style>