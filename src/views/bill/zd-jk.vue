<template>
    <div class="loan-contain">
        <Navbar title="借款" />
        <div class="loan-top">
            <div class="title">借款金额</div>
            <p class="count"><span>50000</span><span><img
                        src="./asset/img/edit-btn.png"
                        alt=""
                    ></span></p>
            <div class="info">
                <div class="dzje common">
                    <p>50000</p>
                    <p>到账金额（元）</p>
                </div>
                <div class="mqhk common">
                    <p>16966.67</p>
                    <p>每期还款（元）</p>
                </div>
                <div class="jkqx common">
                    <p>3</p>
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
                    v-model="value"
                    @change="onChange"
                />
                <p class="range">
                    <span class="number">3000</span>
                    <span class="touch">拖动调整额度</span>
                    <span class="number">3000000</span>
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
                <li>3个月</li>
                <li>6个月</li>
                <li>12个月</li>
                <li>18个月</li>
                <li>24个月</li>
                <li>36个月</li>
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
                    <li><span class="title">借款金额</span><span class="inner">108000</span></li>
                    <li><span class="title">还款金额</span><span class="inner">108000.00</span></li>
                    <li><span class="title">借款期限</span><span class="inner">6个月</span></li>
                    <li><span class="title">收款银行</span><span class="inner">农业</span></li>
                    <li><span class="title">收款卡号</span><span class="inner">**** **** **** **** 5555</span></li>
                </ul>
                <div class="confirm-btn">
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
    data(){
        return {
            show: false,
            value: 0
        }
    },
    methods: {
        showDialog(){
            this.show = true
        },
        onChange(e){
            console.log(e);
        }
    }
}
</script>

<style lang="less" scoped>
@import "./asset/css/zd-jk.less";
</style>