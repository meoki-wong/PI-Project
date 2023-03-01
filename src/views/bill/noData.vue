<template>
  <div class="no-data-contain">
    <Navbar title="我的借款"/>
    <img src="./asset/img/noData.png" alt="">
    <p class="tips">暂无借款记录</p>
  </div>
</template>

<script>
import Navbar from '../components/NavBar.vue'
export default {
    components: {
        Navbar
    }
}
</script>

<style lang="less" scoped>
    .no-data-contain{
        img{
            width: 179px;
            height: 115px;
            margin: 63px auto 42px;
        }
        .tips{
            width: 84px;
            height: 20px;
            margin: 0 auto;
            font-size: 14px;
            font-family: PingFang SC-Light, PingFang SC;
            font-weight: 300;
            color: #989898;
        }
    }
</style>