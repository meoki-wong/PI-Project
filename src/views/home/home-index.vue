<template>
  <div class="my-contain">
    <div class="top-info">
      <div class="opt-box">
        <img src="./assets/img/service-icon.png" alt="" />
        <img src="./assets/img/msg-icon.png" alt="" />
      </div>
      <div class="top-title">让信用不负期待</div>
      <div class="info-box">
        <p class="title">{{borrowStatus ? '可提现金额' : '最高借款额度'}}（元）</p>
        <div class="inner">
          <p>{{ maxMoney }}</p>
          <div @click="immediateLoan">{{borrowStatus ? '立即提现' : '立即借款'}}</div>
        </div>
        <p class="desc">最低利率 0.02% （年化利率 0.73%）</p>
      </div>
      <van-notice-bar :scrollable="true" class="broadcast" left-icon="volume-o" :text="notify" />

      <!-- app福利 -->
      <div class="app-welfare">
        <div class="title">APP专享福利</div>
        <div class="img-box">
          <div class="common one">
            <p class="title">借款利息9折</p>
            <p class="desc">APP月月可享</p>
          </div>
          <div class="common two">
            <p class="title">新人福利</p>
            <p class="desc">最长30天免息</p>
          </div>
          <div class="common thr">
            <p class="title">最高6.8折</p>
            <p class="desc">借款利息券派送</p>
          </div>
          <div class="common four">
            <p class="title">充话费9折</p>
            <p class="desc">APP月月可享</p>
          </div>
        </div>
      </div>
    </div>
    <div class="body-tips">快速入门</div>
    <ul class="tabs">
      <li>征信知识</li>
      <li>热门话题</li>
      <li>贷款帮帮</li>
      <li>使用帮助</li>
    </ul>
    <div class="avd-img">
      <img src="./assets/img/checkreport.png" alt="" />
    </div>
    <div class="news-tips">新手指南</div>
    <div class="new-people">新手使用指南</div>
    <div class="guide">> 申请条件 > 借款攻略 > 使用帮助</div>
    <div class="tro">持牌机构 | 1亿+注册用户 | 安全备案</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxMoney: 0, // 最高借款
      notify: "", // 广播
      timing: 0, // 计数器
      userInfoStatus: 0, // 状态
      borrowStatus: 0
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await this.axios.get("/index/index");
      console.log("-res", res);
      let _this = this;
      if (res.data.success) {
        let { dai_max_money, notices, user_info_status, chat_url, borrow_status, balance } =
          res.data.data;
        localStorage.setItem("chat_url", chat_url);
        this.maxMoney = borrow_status ?balance : dai_max_money;
        // console.log(notices)
        this.notify = notices.join("  ");
        this.userInfoStatus = user_info_status || 0;
        this.borrowStatus = borrow_status || 0
      }
    },
    immediateLoan() {
      if(this.borrowStatus){
        this.$router.push('/wallet')
        return 
      }
      let pathObj = {
        0: "/loanPurpose",
        1: "/loan",
      };
      this.$router.push(pathObj[this.userInfoStatus]);
    },
  },
};
</script>

<style lang="less" scoped>
@import "./assets/css/home-index.less";
</style>