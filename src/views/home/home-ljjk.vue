<template>
  <div class="loan-Purpose-contain">
    <Navbar :title="navTitle.title"/>
    <van-tabs type="card" @change="changeTabs">
        <van-tab :title="item.title" :name="item.type" v-for="(item, index) in tabsList" :key="index">
            <component :is="list"></component>
        </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Navbar from '../components/NavBar.vue'
export default {
    components: {
        Navbar,
    },
    mounted(){
        this.getData()
    },
    data(){
        return{
            tabsList: [
                {title: '身份证', type: "SFZ"},
                {title: '资料', type: "ZL"},
                {title: '银行卡', type: "YHK"},
                {title: '手写签名', type: "SXQM"},
                {title: '借款用途', type: "JKYT"}
            ],
            list: () => import('./components/SFZ.vue'),
            navTitle: "身份证"
        }
    },
    methods: {
        changeTabs(e){
            this.list = () => import(`./components/${e}.vue`)
            this.navTitle = this.tabsList.find(item=> item.type == e)
        },
        async getData(){
            let res = await this.axios.get('/user/user_info')
            console.log('====res', res);

        }
    }
}
</script>

<style lang="less" scoped>
.loan-Purpose-contain{
    ::v-deep{
        .van-tabs__wrap, .van-tabs__nav--card{
            height: 38px;
        }
        .van-tabs__nav--card{
            border-color: #94BCFF;
            margin: 0;
            border-left: 0;
            border-right: 0;
        }
        .van-tabs__nav--card .van-tab{
                border-right: 0;
                font-size: 14px;
                font-family: PingFang SC-Light, PingFang SC;
                font-weight: 300;
                color: #94BCFF;

            }
        .van-tabs__nav--card .van-tab.van-tab--active{
            color: #0C60EA;
            background-color: #94BCFF;
        }
        .van-field__label{
            flex: 1;
        }
    }
}

</style>