<template>
    <div class="ZL-contain">
        <van-field
            v-model="value"
            label="家庭联系人"
            placeholder="家庭联系人姓名"
            input-align="right"
        />
        <van-field
            v-model="value"
            label="家庭联系人电话"
            placeholder="家庭联系人电话"
            input-align="right"
        />
        <van-field
            v-model="value"
            label="紧急联系人"
            placeholder="紧急联系人姓名"
            input-align="right"
        />
        <van-field
            v-model="value"
            label="紧急联系人电话"
            placeholder="紧急联系人电话"
            input-align="right"
        />
        <van-field
            v-model="value"
            label="个人薪酬"
            placeholder="个人薪酬"
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
.ZL-contain {
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