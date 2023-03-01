<template>
  <div class="my-loan-contain">
    <Navbar title="我的借款" />
    <div class="loan-box">
        <div class="loan-info">
            <div class="num">借款编号：202302120001215454</div>
            <div class="date-num">
                <div class="date-box">
                    <p class="top-title">3月</p>
                    <p class="bottom-title">借款时间</p>
                </div>
                <div class="num-box">
                    <p class="top-title">￥50000.00</p>
                    <p class="bottom-title">借款金额</p>
                </div>
            </div>
            <div class="opt-box">
                <div class="tips">银行卡错误</div>
                <div class="check-btn" @click="checkContract">
                    <img src="./asset/img/check-btn.png" alt="">
                </div>
            </div>
        </div>
        <div class="br"></div>
        <div class="order-detail">
            <p class="title">订单详情：</p>
            <p class="info">您的银行卡信息不符，点击《我的借款》《借款合同》查看。请及时联系客服人员及时处理，资金冻结！如不及时处理，影响个人征信不良，需如期还款，并自动划扣款项！</p>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/NavBar.vue'
export default {
    components: {
        Navbar
    },
    methods: {
        checkContract(){
            this.$router.push('/checkContract')
        }
    }
}
</script>

<style lang="less" scoped>
    @import "./asset/css/zd-yjk.less";
</style>