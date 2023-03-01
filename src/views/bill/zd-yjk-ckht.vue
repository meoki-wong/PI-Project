// 账单-已借款-查看合同
<template>
    <div class="check-contract-contain">
        <Navbar title="我的合同"/>
        <div class="inner-contract">
            <p> 甲方(出借人)： 深圳前海微众银行股份有限公司</p>
            <p> 乙方(借款人)：牛牛</p>
            <p> 身份证号：254884558889</p>
            <p> 银行卡号：26688855455555954</p>
            <p> 手机号：13462055555</p>
            <p> 甲乙双方本着平等自愿、诚实信用的原则，经协商一致，达成本小额贷款合同，并保证共同遵守执行。</p>
            <p> 一、借款金额 ：乙方向甲方借款人民币 (大写：伍万元整) (小写：50000.00元 )。</p>
            <p> 二、借款利息：借款利率为 0.6%。</p>
            <p> 三、借款期限：借款期限为 3 个月，从 2023-02-12 起至 2023-05-12 止。如实际放款日与该日期不符，以实际借款日期为准。乙方收到借款后应当出具收据，乙方所出具的借据为本小额贷款合同的附件，与本小额贷款合同具有同等法律效力。</p>
            <p> 四、甲方以转账的方式将所借款项打入乙方账户。</p>
            <p> 五、保证条款：</p>
            <p> 1、借款方不得用借款进行违法活动。否则，甲方有权要求乙方立即还本付息，所产生的法律后果由乙方自负。</p>
            <p> 2、借款方必须按合同规定的期限还本付息。逾期不还的部分，借款方有权限期追回借款并收取每天借款总金额的 10% 逾期费用 。</p>
            <p> 六、违约责任</p>
            <p> 1、乙方如未按合同规定归还借款，乙方应当承担违约金以及因诉讼发生的律师费、诉讼费、差旅费等费用。</p>
            <p> 2、当甲方认为借款人发生或可能发生影响偿还能力之情形时，甲方有权提前收回借款，借款人应及时返还，借款人及保证人不得以任何理由抗辩。</p>
            <p> 七、合同争议的解决方式：本合同在履行过程中发生的争议，由当事人双方友好协商解决，也可由第三人调解。协商或调解不成的，可依法向甲方所在地人民法院提起诉讼。</p>
            <p> 八、本小额贷款合同自各方签字（含电子签名）之日起生效。合同文本具有同等法律效力。</p>

            <p> 甲方(签字)： 深圳前海微众银行股份有限公司</p>
            <p> 乙方(借款人)：</p>
            <p> 签订日期：2023-02-12</p>
        </div>
        <div class="seal-img">
            <img src="./asset/img/seal-img.png" alt="">
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/NavBar.vue'
    export default {
        components: {
            Navbar
        },
        mounted(){
        console.log('----this', this.$router.options.routes[this.$route.path]);
    },
    }
</script>

<style lang="less" scoped>
.check-contract-contain {
    position: relative;
    .inner-contract{
        display: block;
        padding: 25px 16px;
        box-sizing: border-box;
        font-size: 14px;
        font-family: PingFang SC-Light, PingFang SC;
        font-weight: 300;
        color: #272727;
        line-height: 0px;
        text-align: left;
        p{
            line-height: 30px
        }
    }
    .seal-img{
        width: 98.58px;
        height: 98.58px;
        position: absolute;
        bottom: 30px;
        right: 30px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>