<template>
    <div class="wallet-contain">
        <Navbar title="钱包" />
        <div class="asset-info">
            <div class="title">我的余额</div>
            <div class="number">{{ balance || 0 }}</div>
        </div>
        <div class="quota-box">
            <van-field
                v-model="userName"
                type="number"
                placeholder="请输入转账账户(手机号)"
            />
        </div>
        <div class="quota-box">
            <van-field
                v-model="balanceVal"
                type="number"
                placeholder="请输入转账金额"
            />
        </div>
        <div class="opt-box">
            <div
                class="cz-btn"
                @click="orderProduct"
            >发起转账</div>
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
            balance: '',
            balanceVal: "", // 转账金额
            userName: "", // 转账用户手机号、账号
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
        async orderProduct(memo, metadata) {
            if(!this.balanceVal){
                this.$toast.fail('转账金额不能为空')
                return
            }
            if(Number(this.balanceVal) > Number(this.balance)){
                this.$toast.fail('转账金额不能大于账户余额')
                return
            }
            let res = await this.axios.post('/transferMoney', {
                userName: this.userName,
                balanceVal: this.balanceVal,
                pi_uuid: this.user.uuid || JSON.parse(window.localStorage.getItem('userInfo')).pi_uuid
            })
            if(res.data.code == 200){
                this.$toast.success('转账成功')
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
@import "../my/assets/css/my-qb.less";
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
.quota-box{

}
</style>
