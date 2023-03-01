<template>
    <div class="check-repayment-contain">
        <Navbar title="我的还款" />
        <ul class="list">
            <li><span class="title">还款金额</span><span class="title">还款日期</span></li>
            <li
                v-for="item in 3"
                :key="item"
            ><span>16966.67</span><span>2023-03-12</span></li>
        </ul>
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
.check-repayment-contain {
    .list {
        margin: 15px 10px 0;
        width: 355px;
        border-top: 1px solid #707070;
        border-left: 1px solid #707070;
        li {
            display: flex;
            flex-wrap: wrap;
            height: 27px;
            span {
                width: calc(50% - 1px);
                display: flex;
                justify-content: center;
                align-items: center;
                border-right: 1px solid #707070;
                border-bottom: 1px solid #707070;
                font-size: 12px;
                font-family: PingFang SC-Light, PingFang SC;
                font-weight: 300;
                color: #F91E1E;
            }
            .title {
            font-size: 14px;
            font-family: PingFang SC-Medium, PingFang SC;
            font-weight: 500;
            color: #272727;
        }
        }
    }
}
</style>