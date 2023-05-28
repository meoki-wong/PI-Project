<template>
    <div class="login-contain">
        <Navbar title="注册账号" />
        <div class="opt-area">
            <van-cell-group>
                <van-field
                    label="用户名"
                    v-model="piUserInfo.pi_username"
                    center
                    disabled
                    placeholder="请输入用户名"
                >
                </van-field>
                <van-field
                        label="密码"
                        v-model="authCode"
                        maxlength="10"
                        required
                        center
                        clearable
                        placeholder="请输入密码"
                        :error-message="errMsg"
                        @blur="checkPhone"
                    >
                </van-field>
            </van-cell-group>
        </div>
        <div
            class="login-btn"
            @click="goHome"
        >
            <img
                src="../account/assets/img/login-btn.png"
                alt=""
            >
        </div>
    </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
export default {
    components: {
        Navbar,
    },
    data() {
        return {
            logo: "",
            timing: 60,
            isSend: false,
            teleVal: "", // 手机号
            authCode: "", // 验证码
            piUserInfo: {}, // pi浏览器登录信息
            errMsg: "",
        };
    },
    mounted() {
        this.getLoginInfo();
    },
    methods: {
        checkPhone() {
            let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/
            if (reg.test(this.authCode)) {
                this.errMsg = "";
                return true;
            } else {
                this.errMsg = "请输入字母和数字的组合，长度为6-10位";
                return false;
            }
        },
        async goHome() {
            if (this.errMsg) return;
            let res = await this.axios.post("/register", {
                ...this.piUserInfo,
                userName: this.piUserInfo.pi_username,
                password: this.authCode,
            });
            if (res.data.success) {
                this.$router.push("/");
            }
        },
        async getLoginInfo() {
            const scopes = ["username", "payments"];
            let authResult = await window.Pi.authenticate(
                scopes,
                this.onIncompletePaymentFound
            );
            if (authResult.user.uid) {
                this.piUserInfo = {
                    pi_uuid: authResult.user.uid,
                    pi_username: authResult.user.username,
                };
            }
        },
        onIncompletePaymentFound(payment) {
            console.log("onIncompletePaymentFound", payment);
            return this.axios.post("/payments/incomplete", { payment });
        },
    },
};
</script>

<style lang="less" scoped>
@import "../account/assets/css/login.less";
</style>