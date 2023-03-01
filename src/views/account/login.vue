<template>
    <div class="login-contain">
        <Navbar title="注册/登录"/>
        <div class="logo">
            <img
                src=""
                alt="logo位置"
            >
        </div>
        <div class="opt-area">
            <van-field
                v-model="tel"
                type="tel"
                placeholder="请输入手机号"
            />
            <van-field
                v-model="sms"
                center
                clearable
                placeholder="请输入验证码"
            >
                <template #button>
                    <div class="sms-btn">发送验证码</div>
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
    methods: {
        goHome(){
            this.$router.push('/home')
        }
    }
}
</script>

<style lang="less" scoped>
@import "./assets/css/login.less";
</style>