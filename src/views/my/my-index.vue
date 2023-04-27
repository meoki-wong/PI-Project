<template>
  <div class="my-contain">
    <div class="top-info">
        <div class="opt-box">
            <!-- <img @click="checkKF" src="./assets/img/service-icon.png" alt="">
            <img @click="checkKF" src="./assets/img/msg-icon.png" alt=""> -->
        </div>
        <div class="middle-box">
            <div class="info">
                <img src="./assets/img/avator.png" alt="">
                <div class="own-info">
                    <p class="names">Hi,</p>
                    <p class="phone">{{userInfo.pi_username}}</p>
                </div>
            </div>
            <img class="icon" src="./assets/img/setting-icon.png" alt="" @click="goSetting">
            <!-- <img src="" alt=""> -->
        </div>
        <div class="bottom-box">
            <div class="common">
                <p>账户总金额（元）</p>
                <p>{{balance || 0}}</p>
            </div>
            <div class="common">
                <p>账户余额（元）</p>
                <p>{{balance || 0}}</p>
            </div>
        </div>
        <!-- 常用服务 -->
        <div class="common-server">
            <div class="title">常用服务</div>
            <van-grid :column-num="2">
                <van-grid-item v-for="item in serviceList" :key="item.name" @click="goServer(item)">
                    <img class="service-img" :src="item.icon" alt="wenzi ">
                    <p class="tab-title">{{item.name}}</p>
                </van-grid-item>
            </van-grid>

        </div>
    </div>
    <!-- <div class="Advertising">
        <img src="../../assets/bgc.jpeg" alt="">
    </div> -->
  </div>
</template>

<script>
import { serviceList } from './utils/common'
export default {
    data(){
        return {
            serviceList,
            userInfo: {},
            balance: 0
        }
    },
    async mounted(){
        // this.getData()
        await this.getUserInfo()
        await this.getAccount()
    },
    methods: {
        async getAccount(){
            let pi_uuid 
            if (window.parent === window.self) {
                this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
                pi_uuid = JSON.parse(localStorage.getItem('userInfo')).pi_uuid
            } else {
                pi_uuid = this.user.uid
            }
            let res = await this.axios.post('/findAccount', {
                pi_uuid
            })
            if(res.data.code == 200){
                this.balance = res.data.data.balance
            }
        },
        async getUserInfo() {
            let scopes = ['username', 'payments'];
            if (window.parent !== window.self) {
                const authResult = await window.Pi.authenticate(
                    scopes,
                    this.onIncompletePaymentFound()
                );
                this.user = authResult.user || "";
            }
        },
        goServer(item){
            this.$router.push(item.path)
        },
        checkKF(){
            this.$router.push('/kf')
        },
        goSetting(){
            if (window.parent === window.self) {
                this.$toast.fail("请在pi浏览器环境下进行注册");
                return;
            }
            this.$router.push('/setAccount')
        },
        // async getData(){
        //     let res = await this.axios.get('/user/index')
        //     this.dataObject = res.data.data
        // }
    }
}
</script>

<style lang="less" scoped>
@import "./assets/css/my-index.less";

</style>