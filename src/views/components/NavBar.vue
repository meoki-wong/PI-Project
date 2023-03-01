<template>
  <div class="nav-bar-contain">
    <van-nav-bar
        :title="title"
        left-arrow
        @click-left="onClickLeft"
        />
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    mounted(){
        console.log('----this', this.$route);
    },
    methods: {
        onClickLeft(){
            console.log('返回');
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>

.nav-bar-contain{
    /deep/.van-icon-arrow-left{
        color: #000
    }
}

</style>