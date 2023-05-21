<template>
    <div class="login-contain">
        <Navbar title="注册账号"/>
        <div class="opt-area">
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
        <div class="login-btn" @click="goHome">
            <img src="../account/assets/img/login-btn.png" alt="">
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
            piUserInfo: {} // pi浏览器登录信息
        }
    },
    mounted() {
        this.getLoginInfo()
    },
    methods: {
        async goHome(){
            let regs = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
            if(this.teleVal && !regs.test(this.teleVal)){
                this.$toast.fail('请输入正确的手机号')
                return
            }
            let res = await this.axios.post('/register', {
                    ...this.piUserInfo,
                    userName: this.teleVal,
                    password: this.authCode
                })
            if(res.data.success){
                this.$router.push('/')
            }
        },
        async getLoginInfo(){
            const scopes = ['username', 'payments'];
            let authResult = await window.Pi.authenticate(scopes, this.onIncompletePaymentFound);
            if(authResult.user.uid){
                this.piUserInfo = {
                        pi_uuid: authResult.user.uid,
                        pi_username: authResult.user.username
                    }
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
@import "../account/assets/css/login.less";
</style>