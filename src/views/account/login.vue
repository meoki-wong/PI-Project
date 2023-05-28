<template>
    <div class="login-contain">
        <Navbar title="注册/登录"/>
        <div class="logo">
            <img
                src="../../assets/logos.jpg"
                alt="logo位置"
            >
        </div>
        <div class="opt-area" v-if="isShowRegister">
            <van-field
                v-model="teleVal"
                type="text"
                placeholder="请输入用户名"
            />
            <van-field
                v-model="authCode"
                center
                clearable
                placeholder="请输入密码"
            >
            </van-field>
        </div>
        <div v-if="isShowRegister" class="login-btn" @click="goHome">
            <img src="./assets/img/login-btn.png" alt="">
        </div>
        <div v-else class="login-btn" @click="getLoginInfo">
            <img src="./assets/img/login-btn.png" alt="">
        </div>
    </div>
</template>

<script>
import Navbar from '../components/NavBar.vue'
import { Toast } from 'vant'
export default {
    components: {
        Navbar
    },
    data(){
        return {
            logo: "",
            timing: 60,
            isSend: false,
            teleVal: "", // 手机号
            authCode: "", // 验证码
            isShowRegister: false, // 是否显示注册按钮进行注册
            piUserInfo: {} // pi浏览器登录信息
        }
    },
    mounted() {
        if(window.parent === window.self){
            this.isShowRegister = true
        } else {
            this.isShowRegister = false
        }
    },
    methods: {
        async goHome(){
            let res = await this.axios.post('/login', {
                    userName: this.teleVal,
                    password: this.authCode
                })
            if(res.data.success){
                window.localStorage.setItem('token', res.data.data.token)
                window.localStorage.setItem('userInfo', JSON.stringify(res.data.data.userInfo))
                this.$router.push('/')
            }
        },
        async getLoginInfo(){
            let _this = this
            const scopes = ['username', 'payments'];
            Toast.loading({
                duration: 0, // 持续展示 toast
                forbidClick: true,
                message: "加载中..."
            });
            let authResult = await window.Pi.authenticate(scopes, _this.onIncompletePaymentFound);
            Toast.clear()
            if(authResult.user.uid){
                window.server = authResult.user.uid
                console.log('----wind', window.server);
                window.userInfo = authResult.user
                let items = await this.axios.post('/registerNewUser', {
                    userName: authResult.user.username,
                    pi_uuid: authResult.user.uid,
                    pi_username: authResult.user.username
                })
                if(items.data.code == 200){
                    this.$router.push('/')
                } else {
                    Toast.fail('网络错误，稍后重试')
                }
            }
        },
        onIncompletePaymentFound(payment) {
            alert('测试', JSON.stringify(payment))
                console.log("onIncompletePaymentFound", payment);
                // return this.axios.post('/payments/incomplete', {payment});
            }
    }
}
</script>

<style lang="less" scoped>
@import "./assets/css/login.less";
</style>