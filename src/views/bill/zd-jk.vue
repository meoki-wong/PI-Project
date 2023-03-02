<template>
    <div class="loan-contain">
        <Navbar title="借款" />
        <div class="loan-top">
            <div class="title">借款金额</div>
            <p class="count"><span>{{borrowingBalance}}</span><span><img
                        src="./asset/img/edit-btn.png"
                        alt=""
                    ></span></p>
            <div class="info">
                <div class="dzje common">
                    <p>{{borrowingBalance}}</p>
                    <p>到账金额（元）</p>
                </div>
                <div class="mqhk common">
                    <p>{{( (Number(borrowingBalance) + Number(borrowingBalance) * dataList.dai_rate / 100) / borrowingMonth).toFixed(2)}}</p>
                    <p>每期还款（元）</p>
                </div>
                <div class="jkqx common">
                    <p> {{borrowingMonth}}</p>
                    <p>借款期限（个月）</p>
                </div>
            </div>
        </div>
        <div class="loan-middle">
            <div class="title">
                <img
                    src="./asset/img/cash-icon.png"
                    alt=""
                >
                借款金额
            </div>
            <div class="opt-box">
                <van-slider
                    v-model="borrowingBalance"
                    @change="onChange"
                    :min="dataList.dai_min_money"
                    :max="dataList.dai_max_money"
                />
                <p class="range">
                    <span class="number">{{dataList.dai_min_money}}</span>
                    <span class="touch">拖动调整额度</span>
                    <span class="number">{{dataList.dai_max_money}}</span>
                </p>
            </div>
        </div>
        <div class="loan-bottom">
            <div class="title">
                <img
                    src="./asset/img/date-icon.png"
                    alt=""
                >
                期限
            </div>
            <ul class="month-list">
                <li v-for="(item, index) in dataList.dai_months" :class="selectMonth === index? 'li_active' : ''" :key="item" @click="clickMonth(item, index)">{{item}}个月</li>
            </ul>
        </div>
        <div class="apply">
            <img
                @click="showDialog"
                src="./asset/img/apply-btn.png"
                alt=""
            >
        </div>

        <van-action-sheet
            v-model="show"
            title="核对订单"
        >
            <div class="content">
                <ul>
                    <li><span class="title">借款金额</span><span class="inner">{{borrowingBalance}}</span></li>
                    <li><span class="title">还款金额</span><span class="inner">{{Number(Number(borrowingBalance) + Number(borrowingBalance * dataList.dai_rate)).toFixed(2)}}</span></li>
                    <li><span class="title">借款期限</span><span class="inner">{{borrowingMonth}}个月</span></li>
                    <li><span class="title">收款银行</span><span class="inner">{{dataList.bankname}}</span></li>
                    <li><span class="title">收款卡号</span><span class="inner">{{dataList.banknumber}}</span></li>
                </ul>
                <div class="confirm-btn" @click="confirmClick">
                    <img src="./asset/img/confirm-btn.png" alt="">
                </div>
            </div>
        </van-action-sheet>
    </div>
</template>

<script>
import Navbar from '../components/NavBar.vue'
export default {
    components: {
        Navbar
    },
    mounted(){
        this.getData()
    },
    data(){
        return {
            show: false,
            value: 0,
            dataList: [], // 参数列表
            borrowingBalance: 0, //借款金额
            borrowingMonth:  3,
            selectMonth: 0,
        }
    },
    methods: {
        showDialog(){
            this.show = true
        },
        onChange(e){
            console.log(e);
        },
        async getData(){
            let res = await this.axios.get('/borrow/index')
            if(res.data.success){
                this.dataList = res.data.data
                this.borrowingMonth = this.dataList.dai_init_months
                this.borrowingBalance = this.dataList.dai_min_money || 0
            }
        },
        clickMonth(item, index){
            this.selectMonth = index
            this.borrowingMonth = item
        },
        async confirmClick(){
            let res = await this.axios.post('/borrow/index', {
                borrowmoney: this.borrowingBalance,
                stages: this.borrowingMonth
            })
            if(res.data.success){
                this.$toast.success('借款成功')
                this.show = false
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "./asset/css/zd-jk.less";
</style>