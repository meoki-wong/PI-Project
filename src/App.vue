<template>
  <div id="app">
    <router-view class="route-view"/>
    <van-tabbar v-model="active" class="tabs-bar" >
      <van-tabbar-item @click="$router.push('/')">
        <span>首页</span>
        <template #icon="props">
          <img class="common-img" :src="props.active ? require('./assets/home-icon.png') : require('./assets/home.png')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item @click="$router.push('/myloan')">
        <span>账单</span>
        <template #icon="props">
          <img class="common-img" :src="!props.active ? require('./assets/zd-icon.png'): require('./assets/loan-check.png')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item @click="$router.push('/kf')">
        <span>客服</span>
        <template #icon="props">
          <img class="common-img" :src="!props.active ? require('./assets/kf-icon.png'): require('./assets/kf-check.png')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item @click="$router.push('/my')">
        <span>我的</span>
        <template #icon="props">
          <img class="common-img" :src="!props.active ? require('./assets/my-icon.png'): require('./assets/my-check.png')" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import NavBar from './views/components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  data(){
    return {
      active: 0
    }
  }
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
.route-view{
  margin-bottom: 64px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  .tabs-bar, .van-tabbar-item{
  height: 64px!important;
  display: flex;
  align-items: center;
}
.common-img{
  width: 30px;
  height: 30px!important;
}

.van-tabbar-item__text{
font-size: 12px;
font-family: PingFang SC-Light, PingFang SC;
font-weight: 300;
color: #989898;
}
.tabs-bar  .van-tabbar-item--active span{
  color: #F91E1E!important;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
