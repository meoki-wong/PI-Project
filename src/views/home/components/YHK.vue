<template>
    <div class="YHK-contain">
        <van-field
            v-model="value"
            label="持卡人姓名"
            placeholder="持卡人姓名"
            input-align="right"
        />
        <van-field
            v-model="value"
            label="开户银行"
            placeholder="开户银行"
            input-align="right"
        />
        <van-field
            v-model="value"
            label="银行卡号"
            placeholder="银行卡号"
            input-align="right"
        />
        <div class="commot-btn">
            <img src="../assets/img/commit.png" alt="">
        </div>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
.YHK-contain {
    .commot-btn{
        margin-top: 25px;
        img{
            width: 283px;
            height: 43px;
            margin: 0 auto;
        }
    }
    /deep/.van-cell {
        height: 60px;
        align-items: center;
    }
    /deep/.van-cell--borderless::after,
    .van-cell:last-child::after {
        display: block;
    }
}
</style>