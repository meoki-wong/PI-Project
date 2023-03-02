<template>
    <div class="ZL-contain">
        <van-field
            v-model="info.contact1"
            label="家庭联系人"
            placeholder="家庭联系人姓名"
            input-align="right"
        />
        <van-field
            v-model="info.contactnumber1"
            label="家庭联系人电话"
            placeholder="家庭联系人电话"
            input-align="right"
        />
        <van-field
            v-model="info.contact2"
            label="紧急联系人"
            placeholder="紧急联系人姓名"
            input-align="right"
        />
        <van-field
            v-model="info.contactnumber2"
            label="紧急联系人电话"
            placeholder="紧急联系人电话"
            input-align="right"
        />
        <van-field
            v-model="info.salary"
            label="个人薪酬"
            placeholder="个人薪酬"
            input-align="right"
        />
        <div class="commot-btn" @click="commitData">
            <img src="../assets/img/next-step.png" alt="">
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            info: {
                contact1: "",
                contactnumber1: "",
                contact2: "",
                contactnumber2: "",
                salary: ""
            }
        }
    },
    methods: {
        async commitData(){
            // let res = await this.axios.post('/user/user_info', this.info)
            // if(res.data.success){
            //     this.$toast.success('提交成功')
            // }
                document.querySelectorAll('.van-tab')[2].click()
                this.$parent.$parent.$parent.$parent.params = {
                    ...this.$parent.$parent.$parent.$parent.params,
                ...this.info,
                }
        }
    }
}
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