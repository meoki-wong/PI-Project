<template>
  <div class="funds-details-contain">
    <Navbar title="资金明细"/>
    <div class="fund-details">
        <ul>
            <!-- <li>
                <span class="title">订单编号</span>
                <span class="inner">2023021254521015</span>
            </li> -->
            <li>
                <span class="title">借款金额</span>
                <span class="inner">{{dataObject.borrowmoney || 0}}元</span>
            </li>
            <li>
                <span class="title">总计</span>
                <span class="inner">{{dataObject.stage || 0}}期</span>
            </li>
            <li>
                <span class="title">每期还款</span>
                <span class="inner">{{dataObject.repayment_money || 0}}元</span>
            </li>
        </ul>
    </div>
    <div class="fund-tro">
        <ul>
            <li v-for="item in dataObject.fund" :key="item"><span>第 {{item.repayment_qi}} 期</span><span>￥{{item.repayment_money}}</span><span>{{item.repayment_day}}</span></li>
        </ul>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/NavBar.vue'
export default {
    components: {
        Navbar
    },
    data(){
        return {
            dataObject: {},
        }
    },
    mounted(){
        this.getData()
    },
    methods: {
        async getData(){
            let res = await this.axios.get('/user/fund')
            if(res.data.success){
                this.dataObject = res.data.data
            }
        }
    }
}
</script>

<style lang="less" scoped>
    @import "./assets/css/my-zjmx.less";
</style>