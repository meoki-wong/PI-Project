import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 登录
  {
    path: '/login',
    name: 'Login',
    title: "注册/登录",
    component: () => import('../views/account/login.vue')
  },
  // 账单-已借款-查看合同
  {
    path: '/checkContract',
    name: 'Login',
    title: "我的合同",
    component: () => import('../views/bill/zd-yjk-ckht.vue')
  },
  // 客服
  {
    path: '/kf',
    name: 'kf',
    title: "客服",
    component: () => import('../views/kf/index.vue')
  },
  // 账单-已借款
  {
    path: '/myloan',
    name: 'myloan',
    title: "我的借款",
    component: () => import('../views/bill/zd-yjk.vue')
  },
  // 账单-我的借款-暂无数据
  {
    path: '/myloan-nodata',
    name: 'myloan-nodata',
    title: "我的借款",
    component: () => import('../views/bill/noData.vue')
  },
  // 账单-借款
  {
    path: '/loan',
    name: 'loan',
    title: "我的借款",
    component: () => import('../views/bill/zd-jk.vue')
  },
  {
    path: '/loanDetail',
    name: 'loanDetail',
    title: "资金明细",
    component: () => import('../views/my/my-zjmx.vue')
  },
  // 我的-钱包
  {
    path: '/wallet',
    name: 'wallet',
    title: "钱包",
    component: () => import('../views/my/my-qb.vue')
  },
  // 我的-查看还款
  {
    path: '/extract',
    name: 'extract',
    title: "提现",
    component: () => import('../views/my/my-ckhk.vue')
  },
  // 我的-设置-账号设置
  {
    path: '/setAccount',
    name: 'setAccount',
    title: "账号设置",
    component: () => import('../views/my/my-settingAccount.vue')
  },
  // 我的-关于我们
  {
    path: '/aboutMe',
    name: 'aboutMe',
    title: "关于我们",
    component: () => import('../views/my/my-aboutMe.vue')
  },
  // 我的-首页
  {
    path: '/my',
    name: 'my',
    title: "关于我们",
    component: () => import('../views/my/my-index.vue')
  },
  // 我的-资金明细
  {
    path: '/fundDetails',
    name: 'fundDetails',
    title: "资金明细",
    component: () => import('../views/my/my-zjmx.vue')
  },
  // 首页
  {
    path: '/',
    name: 'home',
    title: "首页",
    component: () => import('../views/home/home-index.vue')
  },
  // 首页-立即借款-借款用途
  {
    path: '/loanPurpose',
    name: 'loanPurpose',
    title: "资金明细",
    component: () => import('../views/home/home-ljjk.vue')
  },
  // 首页-快速入门-常见问题
  {
    path: '/FAQ',
    name: 'FAQ',
    title: "常见问题",
    component: () => import('../views/home/home-cjwt.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
