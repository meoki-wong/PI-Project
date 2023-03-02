<template>
    <div class="SFZ-contain">
        <van-field
            v-model="info.realname"
            label="真实姓名"
            placeholder="请输入您的姓名"
            input-align="right"
        />
        <van-field
            v-model="info.cardnumber"
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
                    <img class="id-card" :src="info.cardpic1 ? info.cardpic1 : require('../assets/img/idcard1.png')" alt="">
                    <input type="file" class="upload-input" @change="inputPhoto($event, 'cardpic1')">
                </template>
            </van-field>
            <van-field
                class="id-card-box"
                v-model="sms"
                label="身份证反面照片"
                type="file"
                center
                clearable
                placeholder="请输入验证码"
            >
                <template #input>
                    <img class="id-card" :src="info.cardpic2? info.cardpic2: require('../assets/img/idcard2.png')" alt="">
                    <input type="file" class="upload-input" @change="inputPhoto($event, 'cardpic2')">
                </template>
            </van-field>
        <div class="commot-btn" @click="commitData">
            <img src="../assets/img/next-step.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "SFZ",
    props: {
        testData: {
            type: Object,
            default: () => {}
        }
    },
    data(){
        return {
            info: {
                realname: "",
                cardnumber: "",
                cardpic1: "", // 正面
                cardpic2: "", // 反面
            },
            
            value: '',
            sms: ""
        }
    },
    methods: {
        async inputPhoto(e, type) {
            let file = e.target.files;
            var formData = new FormData();
            let res = await this.axios.post('/upload/index', {file: file[0]})
            if(res.data.success){
                this.info[type] = res.data.data
            }

        },
    
        async commitData(){
            // let res = await this.axios.post('/user/user_info', {
            //     cardpic1: this.cardpic1,
            //     cardpic2: this.cardpic2,
            //     ...this.info
            // })
            // if(res.data.success){
            //     this.$toast.success('提交成功')
            // }
            // this.$emit('sonData', {
            //     cardpic1: this.cardpic1,
            //     cardpic2: this.cardpic2,
            //     ...this.info
            //     })
                // this.$parent.$parent.$parent.$parent.changeTabs('ZL')
                document.querySelectorAll('.van-tab')[1].click()
                this.$parent.$parent.$parent.$parent.params = {
                    ...this.$parent.$parent.$parent.$parent.params,
                ...this.info,
                }
        }
    }
}
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
        .upload-input{
            position: absolute;
            width: 159px;
            height: 98px;
            opacity: 0;
        }
    }
    /deep/.van-cell--borderless::after,
    .van-cell:last-child::after {
        display: block;
    }
}
</style>