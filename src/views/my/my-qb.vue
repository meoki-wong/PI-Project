<template>
  <div class="wallet-contain">
    <Navbar title="钱包"/>
    <div class="asset-info">
        <div class="title">我的资产（元）</div>
        <div class="number">{{dataObject.balance}}</div>
    </div>
    <div class="quota-box">
        <div class="common">
            <p>我的借款（元）</p>
            <p>{{dataObject.balance}}</p>
        </div>
        <div class="common">
            <p>可提现额度（元）</p>
            <p>{{dataObject.balance}}</p>
        </div>
    </div>
    <div class="opt-box">
            <img src="./assets/img/tixian-btn.png" alt="" @click="getMoney">
            <img src="./assets/img/mingxi-btn.png" alt="" @click="loanDetail">
    </div>
    <div class="bank-card-title">
        <img src="./assets/img/card-icon.png" alt="">
        银行卡
    </div>
    <div class="card-info">
        <ul>
            <li>
                <span class="title">姓名</span>
                <span class="inner">{{ dataObject.realname|| '未绑定'}}</span>
            </li>
            <li>
                <span class="title">卡号</span>
                <span class="inner">{{dataObject.banknumber || '未绑定'}}</span>
            </li>
        </ul>
    </div>
    <div class="icon-box">
        <p>
            <img src="./assets/img/cash-icon.png" alt="">
            账户资金安全由银行保护
        </p>
        <p>
            <img src="./assets/img/question-icon.png" alt="">
            如有延迟到账请联系在线客服
        </p>
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
            dataObject: {},
        }
    },
    mounted(){
        this.getData()
    },
    methods: {
        async getData(){
            // let { balance, realname, banknumber} = JSON.parse(sessionStorage.getItem(userInfo))
            let res = await this.axios.get('/user/withdraw')
            // alert(1)
            if(res.data.success){
                console.log(res)
                this.dataObject = res.data.data
            }
        },
        // 提现
        async getMoney(){
            let res = await this.axios.post('/user/withdraw', {money: dataObject.balance})
            if(res.data.success){
                this.$toast.success('提交成功')
            }
        },

        loanDetail(){
            this.$router.push('/loanDetail')
        }
    }
}
</script>

<style lang="less" scoped>
@import "./assets/css/my-qb.less";

</style>