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
                type="tel"
                maxlength="11"
                placeholder="请输入手机号"
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
            let regs = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
            if(this.teleVal && !regs.test(this.teleVal)){
                this.$toast.fail('请输入正确的手机号')
                return
            }
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
            const scopes = ['username', 'payments'];
            let authResult = await window.Pi.authenticate(scopes, this.onIncompletePaymentFound);
            if(authResult.user.uid){
                window.server = authResult.user.uid
                this.$router.push('/')
            }
        },
        onIncompletePaymentFound(payment) {
                console.log("onIncompletePaymentFound", payment);
                return this.axios.post('/payments/incomplete', {payment});
            }
    }
}
</script>

<style lang="less" scoped>
@import "./assets/css/login.less";
</style>