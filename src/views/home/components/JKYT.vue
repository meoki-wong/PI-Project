// 借款用途
<template>
    <div class="jkyt-contain">
        <van-field
            v-model="info.useremark"
            label="借款用途"
            placeholder="借款用途"
            input-align="right"
        />
        <div class="next-step" @click="commitData">
            <img src="../assets/img/commit.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            info: {
                useremark: ""
            }
        }
    },
    methods: {
        async commitData(){
            this.$parent.$parent.$parent.$parent.params = {
                ...this.$parent.$parent.$parent.$parent.params,
                useremark: this.info.useremark
            }
            console.log('====所有参数', this.$parent.$parent.$parent.$parent.params);
            let res = await this.axios.post('/user/user_info', {...this.$parent.$parent.$parent.$parent.params})
            if(res.data.success){
                this.$toast.success('提交成功')
                this.$router.push('/')
            }
        }
    }
}
</script>

<style lang="less" scoped>
.jkyt-contain{
    width: 335px;
    height: 50px;
    margin: 10px 20px 0;
    border-bottom: 1px solid #EBEBEB;
    .next-step{
        margin-top: 25px;
        img{
            width: 283px;
            height: 43px;
        }
    }
    /deep/.van-cell::after{
        border-bottom: 0;
    }
}
</style>