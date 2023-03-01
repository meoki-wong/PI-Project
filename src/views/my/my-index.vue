<template>
  <div class="my-contain">
    <div class="top-info">
        <div class="opt-box">
            <img src="./assets/img/service-icon.png" alt="">
            <img src="./assets/img/msg-icon.png" alt="">
        </div>
        <div class="middle-box">
            <div class="info">
                <img src="./assets/img/avator.png" alt="">
                <div class="own-info">
                    <p class="names">Hi,</p>
                    <p class="phone">15922223333</p>
                </div>
            </div>
            <img class="icon" src="./assets/img/setting-icon.png" alt="">
        </div>
        <div class="bottom-box">
            <div class="common">
                <p>账户余额（元）</p>
                <p>0.00</p>
            </div>
            <div class="common">
                <p>最近借款（元）</p>
                <p>0.00</p>
            </div>
        </div>
        <!-- 常用服务 -->
        <div class="common-server">
            <div class="title">常用服务</div>
            <van-grid :column-num="4">
                <van-grid-item v-for="item in serviceList" :key="item.name" @click="goServer(item)">
                    <img class="service-img" :src="item.icon" alt="wenzi ">
                    <p class="tab-title">{{item.name}}</p>
                </van-grid-item>
            </van-grid>

        </div>
    </div>
    <div class="Advertising">
        <img src="./assets/img/Advertising.png" alt="">
    </div>
  </div>
</template>

<script>
import { serviceList } from './utils/common'
export default {
    data(){
        return {
            serviceList
        }
    },
    methods: {
        goServer(item){
            this.$router.push(item.path)
        }
    }
}
</script>

<style lang="less" scoped>
@import "./assets/css/my-index.less";

</style>