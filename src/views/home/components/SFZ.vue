<template>
    <div class="SFZ-contain">
        <van-field
            v-model="value"
            label="真实姓名"
            placeholder="请输入您的姓名"
            input-align="right"
        />
        <van-field
            v-model="value"
            label="身份证号"
            placeholder="请输入身份证号"
            input-align="right"
        />
        <van-field
                class="id-card-box"
                v-model="sms"
                label="身份证正面照片"
                center
                clearable
                placeholder="请输入验证码"
            >
                <template #input>
                    <img class="id-card" src="../assets/img/idcard1.png" alt="">
                </template>
            </van-field>
            <van-field
                class="id-card-box"
                v-model="sms"
                label="身份证正面照片"
                center
                clearable
                placeholder="请输入验证码"
            >
                <template #input>
                    <img class="id-card" src="../assets/img/idcard2.png" alt="">
                </template>
            </van-field>
        <div class="commot-btn">
            <img src="../assets/img/commit.png" alt="">
        </div>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
.SFZ-contain {
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
    .id-card-box{
        align-items: flex-start;
        height: 155px;
        padding-top: 25px;
        box-sizing: border-box;
        .id-card{
            width: 159px;
            height: 98px;
            margin-right: 52px;
        }
    }
    /deep/.van-cell--borderless::after,
    .van-cell:last-child::after {
        display: block;
    }
}
</style>