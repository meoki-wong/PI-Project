<template>
  <div class="set-account-contain">
    <Navbar title="账号设置"/>
    <van-field
            class="version"
            v-model="value"
            label="版本信息"
            placeholder="V2.13"
            disabled
            input-align="right"
        />
        <div class="logout-btn">
            <img @click="logout" src="./assets/img/logout.png" alt="">
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
            activeName: "1"
        }
    },
    methods: {
        logout(){
            localStorage.removeItem('token')
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="less" scoped>
.set-account-contain{
    min-height: 100vh;
    position: relative;
    .set-pwd{
        text-align: left;
        font-size: 14px;
        font-family: PingFang SC-Light, PingFang SC;
        font-weight: 300;
        color: #272727;
        .commit-btn{
            display: flex;
            img{
            width: 283px;
            height: 43px;
            margin: 10px auto 25px;
        }
        }
        
    }
    .version{
        border-bottom: 1px solid #EBEBEB;
        /deep/.van-cell__title{
            width: 56px;
            height: 20px;
            font-size: 14px;
            font-family: PingFang SC-Light, PingFang SC;
            font-weight: 300;
            color: #272727;
        }
    }
    .logout-btn{
        position: absolute;
        left: 50%;
        margin-top: 15px;
        margin-left: -140px;
        img{
            width: 283px;
            height: 43px;
        }
    }
}

</style>