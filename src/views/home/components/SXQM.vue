<template>
  <div class="SXQM-contain">
    <div class="write-area">
        <vue-esign
        ref="esign"
        class="mySign"
        :width="345"
        :height="164"
        :isCrop="isCrop"
        :lineWidth="lineWidth"
        :lineColor="lineColor"
        :bgColor.sync="bgColor"
      />
    </div>
    <div class="opt-btn">
        <div class="reset common-btn"><img src="../assets/img/reset-icon.png" alt="">  复位</div>
        <div class="push common-btn" @click="pushImg"><img src="../assets/img/push-icon.png" alt=""> 提交</div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
             lineWidth: 6, // 画笔的线条粗细
             lineColor: "#000000", // 画笔的颜色
             bgColor: "#BEBEBE", // 画布的背景颜色
             resultImg: "", // 最终画布生成的base64图片
             isCrop: false, // 是否裁剪，在画布设定尺寸基础上裁掉四周空白部分
        }
    },
    methods:{
        pushImg(){
            this.$refs.esign
                    .generate() // 使用生成器调用把签字的图片转换成为base64图片格式
                    .then((res) => {
                    this.resultImg = res;
                    this.axios.post('/upload/index', {file: res})
                    if(item.data.success){
                        this[type] = res.data.data
                    }
                    })
                    .catch((err) => {
                    // 画布没有签字时会执行这里提示一下
                    this.$toast({
                        type: "warning",
                        message: "请签名后再生成签字图片",
                    });
                    });
        }
    }
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