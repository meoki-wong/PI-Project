<template>
  <div class="SXQM-contain">
    <div class="write-area">

    </div>
    <div class="opt-btn">
        <div class="reset common-btn"><img src="../assets/img/reset-icon.png" alt="">  复位</div>
        <div class="push common-btn"><img src="../assets/img/push-icon.png" alt=""> 提交</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.SXQM-contain{
    .write-area{
        width: 345px;
        height: 164px;
        margin: 25px auto 15px;
        background-color: #BEBEBE;
    }
    .opt-btn{
        margin: 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .common-btn{
            width: 76px;
            height: 38px;
            font-size: 14px;
            font-family: PingFang SC-Light, PingFang SC;
            font-weight: 300;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 12.9px;
                height: 12.92px;
                margin-right: 3px;
            }
        }
        .reset{
            background-color: #F91E1E;
        }
        .push{
            background-color: #42CF27;
        }
    }
}
</style>