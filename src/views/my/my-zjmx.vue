<template>
  <div class="funds-details-contain">
    <Navbar title="资金明细"/>
    <div class="fund-details">
        <ul>
            <li>
                <span class="title">订单编号</span>
                <span class="inner">2023021254521015</span>
            </li>
            <li>
                <span class="title">借款金额</span>
                <span class="inner">50000.00元</span>
            </li>
            <li>
                <span class="title">总计</span>
                <span class="inner">3期</span>
            </li>
            <li>
                <span class="title">每期还款</span>
                <span class="inner">16966.67元</span>
            </li>
        </ul>
    </div>
    <div class="fund-tro">
        <ul>
            <li v-for="item in 3" :key="item"><span>第 1 期</span><span>￥16966.67</span><span>未还款</span></li>
        </ul>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/NavBar.vue'
export default {
    components: {
        Navbar
    }
}
</script>

<style lang="less" scoped>
    @import "./assets/css/my-zjmx.less";
</style>