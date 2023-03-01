import axios from 'axios'
import { Toast } from 'vant';
import Vue from 'vue'



// import axiosRetry from 'axios-retry'
// @ts-ignore

let axiosInstance = axios.create({
    // baseURL: process.env.NODE_ENV === 'production' ?
    baseURL: 'http://107.182.25.77:3988/api',
    timeout: 15 * 1000, // 设置请求超时时间
    retryDelay: 1000, // 超时请求
    retry: 4, // 超时重新触发请求次数
})

Vue.prototype.axios = axiosInstance

// const navigate = useNavigate()


// 请求拦截
let requestWhiteList = ['/login', '/register', '/getFullViews', '/getUniqueViews'] // 请求白名单
axiosInstance.interceptors.request.use((config) => {
    if (requestWhiteList.includes(config.url)) {
        return config
    }
    let userInfo = {
        id: JSON.parse(localStorage.getItem('userInfo'))?.id || ''
    }
    let token = window.localStorage.getItem('token')
    if (!config.headers) {
        config.headers = {}
    } else {
        // 区分上传接口和普通接口
        if (config.url === "/uploadFile") {
            //以formData上传时请求头Content-Type类型要改为multipart/form-data
            config.headers['Content-Type'] = "multipart/form-data";
        } 
        else {
            config.headers['Content-Type'] = 'application/json';
        }
        config.headers.authorization = token 
        // 暂时不能使用中文做中文名  header不能写入中文  需要传入时进行过滤  后期做处理
        config.headers = {
            authorization: token,
            userInfo: JSON.stringify(userInfo)
        }
    }
    return config
}, (err) => {
    Toast.fail(err)
    console.log('=====>请求拦截失败:', err)
})


// 响应拦截
axiosInstance.interceptors.response.use((config) => {
    let { status, statusText, data } = config
    if (!data.success) {
        Toast.fail(data.Message)
        return
    }
    return config
}, (err) => {
    // 设置超时请求
    Toast.fail(String(err)) // statusCode 不为200时   报相关异常信息
    
})

export default axiosInstance


