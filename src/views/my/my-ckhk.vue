<template>
    <div class="wallet-contain">
        <Navbar title="钱包" />
        <div class="asset-info">
            <div class="title">我的余额</div>
            <div class="number">{{ Number(balance) || 0 }}</div>
        </div>
        <div class="quota-box">
            <van-field
                v-model="balanceVal"
                type="number"
                placeholder="请输入提现额度"
            />
        </div>
        <div class="opt-box">
            <div
                class="cz-btn"
                @click="orderProduct('用户提现金额', 'withdraw_id')"
            >立即提现</div>
        </div>
        <div class="tips">注：提现将会收取一定比例手续费，提现成功将从余额中扣除，提现比例为 {{proportion}}% </div>
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
            proportion: 0,
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
        this.findProportion()
        this.getAccount()
    },
    methods: {
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
        async getAccount(){
            let pi_uuid
            if (window.parent === window.self) {
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
        async findProportion(memo, metadata) {
            let res = await this.axios.post('/findProportion')
            if(res.data.code == 200){
                this.proportion = res.data.data.proportion
            }
        },
        orderProduct(){ 
            if(window.parent === window.self){
                this.$toast.fail('提现操作请在Pi浏览器中进行')
                return
            }
            if(!this.balanceVal){
                this.$toast.fail('提现余额不能为0或为空')
                return
            }

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
                { paymentId, txid },
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
.tips{
    padding: 20px;
    box-sizing: border-box;
    color: #aaa;
    text-align: left;
}
</style>
