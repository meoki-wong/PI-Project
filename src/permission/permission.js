import router from '../router/index'

const onIncompletePaymentFound = (payment) => {
    console.log("onIncompletePaymentFound", payment);
    return this.axios.post('/payments/incomplete', {payment});
}
if(window.parent === window.self){
    router.beforeEach(async (to, from, next) =>{
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
} else {
    router.beforeEach(async (to, from, next) =>{
        //首先，我们先看一看to和from参数，next就是执行的意思，不写页面是不会跳转的
        // console.log(to, from);
            
            if(!window.server && to.path !== '/login'){
                next({
                    path: '/login'
                })
            }else{
                next()
            }
    })
}


export default router