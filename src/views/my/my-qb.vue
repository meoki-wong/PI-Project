<template>
    <div class="wallet-contain">
        <Navbar title="充值" />
        <div class="asset-info">
            <div class="title">我的余额</div>
            <div class="number">{{ Number(balance) || 0 }}</div>
        </div>
        <div class="quota-box">
            <van-field
                v-model="balanceVal"
                type="number"
                placeholder="请输入充值额度"
            />
        </div>
        <div class="opt-box">
            <div
                class="cz-btn"
                @click="orderProduct('用户充值金额', {productId: 'NW1U6C9SrGAGP52GukLyU0NWnXPj'})"
            >立即充值</div>
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
            balance: 0,
            balanceVal: "",
            config: {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            },
            user: "",
        };
    },
    mounted() {
        this.getUserInfo();
    },
    methods: {
      async getAccount(){
            // let pi_uuid
            // if (window.parent === window.self) {
            //     pi_uuid = JSON.parse(localStorage.getItem('userInfo')).pi_uuid
            // } else {
            //     pi_uuid = this.user.uid
            // }
            let res = await this.axios.post('/findAccount', {
                pi_uuid: this.user
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
                this.user = authResult.user.uid || "";
                this.getAccount()
                console.log('----useridssss-----', this.user, authResult);
            }
        },
        async orderProduct(memo, metadata) {
            let _this = this
            if (window.parent === window.self) {
                this.$toast.fail("请在pi浏览器环境下进行充值");
                return;
            }
            if (!this.balanceVal) {
                this.$toast.fail("充值金额至少大于1");
                return;
            }
            let amount = this.balanceVal;
            if (this.user === null) {
                this.$toast.fail("还未登录");
                this.$router.push("/login");
            }
            const paymentData = { amount, memo, metadata, uid: this.user };
            const callbacks = {
                onReadyForServerApproval: _this.onReadyForServerApproval,
                onReadyForServerCompletion: _this.onReadyForServerCompletion,
                onCancel: _this.onCancel,
                onError: _this.onError,
            };
                const payment = await window.Pi.createPayment(
                paymentData,
                callbacks
            );
            console.log('--payment', payment);
            let params = {
                ...payment,
                ...payment.status,
                ...payment.transaction,
            };
            delete params.status;
            delete params.transaction;
            let paymnetRes = await this.axios("/paymnet", params);
            if (res.data.code == 200) {
                this.$toast.success("充值成功");
            }
            console.log("支付结束", payment);
        },
        onIncompletePaymentFound(payment) {
            console.log("onIncompletePaymentFound", payment);
            return this.axios.post("/payments/incomplete", { payment });
        },

        onReadyForServerApproval(paymentId) {
            console.log("onReadyForServerApproval", paymentId);
            this.axios.post("/payments/approve", { paymentId }, this.config);
        },

        onReadyForServerCompletion(paymentId, txid) {
            console.log("onReadyForServerCompletion", paymentId, txid);
            this.axios.post(
                "/payments/complete",
                { paymentId, txid, count: this.balanceVal, pi_uuid: this.user },
                this.config
            );
        },

        onCancel(paymentId) {
            console.log("onCancel", paymentId);
            return this.axios.post("/payments/cancelled_payment", {
                paymentId,
            });
        },

        onError(error, payment) {
            console.log("onError", error);
            if (payment) {
                console.log(payment);
                // handle the error accordingly
            }
        },
    },
};
</script>

<style lang="less" scoped>
@import "./assets/css/my-qb.less";
.cz-btn {
    width: 300px;
    height: 60px;
    border-radius: 14px;
    background-color: #ff3939;
    font-weight: 500;
    font-size: 18px;
    color: #fffbfb;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
