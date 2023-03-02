<template>
  <div class="kf-contain">
    <iframe class="iframe-box" :src="url" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
    data(){
        return {
            url: ''
        }
    },
    mounted(){
        this.url = localStorage.getItem('chat_url')
    }
}
</script>

<style lang="less" scoped>
.iframe-box{
    width: 100%;
    height: 100vh;
}

</style>