import router from '../router/index'

if(window.parent === window.self){
    router.beforeEach((to, from, next) =>{
    //首先，我们先看一看to和from参数，next就是执行的意思，不写页面是不会跳转的
    // console.log(to, from);
    let token = window.localStorage.getItem('token')
        if(!token && to.path !== '/login'){
            next({
                path: '/login'
            })
        }else{
            next()
        }
})
}


export default router