<template>
    <div class="login-contain">
        <Navbar title="注册/登录"/>
        <div class="logo">
            <img
                :src="logo"
                alt="logo位置"
            >
        </div>
        <div class="opt-area">
            <van-field
                v-model="teleVal"
                type="tel"
                placeholder="请输入手机号"
            />
            <van-field
                v-model="authCode"
                center
                clearable
                placeholder="请输入验证码"
                disabled
            >
                <template #button>
                    <div class="sms-btn" @click="sendSMSCode">{{'发送验证码'}}</div>
                </template>
            </van-field>
        </div>
        <div class="login-btn" @click="goHome">
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
        }
    },
    mounted() {
        this.getLogo()
    },
    methods: {
        async goHome(){
            let res = await this.axios.post('/login/login', {
                code: this.authCode,
                phonenumber: this.teleVal
            })
            if(res.data.success){
                let { token, user} = res.data.data
                window.localStorage.token = res.data.data.token,
                window.sessionStorage.userInfo = user
                this.$router.push('/')
            }
        },
        async getLogo(){
            let res = await this.axios.get('/login/logo')
            if(res.data.success){
                console.log('logo', res.data.logo);
                this.logo = res.data.data.logo || ''
            }
        },
        async sendSMSCode(){
            if(this.isSend) return 
            let _this = this
            let res = await this.axios.post('/login/sendmsg', {
                phonenumber: this.teleVal
            })
            if(res.data.success){
                this.authCode = res.data.data.code
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "./assets/css/login.less";
</style>